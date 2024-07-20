"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import {
  useGetSingleCategoryQuery,
  useUploadCategoryMutation,
} from "@/redux/services/categoryAPI";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EditCategory() {
  const router = useRouter();
  const { id } = useParams();

  const { data: singleData } = useGetSingleCategoryQuery(id);

  console.log(singleData, "singleData");

  const [formatData, setFormatData] = useState();
  const [UpdateCategory, { data, isLoading }] = useUploadCategoryMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    console.log("bhai chal");
    try {
      await UpdateCategory({ payload: formatData, id }).unwrap();
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

  useEffect(() => {
    if(singleData){
      const {id, ...res} = singleData 
      setFormatData(res);
    }
   
  }, [singleData]);
  console.log(formatData, "formatData");
  return (
    <>
      <AddCategoryComponents
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
        values={formatData}
      />
    </>
  );
}

export default EditCategory;
