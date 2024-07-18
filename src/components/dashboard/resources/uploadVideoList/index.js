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

          {/* <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table table-hover table-striped table-bordered dataTable no-footer"
                          id="DataTables_Table_0"
                          role="grid"
                          aria-describedby="DataTables_Table_0_info"
                        >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-sort="ascending"
                                aria-label="Video name: activate to sort column descending"
                                style={{ width: "188.512px" }}
                              >
                                Video name
                              </th>
                              <th
                                className="sorting py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Language: activate to sort column ascending"
                                style={{ width: "119.075px" }}
                              >
                                Language
                              </th>
                              <th
                                className="sorting py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Categories: activate to sort column ascending"
                                style={{ width: "129.038px" }}
                              >
                                Categories
                              </th>
                              <th
                                className="sorting py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Upload Video: activate to sort column ascending"
                                style={{ width: "162.988px" }}
                              >
                                Upload Video
                              </th>
                              <th
                                className="sorting py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Description: activate to sort column ascending"
                                style={{ width: "303.263px" }}
                              >
                                Description
                              </th>
                              <th
                                className="sorting_disabled py-1 px-2 align-middle"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Status"
                                style={{ width: "116.787px" }}
                              >
                                Status
                              </th>
                              <th
                                className="sorting py-1 px-2 align-middle"
                                tabIndex={0}
                                aria-controls="DataTables_Table_0"
                                rowSpan={1}
                                colSpan={1}
                                aria-label="Action: activate to sort column ascending"
                                style={{ width: "114.137px" }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="odd">
                              <td className="sorting_1 py-1 px-2 align-middle">
                                Somila ABC KIDS
                              </td>
                              <td className="py-1 px-2 align-middle">Somali</td>
                              <td className="py-1 px-2 align-middle">Culture</td>
                              <td className="py-1 px-2 align-middle">N/A</td>
                              <td className="py-1 px-2 align-middle">
                                Lorem ipsum dolor sit amet
                                <br /> consectetur, adipisicing elit.
                              </td>
                              <td className="py-1 px-2 align-middle">
                                <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                                  Active
                                </span>
                              </td>
                              <td className="text-center py-1 px-2 align-middle">
                                <button
                                  type="button"
                                  className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Action
                                  <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item view-data" href="#">
                                    <span className="fa fa-eye text-dark" /> View
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item edit-data" href="#">
                                    <span className="fa fa-edit text-primary" />{" "}
                                    Edit
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item delete_data"
                                    href="javascript:void(0)"
                                    data-id={3}
                                  >
                                    <span className="fa fa-trash text-danger" />
                                    Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1 py-1 px-2 align-middle">
                                Somila ABC KIDS
                              </td>
                              <td className="py-1 px-2 align-middle">Somali</td>
                              <td className="py-1 px-2 align-middle">Culture</td>
                              <td className="py-1 px-2 align-middle">N/A</td>
                              <td className="py-1 px-2 align-middle">
                                Lorem ipsum dolor sit amet
                                <br /> consectetur, adipisicing elit.
                              </td>
                              <td className="py-1 px-2 align-middle">
                                <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                                  Active
                                </span>
                              </td>
                              <td className="text-center py-1 px-2 align-middle">
                                <button
                                  type="button"
                                  className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Action
                                  <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item view-data" href="#">
                                    <span className="fa fa-eye text-dark" /> View
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item edit-data" href="#">
                                    <span className="fa fa-edit text-primary" />{" "}
                                    Edit
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item delete_data"
                                    href="javascript:void(0)"
                                    data-id={3}
                                  >
                                    <span className="fa fa-trash text-danger" />
                                    Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td className="sorting_1 py-1 px-2 align-middle">
                                Somila ABC KIDS
                              </td>
                              <td className="py-1 px-2 align-middle">Somali</td>
                              <td className="py-1 px-2 align-middle">Culture</td>
                              <td className="py-1 px-2 align-middle">N/A</td>
                              <td className="py-1 px-2 align-middle">
                                Lorem ipsum dolor sit amet
                                <br /> consectetur, adipisicing elit.
                              </td>
                              <td className="py-1 px-2 align-middle">
                                <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                                  Active
                                </span>
                              </td>
                              <td className="text-center py-1 px-2 align-middle">
                                <button
                                  type="button"
                                  className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Action
                                  <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item view-data" href="#">
                                    <span className="fa fa-eye text-dark" /> View
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item edit-data" href="#">
                                    <span className="fa fa-edit text-primary" />{" "}
                                    Edit
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item delete_data"
                                    href="javascript:void(0)"
                                    data-id={3}
                                  >
                                    <span className="fa fa-trash text-danger" />
                                    Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr className="even">
                              <td className="sorting_1 py-1 px-2 align-middle">
                                Somila ABC KIDS
                              </td>
                              <td className="py-1 px-2 align-middle">Somali</td>
                              <td className="py-1 px-2 align-middle">Culture</td>
                              <td className="py-1 px-2 align-middle">N/A</td>
                              <td className="py-1 px-2 align-middle">
                                Lorem ipsum dolor sit amet
                                <br /> consectetur, adipisicing elit.
                              </td>
                              <td className="py-1 px-2 align-middle">
                                <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                                  Active
                                </span>
                              </td>
                              <td className="text-center py-1 px-2 align-middle">
                                <button
                                  type="button"
                                  className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                                  data-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  Action
                                  <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu" role="menu">
                                  <a className="dropdown-item view-data" href="#">
                                    <span className="fa fa-eye text-dark" /> View
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a className="dropdown-item edit-data" href="#">
                                    <span className="fa fa-edit text-primary" />{" "}
                                    Edit
                                  </a>
                                  <div className="dropdown-divider" />
                                  <a
                                    className="dropdown-item delete_data"
                                    href="javascript:void(0)"
                                    data-id={3}
                                  >
                                    <span className="fa fa-trash text-danger" />
                                    Delete
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> */}

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
