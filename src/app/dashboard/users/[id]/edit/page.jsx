"use client";
import AddUserDashboard from "@/components/dashboard/addUser";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";

import { useGetUserByIdQuery, useUpdateUsersMutation } from "@/redux/services/userApi";
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
    if(singleData){
      const {id, ...res} = singleData 
      setFormatData(res);
    }
   
  }, [singleData]);

  console.log(singleData, "singa")
 
  return (
    <>
      <AddUserDashboard
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
        values={formatData}
      />
    </>
  );
}

export default EditCategory;
