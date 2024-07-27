"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { useGetlanguageQuery, useUpdateLanguageMutation } from "@/redux/services/languageAPI";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

function LanguageList() {
  const { data, isLoading } = useGetlanguageQuery();
  const [openActionBtn, setOpenActionBtn] = useState(null);

  console.log(data, "data");

  
  const [uploadLanguage, { data: dataUpload, isLoading: loading }] =
  useUpdateLanguageMutation();


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
          await uploadLanguage({
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
      displayName: "Name/Email",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e.name} </p>
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
        <>
          <ActionButton
            data={e?.id}
            openActionBtn={openActionBtn}
            setOpenActionBtn={setOpenActionBtn}
            routeChange={`/dashboard/language/${e?.id}/edit`}
            deleteHandler={()=> deleteHandler(e?.id)}
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

export default LanguageList;
