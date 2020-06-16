import React, {useEffect, useState} from 'react'
import {Link} from 'react-scroll'

import logo from '../../../assets/images/cgen/logo-white-small.png'

const HomeNavBar = (): JSX.Element => {
  const [tab, setTab] = useState('home')
  const [stickyNav, setStickyNav] = useState(false)
  const targetIds = ['home', 'about', 'services', 'testimonials']

  const trackScrolling = (): void => {
    setStickyNav(
      ((document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop) >= 50,
    )

    let scrollSectionOffsetTop = 0
    targetIds.forEach((sectionId, index) => {
      const sectionElement = document.getElementById(sectionId)

      scrollSectionOffsetTop =
        sectionElement.offsetTop -
        document.querySelector("div[data-nav='list']").scrollHeight -
        50

      if (
        (window.pageYOffset >= scrollSectionOffsetTop &&
          window.pageYOffset <
            scrollSectionOffsetTop + sectionElement.scrollHeight) ||
        (window.innerHeight + window.pageYOffset >=
          document.body.scrollHeight &&
          index === targetIds.length - 1)
      ) {
        setTab(sectionId)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', trackScrolling)

    return (): void => {
      window.removeEventListener('scroll', trackScrolling)
    }
  }, [])

  const links = [
    {
      name: 'Home',
      to: 'home',
    },
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
        <Link
          className="navbar-brand logo"
          to="/"
          onClick={(): void => setTab('home')}
        >
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
              {links.map(link => (
                <li
                  key={link.to}
                  className={`nav-item ${tab === link.to ? 'active' : ''}`}
                >
                  <Link
                    className={`nav-link ${tab === link.to ? 'active' : ''}`}
                    duration={750}
                    offset={-50}
                    to={link.to}
                    smooth
                    spy
                  >
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

export default HomeNavBar
