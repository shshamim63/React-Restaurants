import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

import '../style/contact.scss'

const Contact = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col lg={6} className="mr-3 contact-section-container">
                    <h5 className="text-center contact-info-header">The Grillspot</h5>
                    <p className="text-center">Mohammadpur, Dhaka, Bangladesh</p>
                    <p className="text-center">E-mail: thegrillspot@gmail.com</p>
                    <p className="text-center">Phone: XXX-XXXX-XXXX</p>
                </Col>
                
                <Col lg={6} className="mt-sm-1 mt-md-1 mt-lg-0 contact-section-container">
                    <p className="text-center contact-info-header">Message us to share your thought</p>
                    <Form>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Email"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="Enter email"/>
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <Button className="mt-1 mb-1 float-end" variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
