"use client";
import { useGetPermissionQuery } from "@/redux/services/permissionAPI";
import { useRouter } from "next/navigation";
import React from "react";

function PermissionCompoments() {
  const router = useRouter()
  const { data, isLoading } = useGetPermissionQuery();


  const HandleChange = (id) => {
    if(id){
      router.push(`/dashboard/permission/${id}`)
    }


  }

  console.log(data, "los");
  return (
    <div className="container-fluid">
      <div className="row">
        {data?.map((per) => (
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card card-outline rounded-0 card-navy">
              <div className="card-header">
                <h3 className="card-title">{per?.role} </h3>
                <div className="card-tools">
                  <h3 className="card-title">Total users with this role: 3</h3>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive-md">
                  <div id="list_wrapper" className=" no-footer">
                    <div className="row">
                      <div className="col-sm-12 ">
                        <table className="table table-hover table-striped table-bordered no-footer pb-0">
                          <thead>
                            <tr>
                              <th>Module</th>
                              <th>C</th>
                              <th>R</th>
                              <th>U</th>
                              <th>D</th>
                            </tr>
                          </thead>
                          <tbody>
                            {per?.actions?.map((actions) => (
                              <>
                                <tr>
                                  <td className="align-content-center ">
                                    {actions?.resource}
                                  </td>
                                  <td>
                                    {actions?.create ? (
                                      <i className="fa fa-check text-success " />
                                    ) : (
                                      <i className="fa fa-close text-danger" />
                                    )}
                                  </td>
                                  <td>
                                    {actions?.read ? (
                                      <i className="fa fa-check text-success " />
                                    ) : (
                                      <i className="fa fa-close text-danger" />
                                    )}
                                  </td>
                                  <td>
                                    {actions?.update ? (
                                      <i className="fa fa-check text-success " />
                                    ) : (
                                      <i className="fa fa-close text-danger" />
                                    )}
                                  </td>
                                  <td>
                                    {actions?.delete ? (
                                      <i className="fa fa-check text-success " />
                                    ) : (
                                      <i className="fa fa-close text-danger" />
                                    )}
                                  </td>
                                </tr>
                              </>
                            ))}
                            <tr>
                              <td className="align-content-center " colSpan={5}>
                                and 24 more...
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="text-right">
                  <button
                    type="submit"
                    className="btn btn-primary rounded "
                    onClick={()=> HandleChange(per?._id)}

                  >
                    Edit
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PermissionCompoments;
