import LanguageList from "@/components/dashboard/language";
import PackageList from "@/components/dashboard/package";
import ProgramList from "@/components/dashboard/program";
import SubcriptionList from "@/components/dashboard/subcription";
import Link from "next/link";
import React from "react";

function Subcription() {
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Subscription</h3>
          <div className="card-tools">
            {/* <Link
              href="/dashboard/subcription/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Subcription
            </Link> */}
          </div>
        </div>

        <SubcriptionList />
      </div>
    </div>
  );
}

export default Subcription;
