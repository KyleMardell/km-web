"use client";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const AltHairNav = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/projects/althairsalon">
                    Alt Hair
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="alt-hair-navbar" />
                <Navbar.Collapse id="alt-har-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="/projects/althairsalon">Home</Nav.Link>
                        <Nav.Link href="/projects/althairsalon">About</Nav.Link>
                        <Nav.Link href="/projects/althairsalon">
                            Services & Pricing
                        </Nav.Link>
                        <Nav.Link href="/projects/althairsalon">
                            Gallery
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AltHairNav;
