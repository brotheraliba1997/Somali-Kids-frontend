// import PublicLayout from "../../components/layouts/public";
import dynamic from "next/dynamic";
import "./../../assets/public/css/style.css";

import { Suspense } from "react";
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
  return (
    <Suspense fallback={<>Loading...</>}>
      <DynamicPublicLayout>{children}</DynamicPublicLayout>
    </Suspense>
  );
}
