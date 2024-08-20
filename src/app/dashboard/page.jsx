"use client";
import AdminDashboard from "@/components/dashboard/adminDashboard";
import Parent from "@/components/dashboard/parentDashboard";
import { useGetSatateQuery } from "@/redux/services/stateAPI";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


function Dashboard() {
  const { data, isLoading } = useGetSatateQuery();

 



  const user = useSelector((state) => state?.auth?.user?.role);
  return (
    <>
      {user === "parent" ? (
        <Parent data={data} />
      ) : (
        <AdminDashboard data={data} />
      )}
    </>
  );
}

export default Dashboard;
