import LanguageList from "@/components/dashboard/language";
import Link from "next/link";
import React from "react";

function Category() {
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Language</h3>
          <div className="card-tools">
            <Link
              href="/dashboard/language/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Language
            </Link>
          </div>
        </div>

        <LanguageList />
      </div>
    </div>
  );
}

export default Category;
