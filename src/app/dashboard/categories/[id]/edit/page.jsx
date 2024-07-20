"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import { useUploadCategoryMutation } from "@/redux/services/categoryAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function EditCategory() {
  const router = useRouter();

  
 
  const [formatData, setFormatData] = useState();
  const [UpdateCategory, { data, isLoading }] = useUploadCategoryMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    console.log("bhai chal");
    try {
      await UpdateCategory(formatData).unwrap();
      router.push("/dashboard/categories");
    } catch (err) {
      console.error("Failed to create category:", err);
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
      <AddCategoryComponents
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
      />
    </>
  );
}

export default EditCategory;
