import Link from "next/link";
import React from "react";

function ActionButton({
  PermissionFinalValue,
  showView,
  data,
  openActionBtn,
  setOpenActionBtn,
  routeChange,
  deleteHandler,
  viewRouteChange = "#",
}) {
  return (
    <>
      <div className="position-relative " style={{ width: "fit-content" }}>
        <button
          type="button"
          className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
          data-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setOpenActionBtn(openActionBtn === data ? null : data)}
        >
          Action
          <span className="sr-only">Toggle Dropdown</span>
        </button>

        <div
          className={`dropdown-menu ${
            openActionBtn === data &&
            (PermissionFinalValue?.update || PermissionFinalValue?.delete)
              ? "ActionClosedAndOpen"
              : ""
          }`}
          role="menu"
          style={{ padding: "0" }}
        >
          {!showView && PermissionFinalValue?.read && (
            <>
            <div style={{ padding: "10px", borderBottom: "1px solid lightgray" }} >
              <Link className="dropdown-item view-data" href={viewRouteChange}>
                <span className="fa fa-eye text-dark" /> View
              </Link>
              </div>
            </>
          )}
          {PermissionFinalValue?.update && (
            <>
              <div
                style={{ padding: "10px", borderBottom: "1px solid lightgray" }}
              >
                <Link className="dropdown-item edit-data" href={routeChange}>
                  <span className="fa fa-edit text-primary" /> Edit
                </Link>
              </div>
            </>
          )}

          {PermissionFinalValue?.delete && (
            <>
              <div
                className="dropdown-item delete_data"
                href="#"
                data-id={3}
                onClick={deleteHandler}
                style={{
                  padding: "12px 25px",
                  borderBottom: "1px solid lightgray",
                }}
              >
                <span className="fa fa-trash text-danger mr-2" />
                Delete
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ActionButton;
