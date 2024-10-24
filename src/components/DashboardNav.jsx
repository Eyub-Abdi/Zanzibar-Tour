import React from 'react'

function DashboardNav() {
  return (
    <nav className="navbar bg-dark border-bottom border-body p-5 position-sticky top-0 shadow-lg z-3" data-bs-theme="dark">
      <div className="d-flex gap-2 align-items-center">
        <img src="../../img/logo-white.png" alt="Logo" className="header__logo" />
        <h1 className="fs-1 fw-bolder">ADMIN PANEL</h1>
      </div>
    </nav>
  )
}

export default DashboardNav
