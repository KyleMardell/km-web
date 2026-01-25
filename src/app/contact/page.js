"use client";

import React, { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [requestCallback, setRequestCallback] = useState(false);
    const [validated, setValidated] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;
        setValidated(false);

        if (!name.trim()) formIsValid = false;
        if (phone && !/^\d+$/.test(phone)) formIsValid = false;
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            formIsValid = false;
        if (!email && !phone) formIsValid = false;
        if (requestCallback && !phone) formIsValid = false;

        if (!formIsValid) {
            setValidated(true);
            return;
        }

        const formData = {
            name,
            email,
            phone,
            message,
            requestCallback: requestCallback ? "Yes" : "No",
        };

        setSending(true);

        emailjs
            .send(
                "service_ctinitc",
                "template_alsk32e",
                formData,
                "AB1Q3v3G9VUxrcl5Y",
            )
            .then(
                (result) => {
                    console.log("Email sent:", result.text);
                    alert("Thank you! Your message has been sent.");
                    // Clear form
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                    setRequestCallback(false);
                    setValidated(false);
                    setSending(false);
                },
                (error) => {
                    console.error("Email error:", error.text);
                    alert(
                        "Sorry, there was an error sending your message. Please try again.",
                    );
                    setSending(false);
                },
            );
    };

    return (
        <Container>
            <Row className={`${styles.firstSection} my-5`}>
                <Col className="px-md-5">
                    <Row className="my-5 text-center">
                        <Col>
                            <h1>Contact</h1>
                        </Col>
                    </Row>
                    <Row className="px-2 px-md-5">
                        <Col
                            className={`mx-md-5 px-md-4  ${styles.ThinBorder}`}>
                            <p>
                                If you're thinking about a website, whether it's
                                your first one, a refresh, or just an idea you
                                want to talk through, feel free to get in touch.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className={`${styles.subSectionTransparent}`}>
                <Col className="px-md-5 text-center">
                    <p>Email: kmwebdevstudio@gmail.com</p>
                    <p>Phone/Text: 07766082304</p>
                </Col>
            </Row>

            <Row className={`${styles.subSectionTransparent}`}>
                <Col className="px-md-5">
                    <Row className="text-center my-5">
                        <Col>
                            <h2>Contact Form</h2>
                            <p>Get in touch or request a call back</p>
                        </Col>
                    </Row>
                    <Row className="px-2 px-md-5 mb-5">
                        <Col className="px-md-5">
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        required
                                        isInvalid={validated && !name.trim()}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Name is required
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        isInvalid={
                                            validated &&
                                            ((email &&
                                                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                                                    email,
                                                )) ||
                                                (!email && !phone) ||
                                                (!email &&
                                                    requestCallback &&
                                                    !phone))
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {!email && !phone
                                            ? "Please provide an email or phone number"
                                            : "Enter a valid email"}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formPhone">
                                    <Form.Label>
                                        Phone{" "}
                                        {requestCallback
                                            ? "(Required for callback)"
                                            : ""}
                                    </Form.Label>
                                    <Form.Control
                                        type="tel"
                                        placeholder="Enter phone number"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
                                        }
                                        isInvalid={
                                            validated &&
                                            ((phone && !/^\d+$/.test(phone)) ||
                                                (!phone && !email) ||
                                                (!phone && requestCallback))
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {!phone && requestCallback
                                            ? "Phone is required to request a call back"
                                            : !phone && !email
                                              ? "Please provide a phone or email"
                                              : "Phone must contain only numbers"}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formMessage">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Enter your message"
                                        value={message}
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <div className="d-flex justify-content-center">
                                    <Form.Group
                                    className="mb-3"
                                    controlId="formCallback">
                                    <Form.Check
                                        type="checkbox"
                                        label="Request a Call Back"
                                        checked={requestCallback}
                                        onChange={(e) =>
                                            setRequestCallback(e.target.checked)
                                        }
                                    />
                                </Form.Group>
                                </div>
                                
                                <div className="text-center my-5">
                                    <Button
                                    variant="primary"
                                    type="submit"
                                    disabled={sending}>
                                    {sending ? "Sending..." : "Submit"}
                                </Button>
                                </div>
                                
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
