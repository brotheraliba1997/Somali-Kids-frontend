"use client"
import UploadVideoList from '@/components/dashboard/resources/uploadVideoList'
import Permission from '@/components/permission';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function UploadVideo() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[2];
  const PermissionFinalValue = Permission(pathSpread);
  console.log(PermissionFinalValue, "PermissionValueAccess");
  
  return (

    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title dashPara">List of Uploaded Videos</h3>
          {PermissionFinalValue?.create && ( 
          <div className="card-tools dashPara">
            <Link
              href="/dashboard/upload-video/add"
              id="create_new"
              className="btn btn-flat btn-primary dashPara"
            >
              <span className="fas fa-plus " /> Upload Video
            </Link>
          </div>
          )}
        </div>

      <UploadVideoList PermissionFinalValue={PermissionFinalValue}/>
     
      </div>
    </div>
  )
}

export default UploadVideo
