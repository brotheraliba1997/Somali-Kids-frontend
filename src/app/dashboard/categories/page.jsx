"use client";
import CategoryList from "@/components/dashboard/category";
import Permission from "@/components/permission";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Category() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[2];
  const PermissionFinalValue = Permission(pathSpread);
  console.log(PermissionFinalValue, "PermissionValueAccess");

  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Categories</h3>
          {PermissionFinalValue?.create && (
            <div className="card-tools">
              <Link
                href="/dashboard/categories/add"
                id="create_new"
                className="btn btn-flat btn-primary"
              >
                <span className="fas fa-plus" /> Add Category
              </Link>
            </div>
          )}
        </div>

        <CategoryList PermissionFinalValue={PermissionFinalValue} />
      </div>
    </div>
  );
}

export default Category;
