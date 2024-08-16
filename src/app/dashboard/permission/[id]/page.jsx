import PermissionControlAccess from "@/components/dashboard/perimission/add";
import Link from "next/link";
import React from "react";

function ControlPermission() {
  return (
    <>
  
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3
            className="card-title "
            style={{ fontSize: "25px", fontWeight: "600" }}
          >
            Edit Permission
          </h3>
          <div className="card-tools">
            {/* <Link
              href="/dashboard/package/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Permission
            </Link> */}
          </div>
        </div>
       
      </div>
    </div>
    <PermissionControlAccess />
    </>
  );
}

export default ControlPermission;
