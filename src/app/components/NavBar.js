"use client";

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    const { expanded, setExpanded, ref } = useClickOutsideToggle();

    return (
        <Navbar
            expanded={expanded}
            ref={ref}
            className={styles.NavBar}
            expand="lg"
            fixed="top">
            <Container>
                <Navbar.Brand className={styles.Brand} as={Link} href="/">
                    <Image
                        src="/images/kmweb-logo.webp"
                        alt="KM Web logo"
                        width={130}
                        height={20}
                        priority
                    />
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                    className={`${styles.DropIcon}`}
                />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            href="/"
                            onClick={() => setExpanded(false)}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/services"
                            onClick={() => setExpanded(false)}>
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/contact"
                            onClick={() => setExpanded(false)}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
