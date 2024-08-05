import dynamic from "next/dynamic";
import React, { Suspense } from "react";
// import "./globals.css";
import "../../app/globals.css";
// import DashboardLayout from "../../components/layouts/dashboard";
const DynamicDashboardLayout = dynamic(
  () => import("../../components/layouts/dashboard"),
  { ssr: false }
);

// export const metadata = {
//   title: "Ria Lingo",
//   description: "",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

function Layout({ children }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <DynamicDashboardLayout>{children}</DynamicDashboardLayout>
    </Suspense>
  );
}

export default Layout;
