"use client";
import UploadVideo from "@/components/dashboard/resources/videoUpload";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ImageUpload from "../imageUpload";
import { useGetCategoryQuery } from "@/redux/services/categoryAPI";
import { useGetlanguageQuery } from "@/redux/services/languageAPI";

function AddUpload({
  onchange,
  onClick,
  setFileVideoLocation,
  setFileImageLocation,
}) {
  const { data: category, isLoading } = useGetCategoryQuery();
  const { data: language, isLoading: loading } = useGetlanguageQuery();

  console.log(category?.results, "category");

  return (
    <>
      <section className="content text-dark">
        <div className="container-fluid">
          <div className="content py-4 bg-gradient-navy px-3">
            <h4 className="mb-0">Upload Video</h4>
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
                            <label
                              htmlFor="video-name"
                              className="control-label"
                            >
                              Video name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-sm rounded-0"
                              name="name"
                              id="video-name"
                              required
                              onChange={onchange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              htmlFor="select-language"
                              className="control-label"
                            >
                              Language
                            </label>
                            <select
                              className="form-control form-control-sm rounded-0"
                              name="language"
                              id="select-language"
                              required
                              onChange={onchange}
                            >
                           {language &&
                                language.results &&
                                language.results.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="form-group">
                            <label
                              htmlFor="select-categories"
                              className="control-label"
                            >
                              Categories
                            </label>
                            <select
                              className="form-control form-control-sm rounded-0"
                              name="category"
                              id="select-categories"
                              required
                              onChange={onchange}
                            >
                              {category &&
                                category.results &&
                                category.results.map((item) => (
                                  <option key={item.id} value={item.id}>
                                    {item.name}
                                  </option>
                                ))}
                              {/* <option value="Culture">Culture</option>
                              <option value="Language">Language</option>
                              <option value="Other">Other</option> */}
                            </select>
                          </div>
                        </div>
                        <ImageUpload setImage={setFileImageLocation} />
                        <UploadVideo setVideo={setFileVideoLocation} />
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
                              name="Description"
                              id="description-video"
                              required
                              defaultValue=""
                              onChange={onchange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className=" py-1 text-center">
                        <button
                          className="btn btn-flat btn-sm btn-navy bg-gradient-navy text-white"
                          form="inmate-form"
                          onClick={onClick}
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AddUpload;
