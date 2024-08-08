"use client"
import AdminDashboard from '@/components/dashboard/adminDashboard'
import { useGetSatateQuery } from '@/redux/services/stateAPI'
import React from 'react'

function Dashboard() {
  const {data, isLoading} = useGetSatateQuery()
  return (
    <AdminDashboard data={data}/>
  )
}

export default Dashboard
