"use client";

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./AltHairNav.module.css";

const AltHairNav = () => {
    return (
        <Navbar expand="lg" className={styles.AltNav}>
            <Container>
                <Navbar.Brand href="/projects/althairsalon" className={styles.BussName}>
                    Alt Hair Salon
                </Navbar.Brand>
                <Navbar.Toggle className={styles.navbarToggler} aria-controls="alt-hair-navbar" />
                <Navbar.Collapse id="alt-har-navbar" className="text-center">
                    <Nav className="me-auto">
                        <Nav.Link href="/projects/althairsalon" className={`${styles.PageLinkActive} `}>Home</Nav.Link>
                        <Nav.Link href="/projects/althairsalon" className={styles.PageLink}>About</Nav.Link>
                        <Nav.Link href="/projects/althairsalon" className={styles.PageLink}>
                            Services & Pricing
                        </Nav.Link>
                        <Nav.Link href="/projects/althairsalon" className={styles.PageLink}>
                            Gallery
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AltHairNav;
