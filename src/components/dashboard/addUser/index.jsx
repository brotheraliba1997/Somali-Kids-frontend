import Link from "next/link";
import React from "react";

function AddUserDashboard({ routeBack="#", categoryValueHandler, handleChange, values , hidePassword}) {
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
                        <label htmlFor="firstname" className="control-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="firstName"
                          id="firstname"
                          required="required"
                          defaultValue=""
                          value={values?.firstName}
                          onChange={handleChange}
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
                          name="lastName"
                          id="lastname"
                          required="required"
                          defaultValue=""
                          onChange={handleChange}
                          value={values?.lastName}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="email" className="control-label">
                          Email{" "}
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-sm rounded-0"
                          name="email"
                          id="email"
                          required="required"
                          defaultValue=""
                          onChange={handleChange}
                          value={values?.email}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="phone" className="control-label">
                          Phone{" "}
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-sm rounded-0"
                          name="phone"
                          id="phone"
                          required="required"
                          defaultValue=""
                          onChange={handleChange}
                          value={values?.phone}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="select-user" className="control-label">
                          User type
                        </label>
                        <select
                          className="form-control form-control-sm rounded-0"
                          name="role"
                          id="select-user"
                          required="required"
                          onChange={handleChange}
                          value={values?.role}
                        >
                          <option value="admin">Admin</option>
                          <option value="parent">Parent</option>
                          <option value="teacher">Teacher</option>
                        </select>
                      </div>
                    </div>
                    {!hidePassword  &&   <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="password" className="control-label">
                          Password{" "}
                        </label>
                        <input
                          type="password"
                          className="form-control form-control-sm rounded-0"
                          name="password"
                          id="Password"
                          // required="required"
                          defaultValue=""
                          value={values?.password}
                          onChange={handleChange}
                        />
                      </div>
                    </div> }                 
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="password" className="control-label">
                          Address{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="address"
                          id="Password"
                          required="required"
                          defaultValue=""
                          value={values?.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="password" className="control-label">
                          City{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="city"
                          id="Password"
                          required="required"
                          defaultValue=""
                          value={values?.city}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="password" className="control-label">
                          State{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="state"
                          id="Password"
                          required="required"
                          defaultValue=""
                          value={values?.state}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="form-group">
                        <label htmlFor="password" className="control-label">
                          ZipCode{" "}
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-sm rounded-0"
                          name="zipCode"
                          id="Password"
                          required="required"
                          defaultValue=""
                          value={values?.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" py-1 text-center">
                    <button className="btn btn-flat btn-sm btn-navy bg-gradient-navy text-white btnhover">
                      <i className="fa fa-save" /> Save
                    </button>
                    <Link
                      className="btn btn-flat btn-sm btn-light bg-gradient-light border"
                      href={routeBack}
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

export default AddUserDashboard;
