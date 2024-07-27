"use client"
import React, { useState } from "react";
import axios from "axios";

function UploadVideo() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files[0]) {
      setFile(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      setIsUploading(true);
      setProgress(0);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/start-multipart-upload`,
        {
          fileName: file.name,
          contentType: file.type,
        }
      );

      const { uploadId } = response.data;
      const totalSize = file.size;
      const chunkSize = 5 * 1024 * 1024; // 5MB
      const numChunks = Math.ceil(totalSize / chunkSize);

      const presignedUrlsResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/generate-presigned-url`,
        {
          fileName: file.name,
          uploadId: uploadId,
          partNumbers: numChunks,
        }
      );

      const presignedUrls = presignedUrlsResponse?.data?.presignedUrls;
      const parts = [];
      let uploadedBytes = 0;
      let totalBytes = 0;


      for (let i = 0; i < numChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, totalSize);
        const chunk = file.slice(start, end);
        const presignedUrl = presignedUrls[i];

        const uploadPromise = axios.put(presignedUrl, chunk, {
          headers: {
            "Content-Type": file.type,
          },
          onUploadProgress: (event) => {
            uploadedBytes += event.loaded;
            totalBytes += event.total;

            setProgress(Math.round(((uploadedBytes * 100) / totalSize) / numChunks));
          console.log(uploadedBytes ,totalSize,event,totalBytes,i, "progress")

          },
        });

  
        // console.log(progress, "progress" )

        const response = await uploadPromise;
        parts.push({
          etag: response.headers.etag,
          PartNumber: i + 1,
        });
      }

      const completeUpload = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/complete-multipart-upload`,
        {
          fileName: file.name,
          uploadId: uploadId,
          parts: parts,
        }
      );

      if (completeUpload) {
        alert("File uploaded successfully.");
        setIsUploading(false);
        // setProgress(0);
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      alert("Upload failed.");
    }
  };

  console.log(progress, "setProgress")

  return (
    <div>
      <h1>Multipart Upload</h1>
      <br />
      <input type="file" onChange={handleFileChange} name="file" id="myFile" />
      <button
        onClick={handleUpload}
        disabled={isUploading}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        {isUploading ? "Uploading..." : "Upload"}
      </button>
      {isUploading && (
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadVideo;
