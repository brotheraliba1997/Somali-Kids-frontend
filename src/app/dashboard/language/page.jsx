"use client";
import LanguageList from "@/components/dashboard/language";
import Permission from "@/components/permission";
import { useGetPermissionQuery } from "@/redux/services/permissionAPI";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

function Language() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[2];
  const PermissionFinalValue = Permission(pathSpread)
  console.log(PermissionFinalValue, "PermissionValueAccess");

  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Language</h3>
          {PermissionFinalValue?.create && 
          <div className="card-tools">
            <Link
              href="/dashboard/language/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Language
            </Link>
          </div>
          }
        </div>

        <LanguageList PermissionFinalValue={PermissionFinalValue} />
      </div>
    </div>
  );
}

export default Language;
