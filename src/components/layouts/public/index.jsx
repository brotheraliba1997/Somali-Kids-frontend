import React from "react";
import Header from "./header";
import Footer from "./footer";
// import "./../../../assets/public/css/style.css";


function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default PublicLayout;
