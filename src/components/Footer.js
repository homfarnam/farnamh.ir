import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer =()=>{
    return(
        <footer className='mt-5'>
            <Container fluid={true}>
                <Row className='border-top justify-content-between p-3'>
                    
                    <Col className='p-0 d-flex justify-content-center' md={3} sm={12}>
                        Farnam Homayounfar
                    </Col>

                    <Col className='p-0 d-flex justify-content-center' md={3}>
                        This site was made by ❤ Farnam .
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
