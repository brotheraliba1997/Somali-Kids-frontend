"use client";

import AddLanguageComponents from "@/components/dashboard/language/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";

import {
  useCreateLanguageMutation,
  useGetSingleLanguageQuery,
  useUpdateLanguageMutation,
} from "@/redux/services/languageAPI";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditCategory() {
  const router = useRouter();
  const { id } = useParams();
  const { data: singleData } = useGetSingleLanguageQuery(id);
  const [formatData, setFormatData] = useState();
  const [UpdateLanguage, { data, isLoading }] = useUpdateLanguageMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdateLanguage({ payload: formatData, id }).unwrap();
      router.push("/dashboard/language");
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
    if (singleData) {
      const { id, ...res } = singleData;
      setFormatData(res);
    }
  }, [singleData]);
  console.log(formatData, "formatData");
  return (
    <>
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Update Language</h4>
        </div>
        <AddLanguageComponents
          categoryValueHandler={categoryValueHandler}
          handleChange={handleChange}
          values={formatData}
        />
      </div>
    </>
  );
}

export default EditCategory;
