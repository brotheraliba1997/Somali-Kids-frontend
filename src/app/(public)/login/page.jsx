"use client"
import LoginComponents from '@/components/public/login'
import { notifyFailure, notifySuccess } from '@/components/toast/toast';
import { useLoginUserMutation } from '@/redux/services/authApi';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Login() {

  const router = useRouter();
  const [showPassword, SetShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const auth = useSelector((state) => state.auth);

  const { user } = auth;

  if (user) {
    router.push("/dashboard");
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData).unwrap();
      console.log(data, "respones");
        notifySuccess("Logged in successfully!");
        router.push("/dashboard");
        
       
    } catch (error) {
      console.log("err", error.data.message);
        notifyFailure(error.data.message);
        console.log(error)
    }
  };


  return (
    <LoginComponents submitHandler={submitHandler} Loading={isLoading} handleChange={handleChange} />
  )
}

export default Login
