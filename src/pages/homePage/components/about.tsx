import React from 'react'
import {Row, Col} from 'reactstrap'

import aboutImg from '../../../assets/images/cgen/coding-with-coffee.jpg'

const About = (): JSX.Element => {
  const list = [
    {
      icon: 'mdi mdi-octagram-outline',
      title: 'Honesty',
      content:
        'A first century core value includes honesty, and we guarantee that we will provide an honest interaction with you throughout your project',
    },
    {
      icon: 'mdi mdi-glasses',
      title: 'Transparency',
      content:
        'We give you the transparency you deserve as a client. We give you daily or every other day updates on the status of your project',
    },
    {
      icon: 'mdi mdi-truck-fast-outline',
      title: 'Deliverability',
      content:
        'We strive to deliver your project in the most timely fashion. The complexity of your project is always a factor, but our goal is to deliver quick',
    },
  ]

  return (
    <section className="section bg-about bg-light-about bg-light" id="about">
      <div className="container">
        <Row>
          <Col lg="4">
            <div className="title-heading mb-5">
              <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                About Us
              </h3>

              <div className="title-border-simple position-relative" />
            </div>
          </Col>
        </Row>

        <Row>
          {list.map((about, index) => {
            return (
              <Col key={index} data-trigger={true} lg="4">
                <div className="about-box about-light text-center p-3">
                  <div className="about-icon mb-4">
                    <i className={about.icon} />
                  </div>

                  <h4 className="font-weight-light">
                    <span className="text-dark">{about.title}</span>
                  </h4>

                  <p className="text-muted f-14">{about.content}</p>
                </div>
              </Col>
            )
          })}
        </Row>

        <Row className="align-items-center mt-5">
          <Col md="6">
            <div className="about-desc">
              <h3 className="text-dark mb-3 font-weight-light">
                About our company
              </h3>

              <p className="text-muted f-15">
                Our story is one of growth and determination to be a company
                that is straight and fair with their clients - to give everyone
                an opportunity to succeed at their dreams and to help them get
                there
              </p>

              {/* <div className="about-by">
                <p className="font-weight-light mb-0">
                  <Link className="text-dark" to="/about-us">
                    <i className="mdi mdi-circle-medium text-custom mr-2" />
                    Learn More <span className="text-custom">About Us</span>
                  </Link>
                </p>
              </div> */}
            </div>
          </Col>

          <Col md="6">
            <div className="about-img light-img position-relative p-4">
              <img
                alt=""
                className="img-fluid mx-auto d-block"
                src={aboutImg}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default About
