"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import {
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
 
} from "@/redux/services/categoryAPI";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EditCategory() {
  const router = useRouter();
  const { id } = useParams();
  const { data: singleData } = useGetSingleCategoryQuery(id);
  const [formatData, setFormatData] = useState();
  const [UpdateCategory, { data, isLoading }] = useUpdateCategoryMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdateCategory({ payload: formatData, id }).unwrap();
      router.push("/dashboard/categories");
      notifySuccess("update category successfully!");
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
      const { _id,createdAt, updatedAt, ...res } = singleData; 
      setFormatData(res);
    }
   
  }, [singleData]);
  console.log(formatData, "formatData");
  return (
    <>
<div className="container-fluid">
      <div className="content py-4 bg-gradient-navy px-3">
        <h4 className="mb-0"> Edit Category</h4>
      </div>
    
      <AddCategoryComponents
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
        values={formatData}
      />
      </div>
    </>
  );
}

export default EditCategory;
