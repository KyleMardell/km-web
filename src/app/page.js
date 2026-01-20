import { Container, Row, Col } from "react-bootstrap";
import styles from "./page.module.css";
import FontWaveAnim from "./animations/FontWaveAnim";
import HeroSection from "./components/HeroSection";

export default function Home() {
    return (
        <>
            <HeroSection />

            <Container
                className="px-3"
                style={{ marginTop: "100vh", position: "relative", zIndex: 2 }}>
                <Row className="my-5">
                    <Col>
                        <p className={`my-3`}>
                            I help businesses get online (or level up what they
                            already have) with websites designed around who they
                            are and what they need.
                        </p>
                        <p className={`text-end my-4`}>
                            Whether that's something clean and straightforward
                            or something more modern and expressive, I'll build
                            a site that fits your business, and handle
                            everything technical along the way.
                        </p>
                        <p className={`text-center mt-4`}>
                            Custom websites - Designed to look right, work
                            properly, and grow with you.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center mb-4">What I Do</h2>
                        <p>
                            I design and build custom websites for small
                            businesses, handling the full process from start to
                            finish.
                        </p>
                        <p>
                            A lot of business owners know they need a website
                            but aren't sure where to start, what they actually
                            need, or how any of it works. That's where I come
                            in. I take care of the setup, hosting, deployment,
                            and ongoing support, so you can focus on running
                            your business.
                        </p>
                        <p>
                            Every site I build is: - Designed specifically for
                            the business, not pulled from a template
                        </p>
                        <ul>
                            <li>
                                Fully responsive and works properly on phones,
                                tablets, and desktops
                            </li>
                            <li>
                                Built with performance and search visibility in
                                mind
                            </li>
                            <li>
                                Easy to update, grow, and maintain over time
                            </li>
                        </ul>
                        <p>
                            The goal isn't just to “have a website” — it's to
                            have one that feels right for your business and
                            works for the people using it.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Who I Work With</h2>
                        <p>
                            I mainly work with small and local businesses,
                            including:
                        </p>
                        <ul>
                            <li>Tradespeople</li>
                            <li>Cafés and independent shops</li>
                            <li>Community groups and villages</li>
                            <li>
                                Businesses with no website, or one that no
                                longer reflects them
                            </li>
                        </ul>
                        <p>
                            That said, the approach is always the same:
                            understand the business first, then design something
                            that fits. No one-size-fits-all solutions.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Example Websites</h2>
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
                <Row>
                    <Col>
                        <h2>About Me</h2>
                        <p>
                            I started doing this because I wanted to help local
                            businesses build better online presences.
                        </p>
                        <p>
                            I've seen plenty of businesses with websites that
                            don't really represent them or no website at all,
                            and thought, this could be so much better. Not just
                            visually, but in how it works and how people
                            experience it.
                        </p>
                        <p>
                            Good websites today need to be intuitive, easy to
                            navigate, and suited to the type of business they
                            represent. Some businesses benefit from clean,
                            information-focused designs. Others suit a more
                            modern, animated, or expressive approach. I enjoy
                            working across that spectrum and choosing what
                            actually makes sense for each project.
                        </p>
                        <p>
                            I want local businesses to have a website they feel
                            confident sharing — and a local person they can
                            trust to build and support it.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>How It Works</h2>
                        <p>
                            I keep the process clear and collaborative, without
                            over complicating things.
                        </p>
                        <ol>
                            <li>
                                Initial chat & planning <br />
                                We talk through your business, your goals, and
                                what the website needs to do. I'll then provide
                                a clear quote.
                            </li>
                            <li>
                                Content & design direction <br />
                                You'll get a Google Drive folder to upload
                                logos, images, and content. You can choose
                                colours and fonts, or I can suggest options that
                                fit your brand.
                            </li>
                            <li>
                                Design & review <br />I design the homepage
                                first so we can lock in the look and feel before
                                building the rest of the site.
                            </li>
                            <li>
                                Build, refine & launch <br />
                                Once everything's approved, I build the full
                                site, make final tweaks, and deploy it. I also
                                handle hosting, domains, and ongoing support.
                            </li>
                        </ol>
                        <p>
                            You're involved where it matters, but you're never
                            expected to deal with the technical side.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <p>
                        If you're thinking about getting a website, improving
                        the one you already have or just want someone who'll
                        explain things clearly and build something that actually
                        suits your business, I'd be happy to chat
                    </p>
                    <p>
                        No pressure, no hard sell — just a conversation about
                        what you need and what would work best for your
                        business.
                    </p>
                </Row>
            </Container>
        </>
    );
}
