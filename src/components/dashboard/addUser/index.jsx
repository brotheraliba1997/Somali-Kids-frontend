import React from 'react'

function AddUserDashboard() {
  return (
    <div className="container-fluid">
    <div className="content py-4 bg-gradient-navy px-3">
      <h4 className="mb-0"> Add User</h4>
    </div>
    <div className="row mt-n3 justify-content-center align-items-center flex-column">
      <div className="col-md-8">
        <div className="card rounded-0 shadow">
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
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="select-user" className="control-label">
                        User type
                      </label>
                      <select
                        className="form-control form-control-sm rounded-0 "
                        name="select-user"
                        id="select-user"
                        required="required"
                      >
                        <option value="Admin">Admin</option>
                        <option value="Parent">Parent</option>
                        <option value="Teacher">Teacher</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="form-group">
                      <label htmlFor="password" className="control-label">
                        Password{" "}
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-sm rounded-0"
                        name="Password"
                        id="Password"
                        required="required"
                        defaultValue=""
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="card-footer py-1 text-center">
            <button
              className="btn btn-flat btn-sm btn-navy bg-gradient-navy"
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
  </div>
  
  )
}

export default AddUserDashboard
