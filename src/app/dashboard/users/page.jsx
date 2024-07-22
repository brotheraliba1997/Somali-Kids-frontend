import UsersDashboard from '@/components/dashboard/users'
import Link from 'next/link'
import React from 'react'

function Users() {
  return (


    <div className="container-fluid">
      <div className="card card-outline rounded-0 card-navy">
        <div className="card-header">
          <h3 className="card-title">List of Categories</h3>
          <div className="card-tools">
            <Link
              href="/dashboard/users/add"
              id="create_new"
              className="btn btn-flat btn-primary"
            >
              <span className="fas fa-plus" /> Add user
            </Link>
          </div>
        </div>

        <UsersDashboard />
      </div>
    </div>
   
  )
}

export default Users
