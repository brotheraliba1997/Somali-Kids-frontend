"use client"
import dynamic from "next/dynamic";
import "./../../assets/public/css/style.css";
// @import url("../assets/dashboard/css/fontawesome/css/adminlte.css");
// /* @import url("../assets/dashboard/css/fontawesome/css/adminlte.min.css"); */
// @import url("../assets/dashboard/css/fontawesome/css/custom.css");
// @import url("../assets/dashboard/css/fontawesome/css/dataTables.bootstrap4.css");
 import "../../assets/dashboard/css/fontawesome/css/dataTables.bootstrap4.css"
 import "../../assets/dashboard/css/fontawesome/css/adminlte.css"

import { Suspense, useEffect } from "react";
import { useCreateStateQuery } from "@/redux/services/stateAPI";
const DynamicPublicLayout = dynamic(
  () => import("../../components/layouts/public/index"),
  { ssr: false }
);

// export const metadata = {
//   title: "Ria Lingo",
//   description: "",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };


export default function RootLayout({ children }) {

 

  const {data , isloading } = useCreateStateQuery()

  
  return (
    <Suspense fallback={<>Loading...</>}>
      <DynamicPublicLayout>{children}</DynamicPublicLayout>
    </Suspense>
  );
}
