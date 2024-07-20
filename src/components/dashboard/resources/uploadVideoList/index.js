"use client";
import Table from "@/components/table";
import Link from "next/link";
import React, { useState } from "react";

function UploadVideoList() {
  const interpreters = {
    data: ["hamza"],
  };

  const isLoading = false;
  const columns = [
    {
      displayName: "Name/Email",
      displayField: (e) => (
        <>
          <div className="d-flex gap-2">
            <div>ssss</div>
            <div>
              <p className="text-secondary"> sssss </p>
            </div>
          </div>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Phone",
      displayField: (e) => <>{"sssss"}</>,
      searchable: true,
    },

    {
      displayName: "Join Date",
      displayField: (e) => (
        <>
          <p className="text-secondary"> ssss</p>
        </>
      ),
      searchable: true,
    },

    // {
    //   displayName: "State/Country",
    //   displayField: (e) => (
    //     <>
    //       <p className="text-secondary">
    //         {" "}
    //         {e.state}, {e.country}{" "}
    //       </p>
    //     </>
    //   ),
    //   searchable: true,
    // },

    {
      key: "status",
      displayName: "Status",
      displayField: (e) => (
        <>
          {e.status === "active" ? (
            <span className="text-capitalize badge bg-success"> ssss</span>
          ) : (
            <span className="text-capitalize badge bg-danger"> sss</span>
          )}
        </>
      ),
    },
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <div className="d-flex justify-content-start align-items-center gap-4 position-relative">
          {/* <Link href="" className="mr-2" to="" title="Update Rider">
                  <i className="fas fa-edit text-primary" />
                </Link> */}
          <Link className="mr-2" href="">
            <i className="fas fa-ellipsis-v text-secondary" sss />
          </Link>
        </div>
      ),
      searchAble: true,
    },
  ];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  return (
   
      <div className="container-fluid">
        <div className="card card-outline rounded-0 card-navy">
          <div className="card-header">
            <h3 className="card-title">List of Uploaded Videos</h3>
            <div className="card-tools">
              <a
                href="video-upload.html"
                id="create_new"
                className="btn btn-flat btn-primary"
              >
                <span className="fas fa-plus" /> Upload Video
              </a>
            </div>
          </div>

          

          <Table
            dataSource={interpreters?.data || []}
            isLoading={isLoading}
            columns={columns}
            totalPages={interpreters?.totalPages}
            totalEntries={interpreters?.totalEntries}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
       
        </div>
      </div>
 
  );
}

export default UploadVideoList;
