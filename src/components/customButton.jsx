import React from "react";
import DotsLoader from "./loaders/dotsLoader";

function CustomButton(props) {
  const { title, isLoading, icon, setEditOpen, className, ...rest } = props;
  return (
    <button className={`btn btn-primary btn-block ${className ? className : ""}`}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <DotsLoader size={27} />
      ) : (
        <>
          {icon} {title}
        </>
      )}
    </button>
  );
}

export default CustomButton;
