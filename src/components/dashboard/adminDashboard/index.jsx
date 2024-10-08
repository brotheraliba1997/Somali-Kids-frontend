"use client";
import React from "react";
import UsersDashboard from "../users";
import { usePathname } from "next/navigation";
import Permission from "@/components/permission";

function AdminDashboard({ data }) {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[1];
  console.log(pathSpread, "pathSpread");

  const PermissionFinalValue = Permission(pathSpread);

  return (
    <div className="container-fluid">
      <h1 className="">Welcome, Adminstrator Admin!</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-light elevation-1">
              <i className="fas fa-user" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Customer List</span>
              <span className="info-box-number text-right h5">
                {data?.visit?.totalUser}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-navy elevation-1">
              <i className="fas fa-play" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Videos Uploaded</span>
              <span className="info-box-number text-right h5">
                {data?.visit?.totalVideo}
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-dark elevation-1">
              <i className="fa fa-users" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Total Visters</span>
              <span className="info-box-number text-right h5">1000</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-warning elevation-1">
              <i className="fa fa-calendar-alt" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Today's Visits</span>
              <span className="info-box-number text-right h5">
                {data?.visit?.todayVisit}{" "}
              </span>
            </div>    
          </div>
        </div>
      </div>
      <div className="container-fluid text-center py-2">
        <div className="card card-outline rounded-0 card-navy">
          <div className="card-header">
            <h3 className="card-title">List of Customer</h3>
          </div>
          <UsersDashboard PermissionFinalValue={PermissionFinalValue} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
