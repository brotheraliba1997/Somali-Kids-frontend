"use client"
import ViewUploadComponents from '@/components/dashboard/resources/uploadVideoList/view'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'

function ViewVideo() {
  const { id } = useParams();

  console.log(id, "id")
  return (

    <>
    <div className="container-fluid">
      <div className="content py-4 bg-gradient-navy px-3">
        <h4 className="mb-0"> View Video  </h4>
      </div>
      <ViewUploadComponents id={id}   />
      </div>
    </>
    
  )
}

export default ViewVideo
