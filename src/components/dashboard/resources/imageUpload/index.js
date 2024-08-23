"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

function ImageUpload({setImage}) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleUploadThumbnail = async () => {
    if (!file) return;
    try {
      // Set isUploading to true
      setIsUploading(true);

      // Check file size, it should be less than 10MB
      if (file.size < 10000000) {
        // Call your API to get the presigned URL

        const fileLocation = `video-image/${file?.name}`;
        const response = await axios.post(
          // `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/generate-single-presigned-url`,
          `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/generate-single-presigned`,
          {
            fileName: fileLocation,
          }
        );
        const { url } = response?.data;
        console.log(response?.data, "url");
        console.log(fileLocation, "fileLocation");

        // Use the presigned URL to upload the file
        const uploadResponse = await axios.put(url, file, {
          headers: {
            "Content-Type": file.type,
          },
        });

        console.log("Upload response: ", uploadResponse);

        if (uploadResponse.status === 200) {
          setFile(null);
          setImage(fileLocation)

          // alert("File uploaded successfully.");
        } else {
          // alert("Upload failed.");
        }
      } else {
        // alert("File size exceeds 10MB.");
      }
    } catch (err) {
      console.error("Error uploading file: ", err);
      // alert("An error occurred while uploading the file.");
    } finally {
      // Set isUploading to false
      setIsUploading(false);
    }
  };

  useEffect(() => {
    if (file) handleUploadThumbnail();
  }, [file]);
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="form-group">
        <label htmlFor="thumbnail" className="control-label">
          Thumbnail
        </label>
        <input
          type="file"
          className="form-control form-control-sm rounded-0"
          name="thumbnail"
          id="thumbnail"
        
          onChange={handleFileChange}
         
        />
      </div>
    </div>
  );
}

export default ImageUpload;
