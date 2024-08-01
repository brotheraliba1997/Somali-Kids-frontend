import Link from "next/link";
import React from "react";

function ActionButton({showView, data, openActionBtn, setOpenActionBtn, routeChange, deleteHandler , viewRouteChange="#" }) {
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
          Action
          <span className="sr-only">Toggle Dropdown</span>
        </button>

        <div
          className={`dropdown-menu ${
            openActionBtn === data ? "ActionClosedAndOpen" : null
          }`}
          role="menu"
        >
          {!showView &&
          <>
          <Link className="dropdown-item view-data" href={viewRouteChange} >
            <span className="fa fa-eye text-dark" /> View
          </Link>
          <div className="dropdown-divider" />
          </> 
           }
          <Link className="dropdown-item edit-data" href={routeChange }>
            <span className="fa fa-edit text-primary" /> Edit
          </Link>
          <div className="dropdown-divider" />
          <div
            className="dropdown-item delete_data"
            href="#"
            data-id={3}
            onClick={deleteHandler}
          >
            <span className="fa fa-trash text-danger mr-2"  />
            Delete
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionButton;
