import React from 'react'
import {graphql} from 'gatsby'

import HomePage from './homePage'
import MainLayout from '../layouts/main.layout'
import {Testimonial} from '../graphql/graphql.schema'

interface HomeData {
  siteData: {
    getTestimonials: {
      data: [Testimonial]
    }
  }
}

interface HomeProps {
  data: HomeData
}

export const query = graphql`
  query homeData {
    siteData {
      getTestimonials {
        data {
          _id
          name
          message
          title
          image
          organization
        }
      }
    }
  }
`

export const HomeContext = React.createContext<HomeData>(undefined)

const Home = ({data}: HomeProps): JSX.Element => {
  return (
    <MainLayout homePage>
      <HomeContext.Provider value={{...data}}>
        <HomePage />
      </HomeContext.Provider>
    </MainLayout>
  )
}

export default Home
