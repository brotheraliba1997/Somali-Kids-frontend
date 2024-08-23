"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { useGetlanguageQuery, useUpdateLanguageMutation } from "@/redux/services/languageAPI";
import { useGetProgramQuery, useUpdateProgramMutation } from "@/redux/services/programAPI";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

function ProgramList({PermissionFinalValue}) {
  const { data, isLoading } = useGetProgramQuery();
  const [openActionBtn, setOpenActionBtn] = useState(null);

  console.log(data, "data");

  
  const [uploadProgram, { data: dataUpload, isLoading: loading }] =
  useUpdateProgramMutation();


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
          await uploadProgram({
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
            <p className="text-secondary tablePara"> {e.name} </p>
          </div>
        </>
      ),
      searchable: true,
    },
    {
      key: "status",
      displayName: "Status",
      displayField: (e) => (
        <>
            <span className="text-capitalize badge bg-danger "> Active</span>
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
            routeChange={`/dashboard/program/${e?._id}/edit`}
            deleteHandler={()=> deleteHandler(e?._id)}
            showView={true}
            PermissionFinalValue={PermissionFinalValue}
          />
        </>
      ),
      searchAble: true,
    },
  ];
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  
  return (
    <>
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
    </>
  );
}

export default ProgramList;
