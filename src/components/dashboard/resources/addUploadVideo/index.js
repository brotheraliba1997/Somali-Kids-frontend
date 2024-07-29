"use client"
import UploadVideo from '@/components/videoUpload'
import React, { useEffect, useState } from 'react'

function AddUpload() {
  const [file, setFile] = useState(null);


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
        const response = await axios.post(
          "video-upload/generate-single-presigned-url",
          {
            fileName: file.name,
          }
        );
        const { url } = response.data;
  
        // Use the presigned URL to upload the file
        const uploadResponse = await axios.put(url, file, {
          headers: {
            "Content-Type": file.type,
          },
        });
  
        console.log("Upload response: ", uploadResponse);
  
        if (uploadResponse.status === 200) {
          alert("File uploaded successfully.");
        } else {
          alert("Upload failed.");
        }
      } else {
        alert("File size exceeds 10MB.");
      }
    } catch (err) {
      console.error("Error uploading file: ", err);
      alert("An error occurred while uploading the file.");
    } finally {
      // Set isUploading to false
      setIsUploading(false);
    }
  };


  useEffect(() => {

    if(file)handleUploadThumbnail()
  },[file])

}
  
  
return(
 
    <section className="content  text-dark">
  <div className="container-fluid">
    <div className="content py-4 bg-gradient-navy px-3">
      <h4 className="mb-0"> Upload Video</h4>
    </div>
    <div className="row mt-n3 justify-content-center align-items-center flex-column">
      <div className="col-md-8">
        <div className="card rounded-0 shadow">
          <div className="card-body">
            <div className="container-fluid">
              <form action="" id="inmate-form">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Video name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="firstname"
                        id="firstname"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label
                        htmlFor="select-Language"
                        className="control-label"
                      >
                        Language
                      </label>
                      <select
                        className="form-control form-control-sm rounded-0"
                        name="select-Language"
                        id="select-Language"
                        required="required"
                      >
                        <option value="Somali">Somali</option>
                        <option value="English">English</option>
                        <option value="Oromo">Oromo</option>
                        <option value="Swahili">Swahili</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label
                        htmlFor="select-Categories"
                        className="control-label"
                      >
                        Categories
                      </label>
                      <select
                        className="form-control form-control-sm rounded-0"
                        name="select-Categories"
                        id="select-Categories"
                        required="required"
                      >
                        <option value="Culture">Culture</option>
                        <option value="Language">Language</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="thumbnail" className="control-label">
                         Thumbnail
                      </label>
                      <input
                        type="file"
                        className="form-control form-control-sm rounded-0"
                        name="thumbnail"
                        id="firstname"
                        required="required"
                        defaultValue=""
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                 <UploadVideo/>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label
                        htmlFor="description-video"
                        className="control-label"
                      >
                        Description of the Video
                      </label>
                      <textarea
                        className="form-control form-control-sm rounded-0"
                        name="description-video"
                        id="description-video"
                        required="required"
                        value=""
                        defaultValue={""}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="card-footer py-1 text-center">
                <button
                  className="btn btn-flat btn-sm btn-navy bg-gradient-navy"
                  form="inmate-form"
                >
                  <i className="fa fa-save" /> Save
                </button>
                <a
                  className="btn btn-flat btn-sm btn-light bg-gradient-light border"
                  href=""
                >
                  <i className="fa fa-close" /> Cancel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
)



export default AddUpload
