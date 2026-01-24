"use client";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import AOSWrapper from "./aos/AOSWrapper";
import HeroSection from "./components/HeroSection";
import FontWaveAnim from "./animations/FontWaveAnim";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import pic1 from "../../public/images/laptopweb.jpg";
import pic2 from "../../public/images/workstations.jpg";

export default function Home() {
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
        <AOSWrapper>
            <Container>
                <HeroSection />
                <Row className={`${styles.firstSection} text-center`}>
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

                <Row className={styles.subSectionTransparent}>
                    <Col className={`${styles.ThinBorder}`}>
                        <div data-aos="fade-right">
                            <p>
                                <strong>I help businesses get online</strong>{" "}
                                (or level up what they already have) with
                                websites designed around who they are and what
                                they need.
                            </p>
                        </div>
                        <div data-aos="fade-left">
                            <p className={`text-end my-5`}>
                                Whether that's something clean and
                                straightforward or something more modern and
                                expressive,{" "}
                                <strong>
                                    I'll build a site that fits your business,
                                </strong>{" "}
                                and handle everything technical along the way.
                            </p>
                        </div>
                        <div data-aos="fade-up">
                            <p className={`text-center`}>
                                <strong>
                                    Custom websites - Designed to look right,
                                    work properly, and grow with you.
                                </strong>
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.subSectionTransparentSmall}>
                    <Col className="text-center">
                        <Link href="/" className={styles.CtaButton}>
                            <strong>Get In Touch</strong>
                        </Link>
                    </Col>
                </Row>

                <Row className={`${styles.subSectionBlueTop} py-5`}>
                    <Col>
                        <Row>
                            <Col>
                                <h2 className="text-center my-5">What I Do</h2>
                                <Row className="px-2 px-md-5">
                                    <Col xs={10}>
                                        <p
                                            className={`${styles.ThinBorderSecond}`}
                                            data-aos="flip-left">
                                            I design and build custom websites,
                                            handling the full process from start
                                            to finish.
                                        </p>
                                    </Col>
                                    <Col xs={2}></Col>
                                </Row>
                                <Row className="px-2 my-4 px-md-5">
                                    <Col xs={2}></Col>
                                    <Col xs={10}>
                                        <p
                                            className={`${styles.ThinBorderSecond}`}
                                            data-aos="flip-right">
                                            A lot of business owners know they
                                            need a website but aren't sure where
                                            to start, what they actually need,
                                            or how any of it works.
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="px-2 px-md-5">
                                    <Col xs={10}>
                                        <p
                                            className={`${styles.ThinBorderSecond}`}
                                            data-aos="flip-left">
                                            That's where I come in. I take care
                                            of the setup, hosting, deployment,
                                            and ongoing support, so you can
                                            focus on running your business.
                                        </p>
                                    </Col>
                                    <Col xs={2}></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="my-5 py-5">
                            <Col>
                                <Image
                                    src={pic1}
                                    alt="A laptop with a website on it"
                                    className={styles.inlineImage}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={`${styles.subSectionPurpleMid}`}>
                    <Col className="px-3 px-md-5">
                        <p className="my-5 text-center">
                            <strong>
                                Every site I build is designed specifically for
                                the business.
                            </strong>
                        </p>
                        <ul>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Fully responsive</strong> and works
                                properly on phones, tablets, and desktops
                            </li>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Built with performance</strong> and
                                search visibility in mind
                            </li>
                            <li data-aos="fade-left">
                                <strong>Designed to last</strong>, with room to
                                grow with your business
                            </li>
                        </ul>
                        <p className="my-5" data-aos="zoom-in-up">
                            The goal isn't just to “have a website” — it's to
                            have one that feels right for your business and
                            works for the people using it.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.subSectionBlueBottom}>
                    <Col>
                        <Row>
                            <Col className="px-3 px-md-5">
                                <h2 className="text-center my-5">
                                    Who I Work With
                                </h2>
                                <p className="my-5">
                                    I mainly work with small and local
                                    businesses, including:
                                </p>
                                <ul>
                                    <li className="mb-3" data-aos="fade-left">
                                        <strong>Tradespeople</strong>
                                    </li>
                                    <li className="mb-3" data-aos="fade-left">
                                        <strong>
                                            Cafés and independent shops
                                        </strong>
                                    </li>
                                    <li className="mb-3" data-aos="fade-left">
                                        <strong>
                                            Community groups and villages
                                        </strong>
                                    </li>
                                    <li className="mb-3" data-aos="fade-left">
                                        <strong>
                                            Businesses with no website,
                                        </strong>{" "}
                                        or one that no longer reflects them
                                    </li>
                                </ul>
                                <p className="my-5" data-aos="zoom-in-up">
                                    That said, the approach is always the same,
                                    <strong>
                                        {" "}
                                        understand the business first
                                    </strong>
                                    , then design something that fits.{" "}
                                    <strong>
                                        No one-size-fits-all solutions.
                                    </strong>
                                </p>
                            </Col>
                        </Row>
                        <Row className="my-5 py-5">
                            <Col>
                                <Image
                                    src={pic2}
                                    alt="A laptop at a workstation"
                                    className={styles.inlineImage}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={styles.subSectionTransparent}>
                    <Col className="px-3 px-md-5">
                        <h2 className="text-center my-5">Example Websites</h2>
                        <p>
                            Below are some example websites that show the kind
                            of work I do and the range of businesses I build
                            for.
                        </p>
                        <p>Each project starts with understanding:</p>
                        <ul>
                            <li>What the business does</li>
                            <li>Who the website is for</li>
                            <li>
                                What visitors should feel and do when they land
                                on it
                            </li>
                        </ul>
                        <p>
                            From there, the design, layout, and features are
                            shaped around that — whether the site needs to feel
                            clean and professional, modern and bold, or
                            somewhere in between.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.subSectionBlueTop}>
                    <h2 className="text-center my-5">About Me</h2>
                    <Col className={`${styles.ThinBorder}`}>
                        <p className="m-1" data-aos="zoom-in-right">
                            I started doing this because I wanted to help local
                            businesses build better online presences.
                        </p>
                        <p className="m-1 text-end" data-aos="zoom-in-left">
                            I've seen plenty of businesses with websites that
                            don't really represent them or no website at all,
                            and thought, this could be so much better. Not just
                            visually, but in how it works and how people
                            experience it.
                        </p>
                        <p className="m-1" data-aos="zoom-in-right">
                            Good websites today need to be intuitive, easy to
                            navigate, and suited to the type of business they
                            represent. Some businesses benefit from clean,
                            information-focused designs. Others suit a more
                            modern, animated, or expressive approach. I enjoy
                            working across that spectrum and choosing what
                            actually makes sense for each project.
                        </p>
                        <p className="m-1 text-center" data-aos="zoom-in-left">
                            I want local businesses to have a website they feel
                            confident sharing and a local person they can trust
                            to build and support it.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.subSectionPurpleBottom}>
                    <Col className="py-5 px-3 px-md-5">
                        <h2 className="text-center my-5">How It Works</h2>
                        <p className="my-5">
                            <strong>
                                I keep the process clear and collaborative,
                                without over complicating things.
                            </strong>
                        </p>
                        <ol>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Initial chat & planning</strong> <br />
                                We talk through your business, your goals, and
                                what the website needs to do. I'll then provide
                                a clear quote.
                            </li>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Content & design direction</strong>{" "}
                                <br />
                                You'll get a Google Drive folder to upload
                                logos, images, and content. You can choose
                                colours and fonts, or I can suggest options that
                                fit your brand.
                            </li>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Design & review</strong> <br />I design
                                the homepage first so we can lock in the look
                                and feel before building the rest of the site.
                            </li>
                            <li className="mb-3" data-aos="fade-left">
                                <strong>Build, refine & launch</strong> <br />
                                Once everything's approved, I build the full
                                site, make final tweaks, and deploy it. I also
                                handle hosting, domains, and ongoing support.
                            </li>
                        </ol>
                        <p className="my-5">
                            <strong>You're involved where it matters</strong>,
                            but you're never expected to deal with the technical
                            side.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.subSectionTransparent}>
                    <Col
                        className={`${styles.ThinBorder}`}
                        data-aos="flip-down">
                        <p>
                            <strong>
                                If you're thinking about getting a website
                            </strong>
                            , improving the one you already have or just want
                            someone who'll explain things clearly and build
                            something that actually suits your business,{" "}
                            <strong>I'd be happy to chat</strong>
                        </p>
                        <p className="text-end mt-4">
                            <strong>No pressure, no hard sell</strong>, just a
                            conversation about what you need and what would work
                            best for your business.
                        </p>
                    </Col>
                </Row>
            </Container>
        </AOSWrapper>
    );
}
