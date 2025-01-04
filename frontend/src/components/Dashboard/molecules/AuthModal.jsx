import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";


const AUTHModal = ({showModaAuth = false, setShowModalAuth}) => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  // const shadow = useRef();
  // const navigate = useNavigate();

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
      const response = await fetch(
        "https://portfolio3d-c4gq.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // console.log("data", data);

      sessionStorage.setItem("user", JSON.stringify(data));
      // window.location.href = "/dashboard";
      // history.push('/dashboard');
      // Optionally, handle the successful login here
    } catch (error) {
      console.error("Error during login:", error);
      // Optionally, handle the login error here
    }
  };

  // const handleGuest = async (e) => {
  //   sessionStorage.setItem(
  //     "user",
  //     JSON.stringify({ username: "guest", password: "guest" })
  //   );
  //   window.location.href = "/dashboard";
  // };

  return (
    <div className=" absolute top-0 z-50 w-full h-full">
      <div className="absolute top-0  w-full h-full backdrop-blur"></div>
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-stone-400
  p-6 flex flex-col rounded-2xl  max-w-80
  "
        onSubmit={handleSubmit}
      >
        <div className="flex gap-4">
          <span className="text-black text-lg mb-3 font-semibold">
            Administrator access is required to proceed
          </span>

          <IoClose
            onClick={() => setShowModalAuth(false)}
            className="ml-auto w-6 h-6 flex-none"
            color="black"
          />
        </div>
        <label className="text-sm mb-1 text-black">Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="username"
          type="username"
          className={`relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
            errors.username && "border-red-500"
          }`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}

        <label className="text-sm mb-1 mt-3 text-black">Password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          type="password"
          className={`
        relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 ${
          errors.password && "border-red-500"
        }`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}

        <button type="submit" className="bg-[#915EFF] rounded-lg p-2 mt-3">
          Log in
        </button>
      </form>
    </div>
  );
};

export default AUTHModal;
