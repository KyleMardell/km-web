"use client";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./AltHairNav.module.css";

const AltHairNav = () => {
    return (
        <Container fluid className={styles.AltNav}>
            <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/projects/althairsalon">
                    Alt Hair
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="alt-hair-navbar" />
                <Navbar.Collapse id="alt-har-navbar" className="text-center">
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
        </Container>
        
    );
};

export default AltHairNav;
