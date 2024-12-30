import { useContext } from 'react'
import ErrorContext from '../contexts/ErrorContext'
import Search from './Search'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
function DashboardNav() {
  const dispatch = useContext(ErrorContext)
  const navigete = useNavigate()

  const handleLogout = event => {
    event.preventDefault()
    dispatch({ type: 'logout' })
    dispatch({ type: 'greenMsg', payload: 'Logged out.' })
    navigete('/')
  }
  return (
    <nav className="navbar bg-dark border-bottom border-body p-5 position-sticky top-0 shadow-lg z-3" data-bs-theme="dark">
      <div className="d-flex gap-2 align-items-center">
        <img src="../../img/logo-white.png" alt="Logo" className="header__logo" />
        <h1 className="fs-1 fw-bolder">ADMIN PANEL</h1>
      </div>
      <Search />
      <button className="btnx btnx--white" onClick={handleLogout}>
        LOGOUT
      </button>
      <SideBar />
    </nav>
  )
}

export default DashboardNav
