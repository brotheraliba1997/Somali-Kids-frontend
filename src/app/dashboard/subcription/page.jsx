"use client"
import LanguageList from "@/components/dashboard/language";
import PackageList from "@/components/dashboard/package";
import ProgramList from "@/components/dashboard/program";
import SubcriptionList from "@/components/dashboard/subcription";
import Permission from "@/components/permission";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Subcription() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[2];
  const PermissionFinalValue = Permission(pathSpread)
  console.log(PermissionFinalValue, "PermissionValueAccess");
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Subscription</h3>
          {PermissionFinalValue?.create && 
          <div className="card-tools">
            <Link
              href="/dashboard/subcription/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Subcription
            </Link>
          </div>
          }
        </div>

        <SubcriptionList PermissionFinalValue={PermissionFinalValue} />
      </div>
    </div>
  );
}

export default Subcription;
