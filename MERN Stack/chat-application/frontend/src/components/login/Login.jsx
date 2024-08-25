import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
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

    let response = await fetch("http://localhost:5000/api/vi/user/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      response = await response.json();
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.user));
      navigate("/");
    } else {
      console.log("error while login user");
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
          name="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="enter your email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
