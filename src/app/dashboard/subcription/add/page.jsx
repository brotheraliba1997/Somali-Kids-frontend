"use client";
import AddCategoryComponents from "@/components/dashboard/category/add";
import AddLanguageComponents from "@/components/dashboard/language/add";
import AddPackageComponents from "@/components/dashboard/package/add";
import AddProgramComponents from "@/components/dashboard/program/add";
import AddSubcriptionComponents from "@/components/dashboard/subcription/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useCreateCategoryMutation } from "@/redux/services/categoryAPI";
import { useCreateLanguageMutation } from "@/redux/services/languageAPI";
import { useCreatePackagesMutation } from "@/redux/services/packageAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function AddSubcription() {
  const router = useRouter();
  const [formatData, setFormatData] = useState();
  const [createPackage, { data, isLoading }] = useCreatePackagesMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();

    try {
      await createPackage(formatData).unwrap();
      notifySuccess("create category successfully!");
      router.push("/dashboard/subcription");
    } catch (err) {
      console.error("Failed to create package:", err);
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
        <h4 className="mb-0"> Add Subcription</h4>
      </div>


    
      <AddSubcriptionComponents
        categoryValueHandler={categoryValueHandler}
        handleChange={handleChange}
       

      />
       </div>
    </>
  );
}

export default AddSubcription;
