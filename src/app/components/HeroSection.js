"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./HeroSection.module.css";
import FontWaveAnim from "../animations/FontWaveAnim";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.backgroundInner} />
            </div>

            <Container className={styles.content}>
                <Row className="text-center">
                    <Col>
                        <h1>Freelance Web Developer</h1>
                        <h2>Kyle Mardell</h2>
                        <FontWaveAnim
                            text="Websites built around your business"
                            base="18px"
                            active="22px"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}