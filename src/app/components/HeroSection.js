"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroSection.module.css";
import FontWaveAnim from "../animations/FontWaveAnim";
import { useEffect, useState } from "react";

export default function HeroSection() {

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            setIsDesktop(window.innerWidth >= 992);
        };

        checkSize(); // run once on mount
        window.addEventListener("resize", checkSize);

        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.backgroundInner} />
            </div>

            <Container className={styles.content}>
                <Row className="text-center">
                    <Col>
                        <h1 className={`${styles.HeroTitle}`}>
                            Freelance Web Developer
                        </h1>
                        <h2 className={`${styles.HeroName}`}>Kyle Mardell</h2>
                        <div>
                            <FontWaveAnim
                                text="Websites built around your business"
                                base={isDesktop ? "32px" : "17px"}
                                active={isDesktop ? "36px" : "21px"}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
