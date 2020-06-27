import React, {useEffect} from 'react'
import ReactGA from 'react-ga'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

import NavBar from '../components/structure/navbar'
import Footer from '../components/structure/footer'
import Preloader from '../components/structure/preloader'
import ScrollToTop from '../components/structure/scrollToTop'
import HomeNavBar from '../components/structure/navbar/homeNavBar'

import '../assets/scss/style.scss'

type Props = {
  children: React.ReactNode
  homePage?: boolean
}

const MainLayout = (props: Props): JSX.Element => {
  useEffect(() => {
    ReactGA.initialize('UA-162942275-1')
  }, [])

  return (
    <>
      <div id="top" />

      <Preloader />

      {props.homePage ? <HomeNavBar /> : <NavBar />}

      {props.children}

      <Footer homePage={props.homePage} />

      <ScrollToTop />
    </>
  )
}

export default MainLayout
