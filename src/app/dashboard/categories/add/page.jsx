"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useCreateCategoryMutation } from "@/redux/services/categoryAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddCategory() {
  const router = useRouter();
  const [formatData, setFormatData] = useState();
  const [createCategory, { data, isLoading }] = useCreateCategoryMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();

    try {
      await createCategory(formatData).unwrap();
      notifySuccess("create category successfully!");
      router.push("/dashboard/categories");
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

  console.log(formatData, "formatData");
  return (
    <>

<div className="container-fluid">
      <div className="content py-4 bg-gradient-navy px-3">
        <h4 className="mb-0"> Add Category</h4>
      </div>
      <AddCategoryComponents
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
       
      />
       </div>
    </>
  );
}

export default AddCategory;
