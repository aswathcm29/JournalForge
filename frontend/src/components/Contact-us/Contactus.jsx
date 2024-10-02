/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ContactusStyles.css";
import axios from "axios";

const ContactusForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    
  };

  // Function to call backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const Token = getCookieValue("journal_token");
      const response = await axios.post(
        "http://localhost:5000/journal/Contact",
        {
          Name: `${formData.firstName} ${formData.lastName}`,
          Email: formData.email,
          Phone: formData.phone,
          Message: formData.message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Form data sent successfully!");
      } else {
        alert("Error sending form data.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    //added form
    <form className="w-full text-[#333]" onSubmit={handleSubmit}>
      <div className="input-double-wrapper">
        <div className="input-wrapper">
          <div>First Name :</div>
          <input
            type="text"
            name="firstName"
            placeholder="First name.."
            className="input"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <div>Last Name :</div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name.."
            className="input"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="input-double-wrapper">
        <div className="input-wrapper">
          <div>Email :</div>
          <input
            type="email"
            name="email"
            placeholder="sample@gmail.com"
            className="input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-wrapper">
          <div>Phone number :</div>
          <input
            type="number"
            name="phone"
            placeholder="12345678"
            className="input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <div className="w-[95%] flex flex-col items-start gap-4 text-lg m-5">
          <div>Message :</div>
          <textarea
            type="text"
            name="message"
            placeholder="Your message..."
            className="h-[130px] w-full border-solid border-2 border-[#333] rounded-md p-2 bg-[#f3f4f5] text-[#333]"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#333] text-[#f3f4f5] p-2 px-4 text-xl rounded-md"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

const Contactus = () => {
  return (
    <div className="flex flex-row sm:m-10 m-0 shadow-sm">
      <div className="w-[40%] bg-[#2F2F2F] text-[#f3f4f5] hidden md:flex rounded-lg justify-center items-center flex-col gap-10 text-xl">
        <div className="w-[80%]">
          Contact Us Today for Personalized Support and Assistance
        </div>
        <div>
          <div>+14 5464 8272</div>
          <div>sample@domain.com</div>
          <div>Abc 123 , Xyz</div>
        </div>
      </div>
      <div className="w-[full] md:w-[60%] p-4">
        <ContactusForm />
      </div>
    </div>
  );
};

export default Contactus;
