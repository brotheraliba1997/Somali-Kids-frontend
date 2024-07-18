"use client";
import React, { useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useCheckUserAuthMutation } from "@/redux/services/userApi";

function DashboardLayout({ children }) {
  // const [checkAuth, { data: userCheckAvaibaleAccount, isLoading }] =
  //   useCheckUserAuthMutation();

  // const userCheckHandler = async () => {
  //   try {
  //     await checkAuth().unwrap();
  //   } catch (err) {
  //     console.log("err=>", err);
  //     // notifyFailure(err?.data?.message);
  //     router.push("/login");
  //   }
  // };

  // useEffect(() => {
  //   userCheckHandler();
  // }, []);

  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-wrapper pt-3">
        <div className="content text-dark"> {children} </div>
      </div>
      <Footer />
    </>
  );
}

export default DashboardLayout;
