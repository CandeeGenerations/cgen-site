import React from 'react'
import {Helmet} from 'react-helmet'

import About from './components/about'
import Header from './components/header'
import Services from './components/services'
import Testimonials from './components/testimonials'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Helmet title="Candee Generations | A 21st century technology company with 1st century core values" />

      <Header />

      <About />

      <Services />

      <Testimonials />
    </>
  )
}

export default HomePage
