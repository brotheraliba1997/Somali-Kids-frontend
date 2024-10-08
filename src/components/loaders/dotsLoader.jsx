"use client";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

function DotsLoader({ dark, size, center }) {
  return (
    <div className=" text-center h-100 w-100">
      <div className={`react-loader-spinner ${!center ? "d-flex justify-content-center align-items-center " : ""}`} >
        <ThreeDots
          height={size ? size : "27"}
          width={size ? size : "27"}
          radius="9"
          color={dark ? "#000" : "#fff"}
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName="react-loader-spinner"
          visible={true}
        />
      </div>
    </div>
  );
}

export default DotsLoader;
