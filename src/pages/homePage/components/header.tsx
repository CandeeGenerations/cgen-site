import React from 'react'
import {Row, Col} from 'reactstrap'
import {Link as ScrollLink} from 'react-scroll'

import home from '../../../assets/images/cgen/db-4-cgen.svg'
import homr from '../../../assets/images/homr-2-bg-bottom.png'

const Header = (): JSX.Element => {
  return (
    <section className="section home-2-bg" id="home">
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="5">
                <div className="mt-40 home-2-content">
                  <h1 className="text-white font-weight-normal home-2-title display-4 mb-0">
                    Candee Generations
                  </h1>

                  <p className="text-white-70 mt-4 f-15 mb-0">
                    A 21st century technology company with 1st century core
                    values. We get your ideas built for others to enjoy!
                  </p>

                  <div className="mt-5">
                    <ScrollLink
                      className="btn btn-custom mr-4"
                      offset={-50}
                      to="about"
                      smooth
                      spy
                    >
                      Learn More
                    </ScrollLink>
                  </div>
                </div>
              </Col>

              <Col lg="7">
                <div className="mt-40 home-2-content position-relative">
                  <img
                    alt=""
                    className="img-fluid mx-auto d-block home-2-img mover-img"
                    data-trigger={true}
                    src={home}
                  />

                  <div className="home-2-bottom-img">
                    <img
                      alt=""
                      className="img-fluid d-block mx-auto"
                      src={homr}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
