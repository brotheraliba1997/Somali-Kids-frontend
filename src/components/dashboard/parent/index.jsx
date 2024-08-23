"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { notifyFailure } from "@/components/toast/toast";
import { useUpdateCategoryMutation } from "@/redux/services/categoryAPI";
import { useGetUsersQuery } from "@/redux/services/userApi";
import {
  useGetVideoQuery,
  useUpdateVideoMutation,
} from "@/redux/services/videoAPI";
import React, { useState } from "react";
import Swal from "sweetalert2";

function ParentDashboard({ PermissionFinalValue }) {
  console.log(PermissionFinalValue, "PermissionFinalValuessss");
  const { data, isLoading } = useGetVideoQuery();
  const [openActionBtn, setOpenActionBtn] = useState(null);
  const [uploadVideo, { data: dataUpload, isLoading: loading }] =
    useUpdateVideoMutation();

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
          await uploadVideo({
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
      key: "Description",
      displayName: "Description",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.Description}</p>
        </>
      ),
    },

    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <>
          <div className="d-flex justify-content-center">
            <ActionButton
              data={e?._id}
              openActionBtn={openActionBtn}
              setOpenActionBtn={setOpenActionBtn}
              routeChange={`/dashboard/upload-video/${e?._id}/edit`}
              deleteHandler={() => deleteHandler(e?._id)}
              viewRouteChange={`/dashboard/upload-video/${e?._id}/view`}
              showView={false}
              PermissionFinalValue={PermissionFinalValue}
            />
          </div>
        </>
      ),
      searchAble: true,
    },
  ];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Table
      dataSource={data?.results || []}
      isLoading={isLoading}
      columns={columns}
      totalPages={data?.totalPages}
      totalEntries={data?.totalResults}
      page={page}
      setPage={setPage}
      pageSize={pageSize}
      setPageSize={setPageSize}
    />
  );
}

export default ParentDashboard;
