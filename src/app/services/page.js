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
                <Row className={`${styles.firstSection} my-5`}>
                    <Col>
                        <Row className="my-5 text-center">
                            <Col>
                                <h1>Services</h1>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5">
                            <Col
                                className={`mx-md-5 px-md-4 ${styles.ThinBorder}`}>
                                <p>
                                    I offer{" "}
                                    <strong>
                                        end-to-end website services for
                                        businesses
                                    </strong>{" "}
                                    and individuals, from design and build, to
                                    hosting and domains, through to ongoing
                                    updates and improvements.
                                </p>
                                <p className="my-1">
                                    Whether you know exactly what you want or
                                    just have a rough idea, I'll work with you
                                    to create a{" "}
                                    <strong>
                                        website that fits your business{" "}
                                    </strong>
                                    and feels right. I'm always happy to explain
                                    things clearly, but you're also welcome to
                                    be as involved in the details as you'd like.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionBlueTop}`}>
                    <Col className="px-md-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>Pricing</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5 text-center">
                            <Col>
                                <p data-aos="fade-up">
                                    <strong>
                                        I aim to keep pricing clear,
                                        straightforward, and flexible.
                                    </strong>
                                </p>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col
                                className={`${styles.ThinBorder} px-md-5`}
                                data-aos="flip-right">
                                <h4 className="my-2">
                                    Option 1: One-off Build + Monthly Hosting
                                </h4>
                                <ul>
                                    <li className="mb-2">
                                        <strong>
                                            {" "}
                                            One-off website build cost
                                        </strong>{" "}
                                        (£450+ based on size and features,
                                        average £900-1200)
                                    </li>
                                    <li className="mb-2">
                                        <strong>Domain setup</strong> (£30+ per
                                        year)
                                    </li>
                                    <li className="mb-2">
                                        <strong>
                                            Monthly hosting and management
                                        </strong>{" "}
                                        (£30 per month)
                                    </li>
                                </ul>
                                <p className="mb-2">
                                    <strong>
                                        As an example, a typical 5-page small
                                        business website might look like:
                                    </strong>
                                </p>
                                <ul>
                                    <li className="mb-2">
                                        <strong>£950</strong> one-off build cost
                                    </li>
                                    <li className="mb-2">
                                        <strong>£30</strong> domain for the year
                                    </li>
                                    <li className="m-0">
                                        <strong>£30</strong> per month hosting
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col
                                className={`${styles.ThinBorder} px-md-5`}
                                data-aos="flip-right">
                                <h4 className="my-3">
                                    Option 2: All-in Monthly Plan
                                </h4>
                                <p>
                                    I also offer an all-in monthly option at{" "}
                                    <strong>£85 per month</strong>
                                </p>
                                <p className="mb-2">
                                    <strong>This includes:</strong>
                                </p>
                                <ul>
                                    <li className="mb-2">
                                        <strong>Website build</strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>
                                            Domain set up and deployment
                                        </strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>Managed Hosting</strong>
                                    </li>
                                    <li className="mb-2">
                                        <strong>
                                            Ongoing maintenance and support
                                        </strong>
                                    </li>
                                </ul>
                                <p className="mt-4 mb-3">
                                    This works well for businesses that want to
                                    <strong>
                                        {" "}
                                        avoid a larger upfront payment
                                    </strong>
                                    . The first month is used for development,
                                    with a{" "}
                                    <strong>minimum 6 month contact</strong>,
                                    rolling monthly after.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionPurpleMid}`}>
                    <Col className="px-md-5 my-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>Website Design & Build</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col className={`${styles.ThinBorder} px-md-5`}>
                                <p className="my-4" data-aos="fade-right">
                                    Every website I build starts with
                                    <strong>
                                        {" "}
                                        understanding the business{" "}
                                    </strong>
                                    behind it.
                                </p>
                                <p className="mb-4" data-aos="fade-left">
                                    We'll talk through what you need,{" "}
                                    <strong>
                                        what the website should achieve
                                    </strong>
                                    , and how you'd like it to look and feel.
                                </p>
                                <p data-aos="fade-up">
                                    From there,{" "}
                                    <strong>
                                        I design and build a custom website that
                                        reflects your business,
                                    </strong>{" "}
                                    whether that's clean and professional,
                                    modern and expressive, or something in
                                    between.
                                </p>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col>
                                <p className="mb-2">
                                    <strong>
                                        Website builds typically include:
                                    </strong>
                                </p>
                                <ul>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>A custom design</strong>{" "}
                                        tailored to your business
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Mobile-friendly layouts</strong>{" "}
                                        that work across devices
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Performance and search visibility
                                            optimised
                                        </strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Easy navigation</strong> and
                                        clear structure
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionBlueBottom}`}>
                    <Col className="px-md-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>Hosting & Domains</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col>
                                <p>
                                    I provide{" "}
                                    <strong>fully managed hosting</strong> to
                                    keep things simple and reliable.
                                </p>
                                <ul>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Website hosting</strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Domain setup and management
                                        </strong>
                                    </li>
                                    <li className="mb-4" data-aos="fade-left">
                                        <strong>
                                            Deployment and ongoing maintenance
                                        </strong>
                                    </li>
                                </ul>
                                <p className="mb-4" data-aos="fade-up">
                                    <strong>
                                        If you already have a domain, that's no
                                        problem
                                    </strong>
                                    , I can work with it. If not, I'll help you
                                    get everything set up and connected
                                    properly.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col className="px-md-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>Ongoing Updates & Changes</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col>
                                <p>
                                    Once your website is live, I'm still here to
                                    help.
                                </p>
                                <p className="mb-2">
                                    <strong>
                                        I offer ongoing support for things like:
                                    </strong>
                                </p>
                                <ul>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Content updates</strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Text and image changes</strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Small layout tweaks</strong>
                                    </li>
                                    <li className="mb-4" data-aos="fade-left">
                                        <strong>
                                            General improvements as your
                                            business evolves
                                        </strong>
                                    </li>
                                </ul>
                                <p className="mb-4" data-aos="fade-up">
                                    <strong>
                                        Updates after the original deployed
                                        build are charged at £40 per hour.
                                    </strong>{" "}
                                    This keeps things flexible, meaning updates
                                    can be done on the fly. You're always
                                    welcome to ask for changes, we'll just
                                    agree what's involved before I get started.
                                </p>
                                <p>
                                    If you ever
                                    <strong>
                                        {" "}
                                        want to add new sections or features
                                    </strong>{" "}
                                    in the future,{" "}
                                    <strong>we can talk it through</strong> and
                                    plan the best way to do it.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionBlueTop}`}>
                    <Col className="px-md-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>Additional Features</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col>
                                <p>
                                    Some websites need a little more
                                    functionality.
                                </p>
                                <p className="mb-2">
                                    <strong>
                                        I can also help with things like:
                                    </strong>
                                </p>
                                <ul className="mb-2">
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>Blogs or news sections</strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Integrating booking systems
                                        </strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Custom layouts or page types
                                        </strong>
                                    </li>
                                    <li className="mb-4" data-aos="fade-left">
                                        <strong>
                                            Extra features tailored to your
                                            business
                                        </strong>
                                    </li>
                                </ul>
                                <p>
                                    <strong>
                                        These are priced separately depending on
                                        what's needed
                                    </strong>
                                    , and we'll always discuss it upfront so you
                                    know exactly what to expect.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionPurpleBottom}`}>
                    <Col className="px-md-5 my-5">
                        <Row className="text-center my-5">
                            <Col>
                                <h2>A Straightforward Process</h2>
                            </Col>
                        </Row>
                        <Row className="px-2 px-md-5 mb-5">
                            <Col>
                                <p className="mb-2">
                                    <strong>
                                        I keep the process relaxed and
                                        collaborative from start to finish.
                                    </strong>
                                </p>
                                <ul>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Talk through your ideas and goals
                                        </strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Agree on the structure and features
                                            of the site
                                        </strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Build and refine the design together
                                        </strong>
                                    </li>
                                    <li className="mb-2" data-aos="fade-left">
                                        <strong>
                                            Launch the site and keep it running
                                            smoothly
                                        </strong>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${styles.subSectionTransparent}`}>
                    <Col className="px-md-5">
                        <Row className="px-2 px-md-5 mb-5">
                            <Col className={`${styles.ThinBorder} px-md-5`}>
                                <p className="mt-3" data-aos="fade-right">
                                    <strong>
                                        If you're thinking about a website,
                                    </strong>{" "}
                                    whether it's your first one or a replacement
                                    for an existing site,{" "}
                                    <strong>I'd be happy to chat</strong> and
                                    see how I can help.
                                </p>
                                <p data-aos="fade-left">
                                    There's{" "}
                                    <strong>
                                        no pressure and no obligation, just a
                                        conversation about what you need
                                    </strong>{" "}
                                    and what would work best for your business.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </AOSWrapper>
    );
};

export default ServicesPage;
