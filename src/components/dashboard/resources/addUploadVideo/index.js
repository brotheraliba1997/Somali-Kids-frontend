import React from "react";

function AddUploadList() {
  return (
    <section className="content  text-dark">
      <div className="container-fluid">
        <div className="content py-4 bg-gradient-navy px-3">
          <h4 className="mb-0"> Upload Video</h4>
        </div>
        <div className="row mt-n3 justify-content-center align-items-center flex-column">
          <div className="col-md-8">
            <div className="card rounded-0 shadow">
              <div className="card-body">
                <div className="container-fluid">
                  <form action="" id="inmate-form">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="firstname" className="control-label">
                            Video name
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
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            htmlFor="select-Language"
                            className="control-label"
                          >
                            Language
                          </label>
                          <select
                            className="form-control form-control-sm rounded-0"
                            name="select-Language"
                            id="select-Language"
                            required="required"
                          >
                            <option value="Somali">Somali</option>
                            <option value="English">English</option>
                            <option value="Oromo">Oromo</option>
                            <option value="Swahili">Swahili</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            htmlFor="select-Categories"
                            className="control-label"
                          >
                            Categories
                          </label>
                          <select
                            className="form-control form-control-sm rounded-0 "
                            name="select-Categories"
                            id="select-Categories"
                            required="required"
                          >
                            <option value="Culture">Culture</option>
                            <option value="Language">Language</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label htmlFor="" className="control-label">
                            Upload Video
                          </label>
                          <div className="custom-file custom-file-sm rounded-0">
                            <input
                              type="file"
                              className="custom-file-input rounded-0"
                              id="customFile1"
                              name="img"
                            />
                            <label
                              className="custom-file-label rounded-0"
                              htmlFor="customFile1"
                            >
                              Choose file
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label
                            htmlFor="description-video"
                            className="control-label"
                          >
                            Description of the Video
                          </label>
                          <textarea
                            className="form-control form-control-sm rounded-0"
                            name="description-video"
                            id="description-video"
                            required="required"
                            value=""
                            defaultValue={""}
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
    </section>
  );
}

export default AddUploadList;
