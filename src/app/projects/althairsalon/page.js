"use client";

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AltHairNav from "./AltHairNav";

const AltHairPage = () => {
    return (
        <Container>
            <AltHairNav />
            <Row>
                <Col>
                    <Row>
                        <Col
                            xs={4}
                            className="d-flex align-items-center justify-content-center">
                            <h1>Alt Hair</h1>
                        </Col>
                        <Col xs={8}>
                            <h2>
                                Specialist Colour & Hair Extensions in Eccles,
                                Manchester.
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Image here</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h2>Welcome to Alt Hair</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Alt Hair is a specialist hair salon based in
                                Eccles, focusing on expert colouring and high
                                quality hair extensions. With over 15 years of
                                experience, every appointment is tailored to
                                you, your hair, and your lifestyle.
                            </p>
                            <p>
                                I work with trusted brands including Beauty
                                Works and Sway Hair Extensions to deliver long
                                lasting, professional results in a relaxed, one
                                to one setting.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                            <p>
                                A personalised salon experience with over 15
                                years of colour expertise. From bold
                                transformations to subtle, natural finishes.
                            </p>
                        </Col>
                        <Col
                            xs={4}
                            className="d-flex flex-column align-items-center justify-content-center">
                            <Button>Enquire Now</Button>
                            <small>Appointments by enquiry only</small>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h2>Specialist Hair Services</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={4} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Hair Colouring</Card.Title>
                                    <Card.Text>
                                        From full colour transformations to
                                        subtle refreshes, with a strong focus on
                                        hair health and long term results.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={4} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Hair Extensions</Card.Title>
                                    <Card.Text>
                                        Specialist application using Beauty
                                        Works and Sway extensions for natural
                                        looking length and volume.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} lg={4} className="mb-3">
                            <Card>
                                <Card.Body>
                                    <Card.Title>Cuts & Styling</Card.Title>
                                    <Card.Text>
                                        Modern cuts and styling to suit your
                                        face shape, hair type, and personal
                                        style.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button>View All Services</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h2>Why choose Alt Hair</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ul className="d-lg-flex flex-column align-items-center">
                                <li>Over 15 years of experience</li>
                                <li>
                                    Colour specialist and L'Oréal award nominee
                                </li>
                                <li>High quality professional products</li>
                                <li>One to one specialist appointments</li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>Gallery Here</Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button>View Gallery</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>Client Reviews</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Body>Review Here</Card.Body>
                                    <Card.Footer>By Name Here</Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <h2>Ready to book or have a question?</h2>
                            <p>
                                Get in touch to discuss your hair, ask a
                                question, or enquire about availability.
                            </p>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button>Contact Alt Hair</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AltHairPage;
