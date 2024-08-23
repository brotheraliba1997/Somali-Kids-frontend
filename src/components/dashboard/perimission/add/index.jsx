"use client";
import CustomButton from "@/components/customButton";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import {
  useGetSinglePermissionQuery,
  useUpdatePermissionMutation,
} from "@/redux/services/permissionAPI";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function PermissionControlAccess() {
  const { id } = useParams();
  const [action, setAction] = useState(null);

  const { data, isLoading } = useGetSinglePermissionQuery(id);

  const [UpdatePermission, { data: permission, isloading: loadingPermission }] =
    useUpdatePermissionMutation();

  useEffect(() => {
    setAction(data);
  }, [data]);

  const crudHandler = (index, actionType) => {
    const list = action?.actions?.map((items, ind) =>
      ind === index
        ? {
            ...items,
            [actionType]: !items?.[actionType],
          }
        : items
    );

    if (list) {
      setAction({ ...action, actions: list });
    }
  };

  console.log(action, "actionlist");

  const permissionValueHandler = async (e) => {
    e.preventDefault();
    try {
      await UpdatePermission({ payload: action, id }).unwrap();
      notifySuccess("create category successfully!");
      // router.push("/dashboard/program");
    } catch (err) {
      console.error("Failed to create category:", err);
      notifyFailure(err.data.message);
    }
  };

  return (
    <div className="container-fluid">
      <div className="card p-4 ">
        <div className="d-flex justify-content-between">
          <h3
            className="card-title mb-3 "
            style={{ fontSize: "20px", fontWeight: "600" }}
          >
            Edit Permission
          </h3>

          <h3 className="card-title mb-3" style={{ fontSize: "16px" }}>
          {action?.role ? action.role.charAt(0).toUpperCase() + action.role.slice(1) : ''}
          </h3>
        </div>

        <table>
          <tr className="table-head">
            <td className="text- detailed " style={{ paddingLeft: "2.5em" }}>
              Module
            </td>
            <td className="detailed">Create</td>
            <td className="detailed">Read</td>
            <td className="detailed">Update</td>
            <td className="detailed">Delete</td>
          </tr>
          {action?.actions?.map((x, index) => (
            <tr key={x.id + index}>
              <td className="form-switch  detailed">
                <p className="tablePara">{x?.resource}</p>
              </td>
              <td
                className="form-switch detailed"
                style={{ paddingLeft: "3.5em" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={x?.create}
                  onClick={() => crudHandler(index, "create")}
                />
              </td>
              <td
                className="form-switch detailed"
                style={{ paddingLeft: "3.5em" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={x?.read}
                  onClick={() => crudHandler(index, "read")}
                />
              </td>
              <td
                className="form-switch detailed"
                style={{ paddingLeft: "3.5em" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={x?.update}
                  onClick={() => crudHandler(index, "update")}
                />
              </td>
              <td
                className="form-switch detailed"
                style={{ paddingLeft: "3.5em" }}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={x?.delete}
                  onClick={() => crudHandler(index, "delete")}
                />
              </td>
            </tr>
          ))}
        </table>
        <div className="d-flex justify-content-end">
          <CustomButton
            title=" submit"
            type="submit"
            className=" btn btn-primary rounded my-2 "
            style={{ width: "100px" }}
            onClick={permissionValueHandler}
            isLoading={loadingPermission}
          />
        </div>
      </div>
    </div>
  );
}

export default PermissionControlAccess;
