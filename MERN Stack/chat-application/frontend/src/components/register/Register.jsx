import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let response = await fetch("http://localhost:5000/api/vi/user/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      navigate("/login");
    } else {
      console.log("error while registering user");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="email"
          placeholder="enter your email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="password"
          placeholder="enter your password"
          onChange={handleChange}
          name="password"
        />
        <button type="submit">register</button>
      </form>
    </div>
  );
};

export default Register;
