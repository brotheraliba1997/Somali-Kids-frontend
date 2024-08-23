"use client";
import React, { useEffect, useState } from "react";
import AddUpload from "../../addUploadVideo";
import {
  useCreateVideoMutation,
  useGetSingleVideoQuery,
  useUpdateVideoMutation,
} from "@/redux/services/videoAPI";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useRouter } from "next/navigation";

function EditVideoComponents({ id }) {
  const { data: singleData } = useGetSingleVideoQuery(id);
  const router = useRouter();
  const [formatData, setFormatData] = useState();
  const [fileImageLocation, setFileImageLocation] = useState(null);
  const [fileVideoLocation, setFileVideoLocation] = useState(null);

  console.log(fileImageLocation, "fileImageLocation");
  console.log(fileVideoLocation, "fileVideoLocation");

  const [updateVideo, { data, isloading }] = useUpdateVideoMutation();

  const valueVideoUploadDataHandler = (event) => {
    const { name, value } = event.target;
    setFormatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
let updatedData
  const VideoValueHandler = async (e) => {
    e.preventDefault();
    updatedData = {
      ...formatData,
      thumbnail: fileImageLocation ? fileImageLocation : singleData?.thumbnail,
      videoUpload: fileVideoLocation
        ? fileVideoLocation
        : singleData?.videoUpload,
    };
    try {
      if (updatedData) {
        // Update the video with the updated data
        await updateVideo({ payload: updatedData, id }).unwrap();

        // Redirect and notify success
        router.push("/dashboard/upload-video");
        notifySuccess("Video created successfully!");
      }
    } catch (err) {
      console.error("Failed to create video:", err);

      // Notify failure with the error message
      notifyFailure(err.data?.message || "Failed to create video.");
    }
  };

  console.log(singleData, "singleData");

  useEffect(() => {
    if (singleData) {
      const { _id, updatedAt, createdAt, ...res } = singleData;

      setFormatData({
        ...res,
        category: res?.category?._id,
        language: res?.language?._id,
        program: res?.program?._id,
      });
    }
  }, [singleData]);
  console.log(formatData, "formatData");

  return (
    <AddUpload
      setFileImageLocation={setFileImageLocation}
      setFileVideoLocation={setFileVideoLocation}
      setFormatData={setFormatData}
      onchange={valueVideoUploadDataHandler}
      onClick={VideoValueHandler}
      fileVideo={fileVideoLocation}
      fileImage={fileImageLocation}
      VideoLoading={isloading}
      formatData={formatData}
    />
  );
}

export default EditVideoComponents;
