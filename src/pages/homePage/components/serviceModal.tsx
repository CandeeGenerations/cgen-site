/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Row, Col, Modal, ModalBody} from 'reactstrap'
import {useEffect} from 'react'

interface ModalProps {
  title: string
  text: string
  isOpen: boolean
  toggle: () => void
}

const ServiceModal = (props: ModalProps): JSX.Element => {
  useEffect(() => {
    if (props.isOpen) {
      // eslint-disable-next-line no-undef
      hbspt.forms.create({
        portalId: '3336216',
        formId: 'b42338e3-5261-4301-8eda-0ce7218228aa',
        target: '#form',
      })
    }
  }, [props.isOpen])

  return (
    <Modal
      css={{borderRadius: '.25rem !important'}}
      isOpen={props.isOpen}
      size="lg"
      toggle={props.toggle}
    >
      <ModalBody css={{padding: '1.5rem !important'}}>
        <Row>
          <Col md={6}>
            <div className="title-heading mb-5">
              <h3 className="text-dark mb-1 font-weight-light text-uppercase">
                {props.title}
              </h3>

              <div className="title-border-simple position-relative" />
            </div>

            <p>{props.text}</p>
          </Col>

          <Col md={6}>
            <div
              className="service-title mb-2 position-relative"
              css={{marginBottom: '20px !important'}}
            >
              <h5 className="font-weight-normal mb-3 text-dark">
                Request more information
              </h5>
            </div>

            <div id="form" />
          </Col>
        </Row>

        <div
          className="mb-0 text-uppercase f-13 text-dark"
          css={{float: 'right', cursor: 'pointer', marginTop: 20}}
          onClick={props.toggle}
        >
          Close
        </div>
      </ModalBody>
    </Modal>
  )
}

export default ServiceModal
