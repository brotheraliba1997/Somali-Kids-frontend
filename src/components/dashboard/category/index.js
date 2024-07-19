"use client";
import Table from "@/components/table";
import { useGetCategoryQuery } from "@/redux/services/categoryAPI";
import Link from "next/link";
import React, { useState } from "react";

function CategoryList() {
  const interpreters = {
    data: ["hamza"],
  };

  const { data, isLoading } = useGetCategoryQuery();
  console.log(data, "data");

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

export default CategoryList;
