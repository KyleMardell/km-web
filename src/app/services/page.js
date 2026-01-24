import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AOSWrapper from "../aos/AOSWrapper";
import HeroSection from "../components/HeroSection";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
    return (
        <AOSWrapper>
            <Container>
                <HeroSection />
                <Row className={`${styles.firstSection} text-center my-5`}>
                    <Col>
                        <h1>Web Services</h1>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <p>
                            I offer end-to-end website services for small
                            businesses and individuals — from design and build,
                            to hosting and domains, through to ongoing updates
                            and improvements.
                        </p>
                        <p>
                            Whether you know exactly what you want or just have
                            a rough idea, I'll work with you to create a website
                            that fits your business and feels right. I'm always
                            happy to explain things clearly, but you're also
                            welcome to be as involved in the details as you'd
                            like.
                        </p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>Pricing</h2>
                        <p>
                            I aim to keep pricing clear, straightforward, and
                            flexible.
                        </p>
                        <h4>Option 1: One-off Build + Monthly Hosting</h4>
                        <ul>
                            <li>
                                One-off website build cost (£450+ based on size
                                and features, average £900-1200)
                            </li>
                            <li>Domain setup (£30+ per year)</li>
                            <li>
                                Monthly hosting and management (£30+ per month)
                            </li>
                        </ul>
                        <p>
                            As an example, a typical 5-page small business
                            website might look like:
                        </p>
                        <ul>
                            <li>£950 one-off build cost</li>
                            <li>£30 domain for the year</li>
                            <li>£30 per month hosting</li>
                        </ul>
                        <h4>Option 2: All-in Monthly Plan</h4>
                        <p>
                            I also offer an all-in monthly option at £85 per
                            month
                        </p>
                        <p>This includes:</p>
                        <ul>
                            <li>Website build</li>
                            <li>Domain set up and deployment</li>
                            <li>Managed Hosting</li>
                            <li>Ongoing maintenance and support</li>
                        </ul>
                        <p>
                            This works well for businesses that want to avoid a
                            larger upfront payment. The first month is used for
                            development, with the site live for the remaining
                            period. Minimum 6 months, rolling monthly after.
                        </p>
                        <p>
                            We can talk through both options and choose what
                            makes the most sense for you.
                        </p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>Website Design & Build</h2>
                        <p>
                            Every website I build starts with understanding the
                            business behind it.
                        </p>
                        <p>
                            We'll talk through what you need, what the website
                            should achieve, and how you'd like it to look and
                            feel.
                        </p>
                        <p>
                            From there, I design and build a custom website that
                            reflects your business — whether that's clean and
                            professional, modern and expressive, or something in
                            between.
                        </p>
                        <p>Website builds typically include:</p>
                        <ul>
                            <li>A custom design tailored to your business</li>
                            <li>
                                Mobile-friendly layouts that work across devices
                            </li>
                            <li>
                                A solid foundation for performance and search
                                visibility
                            </li>
                            <li>Clear structure and easy navigation</li>
                        </ul>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>Hosting & Domains</h2>
                        <p>
                            I provide fully managed hosting to keep things
                            simple and reliable.
                        </p>
                        <p>This includes: </p>
                        <ul>
                            <li>Website hosting</li>
                            <li>Domain setup and management</li>
                            <li>Deployment and ongoing maintenance</li>
                        </ul>
                        <p>
                            If you already have a domain, that's no problem — I
                            can work with it. If not, I'll help you get
                            everything set up and connected properly.
                        </p>
                        <p>
                            Hosting is billed monthly, so costs stay predictable
                            and easy to manage.
                        </p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>Ongoing Updates & Changes</h2>
                        <p>
                            Once your website is live, I'm still here to help.
                        </p>
                        <p>I offer ongoing support for things like:</p>
                        <ul>
                            <li>Content updates</li>
                            <li>Text and image changes</li>
                            <li>Small layout tweaks</li>
                            <li>
                                General improvements as your business evolves
                            </li>
                        </ul>
                        <p>
                            Updates following the original deployed build are
                            charged at £40 per hour. This keeps things flexible,
                            meaning updates can be done on the fly. You're
                            always welcome to ask for changes — we'll just agree
                            what's involved before I get started.
                        </p>
                        <p>
                            If you ever want to add new sections or features in
                            the future, we can talk it through and plan the best
                            way to do it
                        </p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>Additional Features</h2>
                        <p>Some websites need a little more functionality.</p>
                        <p>I can also help with things like:</p>
                        <ul>
                            <li>Blogs or news sections</li>
                            <li>Integrating booking systems</li>
                            <li>Custom layouts or page types</li>
                            <li>Extra features tailored to your business</li>
                        </ul>
                        <p>
                            These are priced separately depending on what's
                            needed, and we'll always discuss it upfront so you
                            know exactly what to expect.
                        </p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <h2>A Straightforward Process</h2>
                        <p>
                            I keep the process relaxed and collaborative from
                            start to finish.
                        </p>
                        <p>We'll</p>
                        <ul>
                            <li>Talk through your ideas and goals</li>
                            <li>
                                Agree on the structure and features of the site
                            </li>
                            <li>Build and refine the design together</li>
                            <li>
                                Launch the site and keep it running smoothly
                            </li>
                        </ul>
                        <p></p>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col>
                        <p>
                            If you're thinking about a website, whether it's
                            your first one or a replacement for an existing site
                            , I'd be happy to chat and see how I can help.
                        </p>
                        <p>
                            There's no pressure and no obligation, just a
                            conversation about what you need and what would work
                            best for your business.
                        </p>
                    </Col>
                </Row>
            </Container>
        </AOSWrapper>
    );
};

export default ServicesPage;
