import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(resultAction)) {
      // On success, maybe navigate to login after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Register</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" type="text" onChange={handleChange} required />
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        {message && <p className={`auth-message ${message.includes("successful") ? "success" : "error"}`}>{message}</p>}
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
