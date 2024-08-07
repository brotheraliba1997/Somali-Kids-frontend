import Link from "next/link";
import React, { useEffect } from "react";

function AddProgramComponents({ categoryValueHandler, handleChange, values }) {
  return (
    
      <div className="row mt-n3 justify-content-center align-items-center flex-column">
        <div className="col-md-8">
          <div className="card rounded-0 shadow">
            <div className="card-body">
              <div className="container-fluid">
                <form onSubmit={categoryValueHandler}>
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="firstname" className="control-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="name"
                          id="firstname"
                          required="required"
                          defaultValue=""
                          value={values?.name}
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
                      href="/dashboard/program"
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

export default AddProgramComponents;
