import Link from "next/link";
import ServicesAOS from "./ServicesAOS";
import styles from "./ServicesPage.module.css";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
    title: "Website Design in Manchester",
    description:
        "Managed small business websites for £39/month, with design, hosting, essential maintenance and basic on page SEO. Based in Manchester, serving the UK.",
    path: "/services/",
});

const offerings = [
    { title: "Website design", description: "A custom design that reflects your business, with clear layouts and easy navigation. We start by talking about what you need and how you want the site to look and feel." },
    { title: "Website development", description: "A website that works across phones, tablets and desktops, built with performance in mind. The pages and functionality are agreed before the build." },
    { title: "Managed hosting", description: "I handle deployment and hosting, so you do not need to deal with the technical setup. Hosting is included in the monthly package." },
    { title: "Essential maintenance", description: "Essential security and technical maintenance are included as part of the managed service. Content changes and new features are charged separately." },
    { title: "Basic on page SEO", description: "Page titles, descriptions and a clear heading structure provide the basic setup to help search engines understand your website." },
];

const process = [
    { title: "Talk through your ideas", description: "We discuss your business, what the website needs to do and the look and feel you have in mind. You do not need to have everything worked out." },
    { title: "Agree the plan", description: "We agree on the pages and features, then gather your wording, logo and photographs. I explain what is needed and keep the technical side straightforward." },
    { title: "Design, build and review", description: "I design the homepage first so we can agree on the direction before building the rest of the site. We review and refine it together before launch." },
    { title: "Launch and keep it running", description: "Once the site is approved, I launch it and take care of hosting and essential maintenance. Further content changes can be agreed and priced separately." },
];

export default function ServicesPage() {
    return (
        <div className={styles.servicesPage} data-services-content>
            <section className={styles.intro} aria-labelledby="services-heading">
                <div className="container">
                    <div className={styles.introContent} data-aos="fade-right" data-aos-offset="0">
                        <p className={styles.eyebrow}>Websites for small &amp; local businesses</p>
                        <h1 id="services-heading">Web Design and Development in Manchester</h1>
                        <p>I&apos;m a freelance web developer based in Manchester. I design and build websites for small businesses, handling the setup, hosting and ongoing technical maintenance.</p>
                        <p>Whether you know exactly what you want or just have a rough idea, I&apos;ll work with you to create a website that fits your business. I&apos;m happy to explain things clearly, and you can be as involved in the details as you like.</p>
                        <div className={styles.actions}>
                            <Link href="#pricing" className="button-primary">View the website package <span aria-hidden="true">↓</span></Link>
                            <Link href="/contact/" className={styles.textLink}>Get in Touch <span aria-hidden="true">→</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`surface-dark ${styles.section}`} aria-labelledby="offer-heading">
                <div className="container">
                    <div className={styles.sectionHeading} data-aos="fade-up">
                        <p className={styles.eyebrow}>What I offer</p>
                        <h2 id="offer-heading">From design and build to keeping it online.</h2>
                        <p>Every website starts with understanding the business behind it. I handle the technical work so you can focus on running yours.</p>
                    </div>
                    <div className={styles.offerGrid}>
                        {offerings.map((offering, index) => (
                            <article className={styles.darkCard} key={offering.title} data-aos="fade-up" data-aos-delay={Math.min(index * 100, 300)}>
                                <h3>{offering.title}</h3>
                                <p>{offering.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className={styles.section} aria-labelledby="pricing-heading">
                <div className="container">
                    <div className={styles.sectionHeading} data-aos="fade-up">
                        <p className={styles.eyebrow}>Clear, straightforward pricing</p>
                        <h2 id="pricing-heading">One small business website package.</h2>
                        <p>Design, development and the essentials to keep your website running, for a monthly cost.</p>
                    </div>
                    <div className={styles.packageCard} data-aos="fade-up">
                        <div className={styles.packageSummary}>
                            <h3>Managed website package</h3>
                            <p className={styles.price}>&pound;39<span> / month</span></p>
                            <p className={styles.terms}>No upfront website build fee.<br /><strong>Minimum contract of 6 months.</strong></p>
                            <Link href="/contact/" className="button-primary">Discuss your website <span aria-hidden="true">→</span></Link>
                        </div>
                        <div className={styles.packageIncludes}>
                            <h3>What&apos;s included</h3>
                            <ul>
                                <li>Website design and development, up to 5 pages</li>
                                <li>Mobile friendly responsive design</li>
                                <li>Hosting</li>
                                <li>Essential security and technical maintenance</li>
                                <li>Basic on page SEO setup</li>
                            </ul>
                        </div>
                        <div className={styles.extras}>
                            <h3>Charged separately</h3>
                            <ul>
                                <li>Domain registration and renewal</li>
                                <li>Content changes after launch</li>
                                <li>Additional pages and functionality, quoted separately</li>
                                <li>Larger projects, individually quoted</li>
                            </ul>
                            <p>If you need a blog, booking integration or other extra features, we can discuss what is involved and agree a quote before work starts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`surface-dark ${styles.section}`} aria-labelledby="process-heading">
                <div className="container">
                    <div className={styles.sectionHeading} data-aos="fade-up">
                        <p className={styles.eyebrow}>How it works</p>
                        <h2 id="process-heading">A straightforward, collaborative process.</h2>
                        <p>You&apos;re involved where it matters, without being expected to deal with the technical side.</p>
                    </div>
                    <ol className={styles.processGrid}>
                        {process.map((step, index) => (
                            <li className={styles.darkCard} key={step.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <span className={styles.stepNumber} aria-hidden="true">0{index + 1}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className={`${styles.section} ${styles.contactSection}`} aria-labelledby="contact-heading">
                <div className="container" data-aos="fade-up">
                    <p className={styles.eyebrow}>Let&apos;s talk it through</p>
                    <h2 id="contact-heading">Thinking about a website?</h2>
                    <p>Whether it&apos;s your first website or a replacement for an existing one, I&apos;d be happy to chat about what you need and what would work for your business.</p>
                    <Link href="/contact/" className="button-primary">Get in Touch <span aria-hidden="true">→</span></Link>
                    <p className={styles.contactNote}>No pressure and no obligation.</p>
                </div>
            </section>
            <ServicesAOS />
        </div>
    );
}
