"use client";
import Table from "@/components/table";
import { useGetVideoQuery } from "@/redux/services/videoAPI";
import Link from "next/link";
import React, { useState } from "react";

function UploadVideoList() {
 

  const { data, isLoading } = useGetVideoQuery();

  
  const columns = [
    {
      displayName: "Name/Email",
      displayField: (e) => (
        <>
        
       
            <div>
              <p className="text-secondary"> {e?.name} </p>
            </div>
          
        </>
      ),
      searchable: true,
    },

    

    {
      displayName: "Language",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.language?.name}</p>
        </>
      ),
      searchable: true,
    },

   

    {
      key: "Category",
      displayName: "Category",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.category?.name}</p>
        </>
      ),
    },


    {
      key: "Thumbnail",
      displayName: "Thumbnail",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.thumbnail}</p>
        </>
      ),
    },

    {
      key: "Video ",
      displayName: "Video",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.videoUpload}</p>
        </>
      ),
    },


    {
      key: "Description ",
      displayName: "Description",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.Description}</p>
        </>
      ),
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
              <Link
                href="/dashboard/upload-video/add"
                id="create_new"
                className="btn btn-flat btn-primary"
              >
                <span className="fas fa-plus" /> Upload Video
              </Link>
            </div>
          </div>

          

          <Table
           dataSource={data?.results || []}
            isLoading={isLoading}
            columns={columns}
            totalPages={data?.totalPages}
            totalEntries={data?.totalEntries}
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
