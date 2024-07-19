"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import { useCreateCategoryMutation } from "@/redux/services/categoryAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddCategory() {
  const router = useRouter();
  const [formatData, setFormatData] = useState();
  const [createCategory, { data, isLoading }] = useCreateCategoryMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    console.log("bhai chal");
    try {
      await createCategory(formatData).unwrap();
      router.push("/dashboard/category");
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

export default AddCategory;
