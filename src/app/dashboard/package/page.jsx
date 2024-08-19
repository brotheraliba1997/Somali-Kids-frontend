"use client" 
import LanguageList from "@/components/dashboard/language";
import PackageList from "@/components/dashboard/package";
import ProgramList from "@/components/dashboard/program";
import Permission from "@/components/permission";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Package() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[2];
  const PermissionFinalValue = Permission(pathSpread);
  console.log(PermissionFinalValue, "PermissionValueAccess");
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Package</h3>
          {PermissionFinalValue?.create && ( 
          <div className="card-tools">
            <Link
              href="/dashboard/package/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Package
            </Link>
          </div>
          )}
        </div>

        <PackageList PermissionFinalValue={PermissionFinalValue} />
      </div>
    </div>
  );
}

export default Package;
