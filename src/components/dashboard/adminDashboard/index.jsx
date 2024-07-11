import React from "react";

function AdminDashboard() {
  return (
    <div className="container-fluid">
      <h1 className="">Welcome, Adminstrator Admin!</h1>
      <hr />
      <div className="row">
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-light elevation-1">
              <i className="fas fa-user" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Customer List</span>
              <span className="info-box-number text-right h5">500 </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-navy elevation-1">
              <i className="fas fa-play" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Videos Uploaded</span>
              <span className="info-box-number text-right h5">55 </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-dark elevation-1">
              <i className="fa fa-users" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Total Visters</span>
              <span className="info-box-number text-right h5">1000 </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        <div className="col-12 col-sm-3 col-md-3">
          <div className="info-box">
            <span className="info-box-icon bg-gradient-warning elevation-1">
              <i className="fa fa-calendar-alt" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Today's Visits</span>
              <span className="info-box-number text-right h5">100 </span>
            </div>
            {/* /.info-box-content */}
          </div>
          {/* /.info-box */}
        </div>
        {/* /.col */}
      </div>
      <div className="container-fluid text-center">
        <div className="card card-outline rounded-0 card-navy">
          <div className="card-header">
            <h3 className="card-title">List of Customer</h3>
          </div>
          <div className="card-body">
            <div className="table-responsive-md">
              <div
                id="list_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table table-hover table-striped table-bordered dataTable no-footer">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Address</th>
                          <th>Package Type</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mohammad Ahmed</td>
                          <td>ahhmed@gmail.com</td>
                          <td>0344 9742165</td>
                          <td>
                            Lorem ipsum dolor sit amet
                            <br /> consectetur, adipisicing elit.
                          </td>
                          <td>Golden</td>
                          <td>
                            <span className="badge badge-success bg-gradient-success px-3 rounded-pill">
                              Active
                            </span>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              className="btn btn-flat p-1 btn-default btn-sm dropdown-toggle dropdown-icon"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Action
                              <span className="sr-only">Toggle Dropdown</span>
                            </button>
                            <div className="dropdown-menu" role="menu">
                              <a className="dropdown-item view-data" href="#">
                                <span className="fa fa-eye text-dark" /> View
                              </a>
                              <div className="dropdown-divider" />
                              <a className="dropdown-item edit-data" href="#">
                                <span className="fa fa-edit text-primary" />{" "}
                                Edit
                              </a>
                              <div className="dropdown-divider" />
                              <a
                                className="dropdown-item delete_data"
                                href="javascript:void(0)"
                                data-id={3}
                              >
                                <span className="fa fa-trash text-danger" />
                                Delete
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
