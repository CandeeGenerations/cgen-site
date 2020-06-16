import React from 'react'
import {Link} from '@reach/router'
import {Row, Col} from 'reactstrap'
import {Link as ScrollLink} from 'react-scroll'

export interface FooterProps {
  homePage?: boolean
}

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <>
      <section className="footer-bg">
        <div className="container">
          <Row>
            <Col lg="4">
              <div className="mb-5">
                <p className="text-uppercase text-dark footer-title mb-4">
                  About Us
                </p>

                <p className="text-muted f-14">
                  We are a 21st technology company with 1st century core values.
                  We get your ideas built for others to enjoy!
                </p>
              </div>
            </Col>

            <Col lg="8">
              <Row>
                <Col lg="4">
                  <div className="mb-5">
                    <p className="text-uppercase text-dark footer-title mb-4">
                      company
                    </p>
                    <ul className="list-unstyled footer-sub-menu">
                      <li className="f-14">
                        {props.homePage ? (
                          <ScrollLink
                            className="text-muted"
                            offset={-50}
                            to="services"
                            smooth
                          >
                            Services
                          </ScrollLink>
                        ) : (
                          <Link className="text-muted" to="/#services">
                            Services
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="mb-5">
                    <p className="text-uppercase text-dark footer-title mb-4">
                      legal
                    </p>

                    <ul className="list-unstyled footer-sub-menu">
                      <li className="f-14">
                        <Link className="text-muted" to="/privacy">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>

                <Col lg="4">
                  <div className="mb-5">
                    <p className="text-uppercase text-dark footer-title mb-4">
                      social
                    </p>

                    <a
                      href="https://facebook.com/candeegenerations"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="mdi mdi-36px mdi-facebook" />
                    </a>

                    <a
                      href="https://twitter.com/candeegen"
                      rel="noopener noreferrer"
                      style={{marginLeft: 10}}
                      target="_blank"
                    >
                      <i className="mdi mdi-36px mdi-twitter" />
                    </a>

                    <a
                      href="https://instagram.com/candeegenerations"
                      rel="noopener noreferrer"
                      style={{marginLeft: 10}}
                      target="_blank"
                    >
                      <i className="mdi mdi-36px mdi-instagram" />
                    </a>

                    <a
                      href="http://youtube.candeegenerations.com"
                      rel="noopener noreferrer"
                      style={{marginLeft: 10}}
                      target="_blank"
                    >
                      <i className="mdi mdi-36px mdi-youtube" />
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>

      <section className="footer-alt bg-dark pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="copyright text-white f-14 font-weight-light mb-0">
                2017 - {new Date().getFullYear()} &copy; Candee Generations
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
