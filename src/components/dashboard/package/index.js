"use client";
import ActionButton from "@/components/actionButton";
import Table from "@/components/table";
import { notifyFailure } from "@/components/toast/toast";
import { useGetPackagesQuery, useUpdatePackagesMutation } from "@/redux/services/packageAPI";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import Swal from "sweetalert2";

function PackageList() {
  const { data, isLoading } = useGetPackagesQuery();
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
          <div>
            <p className="text-secondary"> {e?.name} </p>
          </div>
        </>
      ),
      searchable: true,
    },


    {
      displayName: "Package Type",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.type} </p>
          </div>
        </>
      ),
      searchable: true,
    },


    {
      displayName: "Validity",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.validity}  </p>
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
            <p className="text-secondary"> {e?.amount} </p>
          </div>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Content",
      displayField: (e) => (
        <>
          <div>
            <p className="text-secondary"> {e?.content} </p>
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
            <span className="text-capitalize badge bg-danger"> Active</span>
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
            routeChange={`/dashboard/package/${e?._id}/edit`}
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

export default PackageList;
