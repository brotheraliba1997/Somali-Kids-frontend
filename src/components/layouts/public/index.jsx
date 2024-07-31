import React from "react";
import Header from "./header";
import Footer from "./footer";

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
