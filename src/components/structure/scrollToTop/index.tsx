/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Link} from 'react-scroll'
import {useEffect, useState} from 'react'

const ScrollToTop = (): JSX.Element => {
  const [show, setShow] = useState(false)

  const trackScrolling = (): void => {
    setShow(
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

  return (
    <div
      css={{
        backgroundColor: '#005bea',
        color: '#f3f3f3',
        fontSize: 24,
        position: 'fixed',
        right: 25,
        bottom: 25,
        borderRadius: '50%',
        width: 35,
        height: 35,
        textAlign: 'center',
        cursor: 'pointer',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Link duration={750} to="top" smooth spy>
        <i className="mdi mdi-chevron-up" />
      </Link>
    </div>
  )
}

export default ScrollToTop
