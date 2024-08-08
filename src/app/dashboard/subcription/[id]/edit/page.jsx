"use client";

import AddPackageComponents from "@/components/dashboard/package/add";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import {
  useGetSinglePackagesQuery,
  useUpdatePackagesMutation,
} from "@/redux/services/packageAPI";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditPackage() {
  const router = useRouter();
  const { id } = useParams();
  const { data: singleData } = useGetSinglePackagesQuery(id);
  const [formatData, setFormatData] = useState();
  const [UpdatePackage, { data, isLoading }] = useUpdatePackagesMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdatePackage({ payload: formatData, id }).unwrap();
      router.push("/dashboard/package");
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
      const { _id, createdAt, updatedAt, ...res } = singleData;
      setFormatData(res);
    }
  }, [singleData]);
  console.log(formatData, "formatData");
  return (
    <>
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Update Package</h4>
        </div>
        <AddPackageComponents
          categoryValueHandler={categoryValueHandler}
          handleChange={handleChange}
          values={formatData}
        />
      </div>
    </>
  );
}

export default EditPackage;
