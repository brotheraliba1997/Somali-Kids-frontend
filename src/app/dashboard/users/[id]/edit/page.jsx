"use client";
import AddUserDashboard from "@/components/dashboard/addUser";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";

import {
  useGetUserByIdQuery,
  useUpdateUsersMutation,
} from "@/redux/services/userApi";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EditCategory() {
  const router = useRouter();
  const { id } = useParams();
  const { data: singleData } = useGetUserByIdQuery(id);
  const [formatData, setFormatData] = useState();
  const [UpdateUser, { data, isLoading }] = useUpdateUsersMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdateUser({ payload: formatData, id }).unwrap();
      router.push("/dashboard/users");
      notifySuccess("update user successfully!");
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
  useEffect(() => {
    if (singleData) {
      const { _id,createdAt, updatedAt, ...res } = singleData;
      setFormatData(res);
    }
  }, [singleData]);

  console.log(singleData, "singa");

  return (
    <>
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Edit User</h4>
        </div>
        <AddUserDashboard
          categoryValueHandler={categoryValueHandler}
          handleChange={handleChange}
          values={formatData}
          hidePassword={true}
          routeBack={"/dashboard/users"}
        />
      </div>
    </>
  );
}

export default EditCategory;
