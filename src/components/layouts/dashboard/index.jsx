"use client";
import React, { useEffect } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useCheckUserAuthMutation } from "@/redux/services/userApi";
import socket from "../../../services/socket";


function DashboardLayout({ children }) {
  let isInitialized = false;




  const router = useRouter();
  const pathName = useParams()
  console.log(pathName, "pathName")

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  useEffect(() => {
    // if (user)
    if (!isInitialized) {
      if (!socket?.connected) socket.connect();
      isInitialized = true;
    }
    console.log("socket status=>", socket, socket?.connected);
    socket.on("connection", (data) => {
      console.log("Connected to server", data);
     
    });

    return () => {
      socket.off("disconnect");

      // socket.disconnect((data) => {
      //   console.log("disconnect", data);
      // });
    };
  }, []);



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
