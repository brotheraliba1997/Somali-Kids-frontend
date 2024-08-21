"use client";

import AddLanguageComponents from "@/components/dashboard/language/add";
import AddProgramComponents from "@/components/dashboard/program/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";

import {
  useCreateLanguageMutation,
  useGetSingleLanguageQuery,
  useUpdateLanguageMutation,
} from "@/redux/services/languageAPI";
import { useGetSingleProgramQuery, useUpdateProgramMutation } from "@/redux/services/programAPI";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditCategory() {
  const router = useRouter();
  const { id } = useParams();
  const { data: singleData } = useGetSingleProgramQuery(id);
  const [formatData, setFormatData] = useState();
  const [UpdateProgram, { data, isLoading }] = useUpdateProgramMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdateProgram({ payload: formatData, id }).unwrap();
      router.push("/dashboard/program");
      notifySuccess("update program successfully!");
    } catch (err) {
      console.error("Failed to create program:", err);
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
  console.log(formatData, "formatData");
  return (
    <>
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Update Program</h4>
        </div>
        <AddProgramComponents
          categoryValueHandler={categoryValueHandler}
          handleChange={handleChange}
          values={formatData}
        />
      </div>
    </>
  );
}

export default EditCategory;
