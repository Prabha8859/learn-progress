import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "./authSlice";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();

  const submit = () => {
    dispatch(registerUser(form));
  };

  return (
    <div>
      <h1>Register</h1>
      <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={(e)=>setForm({...form, email:e.target.value})}/>
      <input placeholder="Password" onChange={(e)=>setForm({...form, password:e.target.value})}/>
      <button onClick={submit}>Register</button>
    </div>
  );
}
