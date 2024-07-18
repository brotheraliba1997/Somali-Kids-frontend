import CategoryList from "@/components/dashboard/category";
import React from "react";

function Category() {
  return (
    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Categories</h3>
          <div className="card-tools">
            <a
              href="video-upload.html"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add Category
            </a>
          </div>
        </div>

        <CategoryList />
      </div>
    </div>
  );
}

export default Category;
