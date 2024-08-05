import LanguageList from "@/components/dashboard/language";
import ProgramList from "@/components/dashboard/program";
import Link from "next/link";
import React from "react";

function Program() {
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Program</h3>
          <div className="card-tools">
            <Link
              href="/dashboard/program/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Program
            </Link>
          </div>
        </div>

        <ProgramList />
      </div>
    </div>
  );
}

export default Program;
