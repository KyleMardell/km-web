import { Container, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Kyle Mardell Web Studio</h1>
                            <p>Websites built around your business</p>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
