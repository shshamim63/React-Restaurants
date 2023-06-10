import aboutImage from '/about.jpg';

import {Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
    return (
        <Container fluid>
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
