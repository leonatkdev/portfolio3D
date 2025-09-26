import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../../style";
import { SectionWrapper } from "../../../hoc";

import { EarthCanvas } from "../canvas";
import { slideIn, fadeIn } from "../../../utils/motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }),
      });
  
      if (!res.ok) throw new Error("Failed to send");
  
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        message: "",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong");
    }
  };
  

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-black-100/80 to-tertiary/40 p-8 rounded-2xl backdrop-blur-sm border border-[#915eff]/20"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg"
          >
            <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
          </motion.div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <motion.label 
            className="flex flex-col"
            variants={fadeIn("up", "tween", 0.1, 1)}
          >
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className={`bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 backdrop-blur-sm ${
                errors.name ? "border-red-500" : "border-transparent focus:border-[#915eff]"
              }`}
            />
            {errors.name && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.name}
              </motion.span>
            )}
          </motion.label>

          <motion.label 
            className="flex flex-col"
            variants={fadeIn("up", "tween", 0.2, 1)}
          >
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className={`bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 backdrop-blur-sm ${
                errors.email ? "border-red-500" : "border-transparent focus:border-[#915eff]"
              }`}
            />
            {errors.email && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.email}
              </motion.span>
            )}
          </motion.label>

          <motion.label 
            className="flex flex-col"
            variants={fadeIn("up", "tween", 0.3, 1)}
          >
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={`bg-tertiary/80 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-2 font-medium transition-all duration-300 backdrop-blur-sm resize-none ${
                errors.message ? "border-red-500" : "border-transparent focus:border-[#915eff]"
              }`}
            />
            {errors.message && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm mt-2"
              >
                {errors.message}
              </motion.span>
            )}
          </motion.label>

          <motion.button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#915eff] to-[#6366f1] py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-[#915eff]/30 rounded-xl hover:shadow-xl hover:shadow-[#915eff]/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            variants={fadeIn("up", "tween", 0.4, 1)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
