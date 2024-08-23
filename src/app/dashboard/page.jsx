"use client";
import AdminDashboard from "@/components/dashboard/adminDashboard";
import Parent from "@/components/dashboard/parentDashboard";
import { useGetSatateParentQuery, useGetSatateQuery } from "@/redux/services/stateAPI";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";


function Dashboard() {
  const { data, isLoading } = useGetSatateQuery();
  const { data:ParentState, isLoading:loading } = useGetSatateParentQuery();
  

 



  const user = useSelector((state) => state?.auth?.user?.role);
  return (
    <>
      {user === "parent" ? (
        <Parent data={ParentState} />
      ) : (
        <AdminDashboard data={data} />
      )}
    </>
  );
}

export default Dashboard;
