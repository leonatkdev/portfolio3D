import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { logo, menu, close } from "../../../assets";
import { IoClose } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
import Scrollbar from "../../Dashboard/atoms/scrollbar";

const NavigationBar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [showModal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const shadow = useRef();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    if (!formData.username || !formData.password) {
      setErrors({
        username: !formData.username ? "Username is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    // Reset errors
    setErrors({
      username: "",
      password: "",
    });

    // Perform your login logic here

    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      sessionStorage.setItem("user", JSON.stringify(data));
      window.location.href = "/dashboard";
      // history.push('/dashboard');
      // Optionally, handle the successful login here
    } catch (error) {
      console.error("Error during login:", error);
      // Optionally, handle the login error here
    }
  };
  
  return (
    <>
      <nav
        className={` w-full z-30 flex items-center px-3 sm:px-16 sm: py-3 sm:py-3 fixed top-0 bg-primary backdrop-blur-md`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto gap-3">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
          >
            <img
              src={logo}
              alt="Leonat Krasniqi Logo"
              className=" w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <p className="text-white text-[14px] sm:text-[18px] font-bold cursor-pointer">
              Leonat <span className="sm:block">| Full Stack Developer</span>
            </p>
          </Link>

          <div
            ref={shadow}
            className={`${
              !toggle ? "hidden sm:flex" : "flex"
            }  absolute top-[60px] bg-custom-gradient  p-6 right-0 left-0 min-w[140px] h-screen z-10 sm:h-min sm:flex sm:static sm:mx-4 sm:my-2 sm:top-20 sm:bg-none`}
          >
            <ul className=" w-full h-fit list-none flex items-start flex-col gap-4  sm:flex-row sm:justify-end">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  className={`${
                    active === link.title
                      ? " text-white"
                      : " text-costume sm:text-secondary"
                  }  hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  <a
                    href={link.type === "page" ? `${link.id}` : `/#${link.id}`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <div className=" relative">
                <span
                  onClick={() => setModal(!showModal)}
                  className={`${
                    showModal ? "text-white " : " sm:text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                >
                  Dashboard
                </span>
                {showModal && (
                  <form
                    className="absolute left-0 top-[35px] flex flex-col rounded-lg bg-[#23265D] p-4
                            sm:right-0 sm:left-[unset]
                             before:absolute before:left-[16%] before:border-l-[10px] before:border-r-[10px] before:border-transparent before:border-b-[#23265D] before:border-b-[16px]
                            before:block before:top-[-13px]
                            sm:before:left-[unset] sm:before:right-[16%]"
                    onSubmit={handleSubmit}
                  >
                    <IoClose
                      onClick={() => setModal(false)}
                      className="ml-auto"
                    />
                    <label className="text-sm mb-1">Username</label>
                    <input
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="username"
                      type="username"
                      className={`p-2 rounded-md ${
                        errors.username && "border-red-500"
                      }`}
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm">{errors.username}</p>
                    )}

                    <label className="text-sm mb-1 mt-3">Password</label>
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      type="password"
                      className={`p-2 rounded-md ${
                        errors.password && "border-red-500"
                      }`}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm">{errors.password}</p>
                    )}

                    <button
                      type="submit"
                      className="bg-[#915EFF] rounded-lg p-2 mt-3"
                    >
                      Log in
                    </button>

                    {/* <Link to="/dashboard" className="text-[#aa82ff] underline text-center mt-3 text-sm">
                  Continue as Guest
                </Link> */}
                  </form>
                )}
              </div>
            </ul>
          </div>

          <div className="sm:hidden flex flex-1 justify-end items-center flex-none">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className={`w-[20px] h-[20px] object-contain cursor-pointer ${
                toggle && " w-[16px] h-[16px]"
              }`}
              onClick={() => setToggle(!toggle)}
            />
          </div>
        </div>
      </nav>
      <Scrollbar />
    </>
  );
};

export default NavigationBar;
