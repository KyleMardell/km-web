"use client"

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {

    const { expanded, setExpanded, ref} = useClickOutsideToggle();

    return (
        <Navbar expanded={expanded} ref={ref} expand="lg" className="bg-body-tertiary" fixed="top">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="#services" onClick={() => setExpanded(false)}>Services</Nav.Link>
                        <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
