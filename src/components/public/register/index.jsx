"use client";
import CustomButton from "@/components/customButton";
import { notifyFailure, notifySuccess } from "@/components/toast/toast";
import { useGetPackagesQuery } from "@/redux/services/packageAPI";
import { useCreateSubcriptionMutation } from "@/redux/services/subcriptionAPI";
import React, { useEffect, useState } from "react";

function RegisterComponents() {
  const { data, isLoading } = useGetPackagesQuery();
  const [packageType, setPackageType] = useState(null);
  const [format, setFormatData] = useState(null);

  // Function to handle change in select input
  const handlePackageTypeChange = (e) => {
    setFormatData({ ...format, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (data) {
      const filter = data?.results?.find(
        (items) => items?._id === format?.packageId
      );
      setPackageType(filter);
    }
  }, [format]);

  const [CreateSubcription, { data: subcription, isLoading: loading }] =
    useCreateSubcriptionMutation();

  const categoryValueHandler = async (e) => {
    e.preventDefault();
    try {
      await CreateSubcription(format).unwrap();
      // router.push("/dashboard/package");
      notifySuccess("your account register successfully!");
    } catch (err) {
      console.error("Failed to create program:", err);
      notifyFailure(err.data.message);
    }
  };

  console.log(packageType, "packageType");
  console.log(format, "format");

  return (
    <>
      <div className="pages-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bannertext">
                <h1>Registration</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="abthome-section">
        <div className="container">
          <div className="row gap-lg-5 justify-content-center">
            <div className="col-lg-6 col-md-7 col-sm-12 mb-3">
              <form
                className="row loignbg"
                id="packageForm"
                onSubmit={categoryValueHandler}
              >
                <div className="col-md-12">
                  <div className="cont-text text-center mb-3">
                    <h2 style={{ color: "#EC3C26" }}>REGISTER</h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                      First Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      required=""
                      name="firstName"
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lname" className="form-label">
                      Last Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      name="lastName"
                      required=""
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required=""
                      name="email"
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      required=""
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="number" className="form-label">
                      phone <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="password"
                      name="phone"
                      required=""
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      required=""
                      name="address"
                      onChange={handlePackageTypeChange}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <label htmlFor="packageType" className="form-label">
                      Package Type <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control"
                      id="packageType"
                      name="packageId"
                      onChange={handlePackageTypeChange}
                    >
                      <option value="">--Select--</option>
                      {data?.results?.map((items, index) => (
                        <option key={index} value={items?._id}>
                          {items?.name}{" "}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {packageType?.name !== "Business" ? (
                  <div className="col-md-12  mb-3" id="individualSection">
                    <div className="form-group mb-3">
                      <label htmlFor="paymentAmount" className="form-label">
                        Payment Amount
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="paymentAmount"
                        defaultValue={packageType?.amount}
                        readOnly=""
                      />
                    </div>
                  </div>
                ) : null}

                <div className="col-md-12 mb-3">
                  <div className="d-grid">
                    <CustomButton
                      title="  Sign Up"
                      type="submit"
                      className="btn btn-danger px-4 rounded-1"
                      isLoading={loading}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterComponents;
