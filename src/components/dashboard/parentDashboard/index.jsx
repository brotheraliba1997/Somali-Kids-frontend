"use client"
import React from "react";
import UsersDashboard from "../users";
import { usePathname } from "next/navigation";
import Permission from "@/components/permission";
import ParentDashboard from "../parent";

function Parent({data}) {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[1];
  console.log(pathSpread, "pathSpread");

  const PermissionFinalValue = Permission(pathSpread);
  console.log(PermissionFinalValue, "PermissionFinalValue")
  
  return (
    <div className="container-fluid">
      <h1 className="">Welcome, User Dashboard!</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-light elevation-1">
              <i className="fas fa-user" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">ABC Adventures</span>
              <span className="info-box-number text-right h5">{data?.visit?.totalUser} </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-navy elevation-1">
              <i className="fas fa-play" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">123 Numbers</span>
              <span className="info-box-number text-right h5">{data?.visit?.totalVideo}</span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-dark elevation-1">
              <i className="fa fa-users" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Reading Rockets</span>
              <span className="info-box-number text-right h5">1000 </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-warning elevation-1">
              <i className="fa fa-calendar-alt" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Languge Learning</span>
              <span className="info-box-number text-right h5">{data?.visit?.todayVisit} </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      <div className="container-fluid text-center py-2">
        <div className="card card-outline rounded-0 card-navy">
          <div className="card-header">
            <h3 className="card-title">List of Program</h3>
          </div>
          
          <ParentDashboard PermissionFinalValue={PermissionFinalValue} />
        
        </div>
      </div>
    </div>
  );
}

export default Parent;
