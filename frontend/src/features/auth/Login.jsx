import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(form));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/welcome");
    }
    // Error message will be automatically displayed from the selector
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
          <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
          <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
        {message && <p className={`auth-message ${message.includes("successful") ? "success" : "error"}`}>{message}</p>}
        <p className="auth-switch">
          Don't have an account? <Link to="/">Register here</Link>
        </p>
      </div>
    </div>
  );
}
