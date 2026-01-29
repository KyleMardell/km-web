"use client";

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AltHairNav from "./AltHairNav";
import Image from "next/image";

import styles from "./AltHairPage.module.css";

const AltHairPage = () => {
    return (
        <Container className={styles.AppWrapper}>
            <AltHairNav />
            <Row>
                <Col>
                    <Row className="my-4 px-3">
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
                        <Col>
                            <div className={styles.heroImageWrapper}>
                                <Image
                                    src="/images/althair/multistyles.webp"
                                    alt="4 girls with their backs turned, each with different heair styles"
                                    fill
                                    priority
                                    className={styles.HeroImage}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="my-5 px-3">
                <Col>
                    <Row className="text-center">
                        <Col>
                            <h2>Welcome to Alt Hair</h2>
                        </Col>
                    </Row>
                    <Row className="my-4">
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
                            <small>Appointments by enquiry</small>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-3">
                <Col>
                    <Row className="text-center my-4">
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
                    <Row className="my-3 text-center">
                        <Col>
                            <Button>View All Services</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-3">
                <Col>
                    <Row className="my-4 text-center">
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
            <Row className="px-3">
                <Col>
                    <Row className="my-4">
                        <Col>Gallery Here</Col>
                    </Row>
                    <Row className="my-4 text-center">
                        <Col>
                            <Button>View Gallery</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-3">
                <Col>
                    <Row className="my-4 text-center">
                        <Col>
                            <h2>Client Reviews</h2>
                        </Col>
                    </Row>
                    <Row className="px-md-5">
                        <Col className="px-md-5">
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
            <Row className="my-4 text-center">
                <Col>
                    <Row className="my-4">
                        <Col>
                            <h2>Where to find us</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18995.612077640737!2d-2.3906797758847036!3d53.47826196921552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487baec5592a86fd%3A0xdcd518c577c3553d!2sEccles%2C%20Manchester!5e0!3m2!1sen!2suk!4v1769644531978!5m2!1sen!2suk"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="px-3">
                <Col>
                    <Row className="my-4 text-center">
                        <Col>
                            <h2>Ready to book or have a question?</h2>
                            <p>
                                Get in touch to discuss your hair, ask a
                                question, or enquire about availability.
                            </p>
                        </Col>
                    </Row>
                    <Row className=" mb-5 text-center">
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
