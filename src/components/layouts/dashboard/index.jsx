import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

function DashboardLayout({children}) {
  return (
    <>
     <Header />
     <Sidebar />
     <div className="content-wrapper pt-3">
     <div className="content text-dark"> {children} </div>
     </div>
     <Footer/>
     
    </>
  )
}

export default DashboardLayout
