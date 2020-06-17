import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'

import ServiceModal from './serviceModal'

interface ServiceType {
  title: string
  content: string
  icon: string
}

const Services = (): JSX.Element => {
  const [modal, setModal] = useState<ServiceType | undefined>(undefined)

  const list: ServiceType[] = [
    {
      icon: 'mdi mdi-web',
      title: 'Web Design',
      content:
        'You need a website for your company, church, or product. Let us build that for you. We utilize Wordpress to build static websites that are easy to keep up to date as you need.',
    },
    {
      icon: 'mdi mdi-palette',
      title: 'Graphics Design',
      content:
        'From company logos, to business cards, to prayer cards, to flyers, posters, shirts, knick-knacks, or anything you need designed, we have you covered! Let us design it for you!',
    },
    {
      icon: 'mdi mdi-cursor-default-click',
      title: 'Web App Development',
      content:
        'Do you have a great idea for a web or mobile application? We can build it for you! We use cutting edge web technologies to make your ideas become realities.',
    },
    {
      icon: 'mdi mdi-camera',
      title: 'Photography',
      content:
        "We have all the tools necessary to take the most beautiful pictures of you and yours on your special day. Weddings, family portraits, graduations, you name it and we'll snap it.",
    },
    {
      icon: 'mdi mdi-video',
      title: 'Videography',
      content:
        'Do you need a video for your event, presentation, or celebration? Using HD video cameras, we can grab the footage you want and put it together with graphics and music.',
    },
    {
      icon: 'mdi mdi-account-multiple',
      title: 'Consultation',
      content:
        "You just need some assistance with a technical task or problem that you're dealing with. We can help with that! Let us partner with you and help you get through.",
    },
  ]

  return (
    <section className="section" id="services">
      <div className="container">
        <Row>
          <Col lg="12">
            <div className="title-heading mb-5">
              <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                Our Services
              </h3>

              <div className="title-border-simple position-relative" />
            </div>
          </Col>
        </Row>

        <Row>
          {list.map((service, index) => {
            return (
              <Col key={index} data-trigger={true} lg="4" md="6">
                <div className="service-box rounded mt-4 p-4">
                  <div className="service-icon mb-3">
                    <i className={service.icon} />
                  </div>

                  <div className="services-desc">
                    <div className="service-title mb-2 position-relative">
                      <h5 className="font-weight-normal mb-3">
                        <div
                          className="text-dark"
                          css={{cursor: 'pointer'}}
                          onClick={(): void => setModal(service)}
                        >
                          {service.title}
                        </div>
                      </h5>
                    </div>

                    <p className="text-muted mb-3 f-14">{service.content}</p>

                    <p className="mb-0 text-uppercase f-13">
                      <div
                        className="text-dark"
                        css={{cursor: 'pointer'}}
                        onClick={(): void => setModal(service)}
                      >
                        learn more
                        <i className="mdi mdi-arrow-right ml-2" />
                      </div>
                    </p>
                  </div>
                </div>
              </Col>
            )
          })}
        </Row>
      </div>

      <ServiceModal
        isOpen={modal !== undefined}
        text={modal?.content || ''}
        title={modal?.title || ''}
        toggle={(): void => setModal(undefined)}
      />
    </section>
  )
}

export default Services
