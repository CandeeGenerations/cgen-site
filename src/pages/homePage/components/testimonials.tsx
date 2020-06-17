import React, {useContext} from 'react'
import {Row, Col} from 'reactstrap'
import RBCarousel from 'react-bootstrap-carousel'

import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css'

import {HomeContext} from '../../'

import quoteImg from '../../../assets/images/quote-img.png'

const Testimonials = (): JSX.Element => {
  const homeContext = useContext(HomeContext)
  const {data: testimonials} = homeContext.siteData.getTestimonials

  return (
    <section className="section bg-clients" id="testimonials">
      <div className="bg-overlay" />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-heading mb-5">
              <h3 className="text-white mb-1 font-weight-light text-uppercase">
                Client Testimonials
              </h3>

              <div className="title-border-color position-relative" />
            </div>
          </div>
        </div>

        <Row>
          <Col span={12} style={{marginTop: 20}}>
            <RBCarousel
              pauseOnVisibility={true}
              slideshowSpeed={5000}
              version={4}
              autoplay
            >
              {testimonials.map(testimonial => (
                <div key={testimonial._id} className="item">
                  <div className="testi-content">
                    <div className="testi-box mt-4">
                      <h4 className="text-custom mb-3 font-weight-light">
                        {testimonial.organization}
                      </h4>

                      <p className="font-weight-light mb-0 f-15">
                        {testimonial.message}
                      </p>

                      <div className="quote-img">
                        <img alt="" className="img-fluid" src={quoteImg} />
                      </div>
                    </div>

                    <div className="mt-2">
                      <div className="float-right ml-3">
                        <div className="client-img">
                          <img
                            alt=""
                            className="img-fluid rounded-circle"
                            src={testimonial.image}
                          />
                        </div>
                      </div>

                      <div className="clients-name text-right pt-3">
                        <h6 className="text-white font-weight-normal position-relative f-17 mb-0">
                          <span className="after-border" /> {testimonial.name}
                        </h6>

                        <p className="text-white-70 f-13 mb-0">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </RBCarousel>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Testimonials
