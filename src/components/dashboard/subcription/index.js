"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { notifyFailure } from "@/components/toast/toast";
import { useGetPackagesQuery, useUpdatePackagesMutation } from "@/redux/services/packageAPI";
import { useGetSubcriptionQuery } from "@/redux/services/subcriptionAPI";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

function SubcriptionList() {
  const { data, isLoading } = useGetSubcriptionQuery();

  console.log(data, "data")
  const [openActionBtn, setOpenActionBtn] = useState(null);
 
  const [uploadPackage, { data: dataUpload, isLoading: loading }] =
  useUpdatePackagesMutation();


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
          await uploadPackage({
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
            <p className="text-secondary"> {e?.user?.firstName} </p>
            <p className="text-secondary"> {e?.user?.lastName} </p>
          </div>
        </>
      ),
      searchable: true,
    },


    {
      displayName: "Package",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.package?.name} </p>
          </div>
        </>
      ),
      searchable: true,
    },
    {
      displayName: "validity",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.package?.validity} </p>
          </div>
        </>
      ),
      searchable: true,
    },
    {
      displayName: "Start Date",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary">  {moment(e?.startDate).format("YYYY-MM-DD")} </p>
          </div>
        </>
      ),
      searchable: true,
    },
    {
      displayName: "End Date",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary">  {moment(e?.endDate).format("YYYY-MM-DD")}  </p>
          </div>
        </>
      ),
      searchable: true,
    },
    {
      displayName: "Amount",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.amount}</p>
          </div>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Status",
      displayField: (e) => (
        <>
          <div>
            <p className="text-capitalize badge bg-danger">{e?.status}</p>
          </div>
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
            routeChange={`/dashboard/subcription/${e?._id}/edit`}
            deleteHandler={()=> deleteHandler(e?._id)}
            showView={true}
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

export default SubcriptionList;
