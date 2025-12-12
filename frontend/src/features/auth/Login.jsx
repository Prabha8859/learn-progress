import { useDispatch } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = async () => {
    const res = await dispatch(loginUser(form));
    if (res.meta.requestStatus === "fulfilled") {
      navigate("/welcome");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}
