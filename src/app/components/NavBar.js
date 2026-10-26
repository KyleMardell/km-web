"use client";

import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const pathname = usePathname();
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
                    <picture>
                        <source type="image/webp" srcSet="/images/kmweb-logo-260.webp 2x, /images/kmweb-logo-390.webp 3x" />
                        <Image
                            src="/images/kmweb-logo-260.webp"
                            alt="KM Web logo"
                            width={130}
                            height={20}
                            loading="eager"
                        />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="basic-navbar-nav"
                    aria-expanded={expanded}
                    className={`${styles.DropIcon}`}
                />
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            href="/"
                            aria-current={pathname === "/" ? "page" : undefined}
                            onClick={() => setExpanded(false)}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/services/"
                            aria-current={pathname.startsWith("/services") ? "page" : undefined}
                            onClick={() => setExpanded(false)}>
                            Services
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            href="/contact/"
                            aria-current={pathname.startsWith("/contact") ? "page" : undefined}
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
