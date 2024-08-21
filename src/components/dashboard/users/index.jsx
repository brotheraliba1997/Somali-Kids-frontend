"use client"
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { notifyFailure } from "@/components/toast/toast";
import { useUpdateCategoryMutation } from "@/redux/services/categoryAPI";
import { useGetUsersQuery } from "@/redux/services/userApi";
import React, { useState } from "react";
import Swal from "sweetalert2";

function UsersDashboard({PermissionFinalValue}) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useGetUsersQuery();

  console.log(data, "datais");
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
          <div className="d-flex gap-2">
            <p className="text-secondary"> {e?.firstName} </p>
            <p className="text-secondary"> {e?.lastName} </p>
          </div>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Email",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.email} </p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Phone",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.phone}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Role",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.role}</p>
        </>
      ),
      searchable: true,
    },

 

    {
      displayName: "City",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.city}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "State",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.state}</p>
        </>
      ),
      searchable: true,
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
            routeChange={`/dashboard/users/${e?._id}/edit`}
            deleteHandler={() => deleteHandler(e?._id)}
            viewRouteChange={`/dashboard/users/${e?._id}/edit`}
            PermissionFinalValue={PermissionFinalValue}
            showView={true}
          

          />
        </>
      ),
      searchAble: true,
    },
  ];

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

export default UsersDashboard;
