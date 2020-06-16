export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Query = {
  __typename?: 'Query'
  getTestimonials: Array<Testimonial>
}

export type Testimonial = {
  __typename?: 'Testimonial'
  _id: Scalars['String']
  title: Scalars['String']
  message: Scalars['String']
  name: Scalars['String']
  image: Scalars['String']
  organization: Scalars['String']
}
