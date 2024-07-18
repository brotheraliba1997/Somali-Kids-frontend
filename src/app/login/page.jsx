"use client";
import { useLoginUserMutation } from "@/redux/services/authApi";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import CustomButton from "@/components/customButton";

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
      //   notifySuccess("Logged in successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.log("err", error.data.message);
      //   notifyFailure(error.data.message);
    }
  };

  return (
    <>
      <div className="login-page" style={{ minHeight: "246px" }}>
        <h1 className="text-center text-white px-4 py-5" id="page-title">
          <b>Somali ABC Kids</b>
        </h1>
        <div className="login-box">
          {/* /.login-logo */}
          <div className="card card-navy my-2">
            <div className="card-body">
              <p className="login-box-msg">Please enter your credentials</p>
              <form
                id="login-frm"
                action=""
                method="post"
                onSubmit={submitHandler}
              >
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                    <CustomButton
                      title=" Sign In"
                      type="submit"
                      className="w-100"
                      isLoading={isLoading}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
