"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { notifyFailure } from "@/components/toast/toast";
import { useUpdateCategoryMutation } from "@/redux/services/categoryAPI";
import { useGetVideoQuery } from "@/redux/services/videoAPI";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

function UploadVideoList() {
  const { data, isLoading } = useGetVideoQuery();
  const [openActionBtn, setOpenActionBtn] = useState(null);


  const [uploadCategory, { data: dataUpload, isLoading: loading }] =
  useUpdateCategoryMutation();

const deleteHandler = (id) => {
  Swal.fire({
    title: "Are you sure you wan't to delete?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await uploadCategory({
          payload: { softDelete: true },
          id: id,
        }).unwrap();
        Swal.fire({
          title: "Deleted Successfully!",
          icon: "success",
        });
      } catch (err) {
        notifyFailure(err?.data?.message);
      }
    }
  });
};

  const columns = [
    {
      displayName: "Name",
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
          <div
            className="position-relative"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          >
            <Image
              src={`${process?.env?.NEXT_PUBLIC_CDN_URL}${e?.thumbnail}`}
              layout="fill"
              alt="logo"
              objectFit="contain"
              style={{borderRadius: "50%"}}
            />
          </div>
        </>
      ),
    },
    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <>
          <ActionButton
            data={e?._id}
            openActionBtn={openActionBtn}
            setOpenActionBtn={setOpenActionBtn}
            routeChange={`/dashboard/upload-video/${e?._id}/edit`}
            deleteHandler={() => deleteHandler(e?._id)}
            viewRouteChange={`/dashboard/upload-video/${e?._id}/view`}
            showView={false}
          />
        </>
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
