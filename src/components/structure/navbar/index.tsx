import React, {useEffect, useState} from 'react'
import {Link} from 'gatsby'

import logo from '../../../assets/images/cgen/logo-white-small.png'

const NavBar = (): JSX.Element => {
  const [stickyNav, setStickyNav] = useState(false)

  const trackScrolling = (): void => {
    setStickyNav(
      ((document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop) >= 50,
    )
  }

  useEffect(() => {
    window.addEventListener('scroll', trackScrolling)

    return (): void => {
      window.removeEventListener('scroll', trackScrolling)
    }
  }, [])

  const links = [
    {
      name: 'About',
      to: 'about',
    },
    {
      name: 'Services',
      to: 'services',
    },
    {
      name: 'Testimonials',
      to: 'testimonials',
    },
  ]

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top navbar-custom sticky sticky-dark ${
        stickyNav ? 'nav-sticky' : ''
      }`}
      id="main_navbar"
    >
      <div className="container">
        <Link className="navbar-brand logo" to="/">
          <img alt="" height={50} src={logo} />
          &nbsp;&nbsp;Candee Generations
        </Link>

        <button
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          type="button"
        >
          <i className="mdi mdi-menu" />
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="ml-auto" data-nav="list">
            <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
              <li key="home" className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              {links.map(link => (
                <li key={link.to} className="nav-item">
                  <Link className="nav-link" to={`/#${link.to}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
