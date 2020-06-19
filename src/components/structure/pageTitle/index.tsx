/** @jsx jsx */
import {jsx} from '@emotion/core'
import {Row, Col} from 'reactstrap'

export interface PageTitleProps {
  children: React.ReactNode
}

const PageTitle = (props: PageTitleProps): JSX.Element => {
  return (
    <section
      className="section home-2-bg"
      css={{
        height: '30vh',
        '@media (max-width: 768px)': {height: '40vh', paddingTop: 150},
      }}
      id="home"
    >
      <div className="home-center">
        <div className="home-desc-center">
          <div className="container">
            <Row className="align-items-center">
              <Col lg="12">
                <h1 css={{color: 'white', textAlign: 'center'}}>
                  {props.children}
                </h1>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageTitle
