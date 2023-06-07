import aboutImage from '../../public/about.jpg';

import {Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col  xs lg="2">
                    <h2 className="text-center">About Us</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={aboutImage} alt='About Image' className="about-img"/>
                </Col>
                <Col >
                    <p className="about-p text-center">The grillspot serves a wide selection of kabab item</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
