import { Container, Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import styles from "./PrivacyPolicyPage.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
    title: "Privacy Policy",
    description:
        "How KM Web collects, uses and protects the personal information you provide when making an enquiry, including your data rights and contact details.",
    path: "/privacy/",
});

export default function PrivacyPolicyPage() {
    return (
        <Container>
            <HeroSection />
            <Row className={`${styles.firstSection} my-5`}>
                <Col className="px-md-5">
                    <Row className="my-5 text-center">
                        <Col>
                            <h1>Privacy Policy</h1>
                        </Col>
                    </Row>

                    <Row className="px-2 px-md-5">
                        <Col className={`mx-md-5 px-md-4 ${styles.ThinBorder}`}>
                            <p>
                                <strong>
                                    This page explains what information I
                                    collect, why I collect it, and how it is
                                    used.
                                </strong>
                            </p>

                            <h2>What information I collect</h2>
                            <p>
                                When you use the contact form on this website, I
                                may collect the following information:
                            </p>
                            <ul>
                                <li>Your name</li>
                                <li>Your email address</li>
                                <li>Your phone number (if you provide it)</li>
                                <li>Your message</li>
                                <li>Whether you request a call back</li>
                            </ul>

                            <h2>Why I collect this information</h2>
                            <p>I only collect this information so I can:</p>
                            <ul>
                                <li>Reply to your enquiry</li>
                                <li>Contact you about your request</li>
                                <li>
                                    Discuss potential work or answer your
                                    questions
                                </li>
                            </ul>

                            <p>
                                I do not use your information for marketing
                                lists, and I do not send spam.
                            </p>

                            <h2>How your information is handled</h2>
                            <p>
                                When you submit the contact form, the details
                                you provide, including whether you request a
                                call back, are sent to EmailJS. EmailJS processes
                                these details to deliver your enquiry to me by
                                email so I can reply.
                            </p>
                            <p>
                                This means your information is shared with
                                EmailJS and the email service used to deliver
                                and receive your enquiry.
                            </p>

                            <h2>How long I keep your information</h2>
                            <p>
                                I only keep your information for as long as it
                                is needed to deal with your enquiry or any
                                follow up communication. Once it is no longer
                                needed, it is deleted.
                            </p>

                            <h2>Your rights</h2>
                            <p>You can ask me to:</p>
                            <ul>
                                <li>
                                    Tell you what information I have about you
                                </li>
                                <li>Correct your information</li>
                                <li>Delete your information</li>
                            </ul>

                            <p>
                                If you want to do this, just get in touch using
                                the contact details below.
                            </p>

                            <h2>Contact details</h2>
                            <p>
                                If you have any questions about this privacy
                                policy or how your data is handled, you can
                                contact me at:
                            </p>
                            <p>
                                <strong>Email:</strong> kyle@kmweb.co.uk
                            </p>

                            <p className={styles.lastUpdated}>
                                Last updated: {new Date().getFullYear()}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
