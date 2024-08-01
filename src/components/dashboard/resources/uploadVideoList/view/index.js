import DotsLoader from "@/components/loaders/dotsLoader";
import { useGetSingleVideoQuery } from "@/redux/services/videoAPI";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function ViewUploadComponents({ id }) {
  const { data, isLoading } = useGetSingleVideoQuery(id);

  if (isLoading) {
    return (
      <>
        <DotsLoader dark size={60} center={false} />
      </>
    );
  }

  console.log(data, "data");
  return (
    <>
      <div className="row mt-n3 justify-content-center align-items-center flex-column">
        <div className="col-md-8">
          <div className="card rounded-0 shadow">
            <div className="card-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <Link
                        href={"/dashboard/upload-video/"}
                        className="control-label"
                      >
                        <FaArrowLeftLong />
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Name
                      </label>

                      <p className="text-secondary fs-4">{data?.name} </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Language
                      </label>

                      <p className="text-secondary fs-4">
                        {data?.language?.name}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Category
                      </label>

                      <p className="text-secondary fs-4">
                        {data?.category?.name}{" "}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Discribtion
                      </label>

                      <p className="text-secondary">{data?.Description} </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Thumbnail
                      </label>

                      <div
                        className="position-relative"
                        style={{ width: "150px", height: "150px" }}
                      >
                        <Image
                          src={`${process?.env?.NEXT_PUBLIC_CDN_URL}${data?.thumbnail}`}
                          layout="fill"
                          alt="logo"
                          objectFit="contain"
                          // className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        Video
                      </label>

                      <video
                        src={`${process?.env?.NEXT_PUBLIC_CDN_URL}${data?.videoUpload}`}
                        controls
                        className="w-100 h-100 rounded shadow-lg"
                      ></video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUploadComponents;
