"use client";
import AddUserDashboard from "@/components/dashboard/addUser";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useCreateUserMutation } from "@/redux/services/userApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddUser() {
  const router = useRouter();
  const [formatData, setFormatData] = useState();
  const [createUser, { data, isLoading }] = useCreateUserMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();

    try {
      await createUser(formatData).unwrap();
      notifySuccess("create user successfully!");
      router.push("/dashboard/users");
    } catch (err) {
      console.error("Failed to create category:", err);
      notifyFailure(err.data.message);
    }
  };

  const handleChange = (e) => {
    setFormatData({
      ...formatData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Add User</h4>
        </div>
        <AddUserDashboard
          categoryValueHandler={categoryValueHandler}
          handleChange={handleChange}
          values={formatData}
        />
      </div>
    </>
  );
}

export default AddUser;
