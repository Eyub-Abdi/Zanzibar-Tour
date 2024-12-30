import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap JS

function SideBar() {
  return (
    <>
      <div className="navigation" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <input type="checkbox" className="navigation__checkbox" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon navigation">&nbsp;</span>
        </label>
        <div className="navigation-dash__backgrounds">&nbsp;</div>
      </div>

      <div className="offcanvas offcanvas-start w-" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <nav className="">
          <ul className="navigation__list">
            <li className="nagivation__item">
              <a href="#" className="navigation__link">
                Home
              </a>
            </li>
            <li className="nagivation__item">
              <a href="#" className="navigation__link">
                Tours
              </a>
            </li>
            <li className="nagivation__item">
              <a href="#" className="navigation__link">
                Tour Guides
              </a>
            </li>
            <li className="nagivation__item">
              <a href="#" className="navigation__link">
                Users
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SideBar
