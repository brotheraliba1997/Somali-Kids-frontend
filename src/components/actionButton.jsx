import Link from "next/link";
import React from "react";

function ActionButton({ data, openActionBtn, setOpenActionBtn, routeChange }) {
  console.log(openActionBtn, "sssss");

  return (
    <>
      <div className="position-relative " style={{width: "fit-content" }}>
        <button
          type="button"
          className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
          data-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setOpenActionBtn(openActionBtn === data ? null : data)}
        >
          Actionsss
          <span className="sr-only">Toggle Dropdown</span>
        </button>

        <div
          className={`dropdown-menu ${
            openActionBtn === data ? "ActionClosedAndOpen" : null
          }`}
          role="menu"
        >
          <Link className="dropdown-item view-data" href="#">
            <span className="fa fa-eye text-dark" /> View
          </Link>
          <div className="dropdown-divider" />
          <Link className="dropdown-item edit-data" href={routeChange}>
            <span className="fa fa-edit text-primary" /> Edit
          </Link>
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
      </div>
    </>
  );
}

export default ActionButton;
