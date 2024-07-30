"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { notifyFailure, notifySuccess } from "../../../toast/toast";

function UploadVideo({setVideo}) {
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
      const fileLocation = `video-Uploads/${file?.name}`;

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/start-multipart-upload`,
        {
          fileName: fileLocation,
          contentType: file.type,
        }
      );
      console.log(fileLocation, "start-multipart-upload")

      const { uploadId } = response.data;
      const totalSize = file.size;
      const chunkSize = 5 * 1024 * 1024; // 5MB
      const numChunks = Math.ceil(totalSize / chunkSize);

      const presignedUrlsResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}video-upload/generate-presigned-url`,
        {
          fileName: fileLocation,
          uploadId: uploadId,
          partNumbers: numChunks,
        }
      );

      console.log(fileLocation, "generate-presigned-url")

      const presignedUrls = presignedUrlsResponse?.data?.presignedUrls;
      const parts = [];
      let uploadedBytes = 0;
      let totalBytes = 0;
      let currentIndex = 0;
      let uploadProgress = 0;
      for (let i = 0; i < numChunks; i++) {
        currentIndex = i;
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

            uploadProgress += event.progress;
            const uploadPercante = uploadProgress * 100;
            // setProgress(Math.round(uploadPercante));
            // setProgress(Math.round((start * 100) / totalSize));
            setProgress(Math.round(((i + 1) / numChunks) * 100));
            console.log(i, numChunks, "numChunks");
            console.log(
              uploadedBytes,
              totalSize,
              event,
              totalBytes,
              i,
              "progress"
            );
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
          fileName: fileLocation,
          uploadId: uploadId,
          parts: parts,
        }
      );
      
      console.log(fileLocation, "complete-multipart-upload")

      if (completeUpload) {
        setIsUploading(false);
        notifySuccess("Upload Successfully");
        setVideo(fileLocation)
        // setProgress(0);
      } else {
        setIsUploading(true);
      }
    } catch (error) {
      // alert("Upload failed.");
      notifyFailure("Upload failed.");
    }
  };

  useEffect(() => {
    if (file) handleUpload();
  }, [file]);

  console.log(progress, "setProgress");

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="form-group">
        <label htmlFor="" className="control-label">
          Upload Video
        </label>
        <div className="custom-file custom-file-sm rounded-0">
          <input
            type="file"
            className="custom-file-input rounded-0"
            id="customFile1"
            name="img"
            onChange={handleFileChange}
          />
          <label className="custom-file-label rounded-0" htmlFor="customFile1">
            Choose file
          </label>
        </div>

        {isUploading && (
          <div className="mt-4">
            <ProgressBar now={progress} label={`${progress}%`} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadVideo;
