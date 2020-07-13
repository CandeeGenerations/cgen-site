import React, {useEffect} from 'react'
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
  useEffect(() => {
    if (
      window.location.host === 'candeegenerations.com' ||
      window.location.href === 'http://www.candeegenerations.com/'
    ) {
      window.location.href = 'https://www.candeegenerations.com'
    }
  }, [])

  return (
    <MainLayout homePage>
      <HomeContext.Provider value={{...data}}>
        <HomePage />
      </HomeContext.Provider>
    </MainLayout>
  )
}

export default Home
