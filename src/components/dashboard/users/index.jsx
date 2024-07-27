import React from "react";

function UsersDashboard() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading } = useGetUsersQuery({ page, pageSize });

  console.log(data, "datais");
  const [openActionBtn, setOpenActionBtn] = useState(null);

  const [uploadCategory, { data: dataUpload, isLoading: loading }] =
    useUpdateCategoryMutation();

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure you wan't to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await uploadCategory({
            payload: { softDelete: true },
            id: id,
          }).unwrap();
          Swal.fire({
            title: "Deleted Successfully!",
            icon: "success",
          });
        } catch (err) {
          notifyFailure(err?.data?.message);
        }
      }
    });
  };

  const columns = [
    {
      displayName: "Name",
      displayField: (e) => (
        <>
          <div className="d-flex gap-2">
            <p className="text-secondary"> {e?.firstName} </p>
            <p className="text-secondary"> {e?.lastName} </p>
          </div>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Email",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.email} </p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Phone",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.phone}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Role",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.role}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Address",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.address}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "City",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.city}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "State",
      displayField: (e) => (
        <>
          <p className="text-secondary"> {e?.state}</p>
        </>
      ),
      searchable: true,
    },

    {
      displayName: "Action",
      key: "",
      displayField: (e) => (
        <>
          <ActionButton
            data={e?.id}
            openActionBtn={openActionBtn}
            setOpenActionBtn={setOpenActionBtn}
            routeChange={`/dashboard/users/${e?.id}/edit`}
            deleteHandler={() => deleteHandler(e?.id)}
          />
        </>
      ),
      searchAble: true,
    },
  ];

  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">Users List</h3>
          <div className="card-tools">
            <a
              href="add-user.html"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add User
            </a>
          </div>
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
                        <th>User type</th>
                        <th>Password</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mohammad Ahmed</td>
                        <td>ahmed@gmail.com</td>
                        <td>03449743923</td>
                        <td>Admin</td>
                        <td>admin123</td>
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
                              <span className="fa fa-edit text-primary" /> Edit
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
                        <td>ahmed@gmail.com</td>
                        <td>03449743923</td>
                        <td>Admin</td>
                        <td>admin123</td>
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
                              <span className="fa fa-edit text-primary" /> Edit
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
                        <td>ahmed@gmail.com</td>
                        <td>03449743923</td>
                        <td>Parent</td>
                        <td>admin123</td>
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
                              <span className="fa fa-edit text-primary" /> Edit
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
                        <td>ahmed@gmail.com</td>
                        <td>03449743923</td>
                        <td>Teacher</td>
                        <td>admin123</td>
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
                              <span className="fa fa-edit text-primary" /> Edit
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
  );
}

export default UsersDashboard;
