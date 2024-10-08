import React, { useState } from "react";
import AddUpload from "../../addUploadVideo";
import { useCreateVideoMutation } from "@/redux/services/videoAPI";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useRouter } from "next/navigation";

function AddVideoComponents() {
  const router = useRouter()
  const [formatData, setFormatData] = useState(null);
  const [fileImageLocation, setFileImageLocation] = useState(null);
  const [fileVideoLocation, setFileVideoLocation] = useState(null);

  console.log(fileImageLocation, "fileImageLocation");
  console.log(fileVideoLocation, "fileVideoLocation");

  const [createVideo, { data, isloading }] = useCreateVideoMutation();

  const valueVideoUploadDataHandler = (event) => {
    const { name, value } = event.target;
    setFormatData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const VideoValueHandler = async (e) => {
    e.preventDefault();
    if (fileImageLocation && fileVideoLocation) {
      const updatedData = {
        ...formatData,
        thumbnail: fileImageLocation,
        videoUpload: fileVideoLocation,
      };
      try {
        if (updatedData) {
          await createVideo(updatedData).unwrap();
          router.push("/dashboard/upload-video");
          notifySuccess("create video successfully!");
        }
      } catch (err) {
        console.error("Failed to create video:", err);
        notifyFailure(err.data.message);
      }
    }
  };

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

export default AddVideoComponents;
