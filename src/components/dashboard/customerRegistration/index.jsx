import React from "react";

function CustomerRegistrationDashboard() {
  return (
    <div className="container-fluid">
      <div className="content py-4 bg-gradient-navy px-3">
        <h4 className="mb-0">Customer Registration</h4>
      </div>
      <div className="row mt-n3 justify-content-center align-items-center flex-column">
        <div className="card rounded-0 shadow" style={{ width: "50%" }}>
          <div className="card-body">
            <div className="container-fluid">
              <form action="" id="inmate-form">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="firstname" className="control-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="firstname"
                        id="firstname"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="lastname" className="control-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="lastname"
                        id="lastname"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="email" className="control-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-sm rounded-0"
                        name="email"
                        id="email"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="Phone" className="control-label">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="form-control form-control-sm rounded-0"
                        name="Phone"
                        id="Phone"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="address" className="control-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="address"
                        id="address"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="City" className="control-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="City"
                        id="City"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="State" className="control-label">
                        State
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="State"
                        id="State"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="Zip_code" className="control-label">
                        Zip code
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-0"
                        name="Zip_code"
                        id="Zip_code"
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="package_type" className="control-label">
                        Package Type
                      </label>
                      <select
                        className="form-control form-control-sm rounded-0"
                        name="package_type"
                        id="package_type"
                        required="required"
                      >
                        <option value="Packag1">Packge 1</option>
                        <option value="Packag2">Package 2</option>
                        <option value="Packag3">Packag 3</option>
                        <option value="Packag4">Package 4</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card-footer py-1 text-center">
            <button
              className="btn btn-flat btn-sm btn-navy bg-gradient-navy btnhover text-white"
              form="inmate-form"
            >
              <i className="fa fa-save" /> Save
            </button>
            <a
              className="btn btn-flat btn-sm btn-light bg-gradient-light border"
              href=""
            >
              <i className="fa fa-close" /> Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRegistrationDashboard;
