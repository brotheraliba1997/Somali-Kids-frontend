"use client"
import UsersDashboard from '@/components/dashboard/users'
import Permission from '@/components/permission';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Users() {
  const pathName = usePathname();
  const pathSpread = pathName.split("/")[1];
  console.log(pathSpread, "pathSpread");

  const PermissionFinalValue = Permission(pathSpread);
  return (


    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Users</h3>
          {PermissionFinalValue?.create && 
          <div className="card-tools">
            <Link
              href="/dashboard/users/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add User
            </Link>
          </div>
          }
        </div>

        <UsersDashboard PermissionFinalValue={PermissionFinalValue} />
      </div>
    </div>
   
  )
}

export default Users
