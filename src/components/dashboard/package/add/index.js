"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddPackageComponents({ categoryValueHandler, handleChange, values }) {
  
 
  return (
    <div className="row mt-n3 justify-content-center align-items-center flex-column">
      <div className="col-md-8">
        <div className="card rounded-0 shadow">
          <div className="card-body">
            <div className="container-fluid">
              <form onSubmit={categoryValueHandler}>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="Name" className="control-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="name"
                        id="Name"
                        required="required"
                        defaultValue=""
                        value={values?.name}

                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="type" className="control-label">
                        Package type
                      </label>
                      <select
                        className="form-control form-control-sm rounded-0"
                        name="type"
                        id="type"
                        required
                        onChange={handleChange}
                        value={values?.type}
                      >
                        <option value="">Please Select </option>

                        <option value="Individual">Individual </option>
                        <option value="Business">Business </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="amount" className="control-label">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="amount"
                        id="firstname"
                        required="required"
                        defaultValue=""
                        value={values?.amount}

                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="validity" className="control-label">
                        Validity 
                      </label>
                      <div>
                      <select
                        className="form-control form-control-sm rounded-0"
                        name="validity"
                        id="validity"
                        required
                        onChange={handleChange}
                        value={values?.validity}
                      >
                        <option value="">Please Select </option>

                        <option value="7 day">7 day </option>
                        <option value="1 Months">1 Months </option>
                        <option value="3 Months">3 Months </option>
                      </select>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="Describtion" className="control-label">
                        Describtion
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="content"
                        id="Describtion"
                        required="required"
                        defaultValue=""
                        value={values?.content}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className=" py-1 text-center">
                  <button className="btn btn-flat btn-sm btn-navy bg-gradient-navy text-white">
                    <i className="fa fa-save" /> Save
                  </button>
                  <Link
                    className="btn btn-flat btn-sm btn-light bg-gradient-light border"
                    href="/dashboard/package"
                  >
                    <i className="fa fa-close" /> Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPackageComponents;
