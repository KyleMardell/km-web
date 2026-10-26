import Link from "next/link";
import Image from "next/image";
import portrait from "../../public/images/face.webp";
import styles from "./page.module.css";
import HomeAOS from "./components/HomeAOS";
import { pageMetadata } from "./lib/seo";

export const metadata = pageMetadata({
    title: "Freelance Web Developer in Manchester",
    description:
        "I design and build custom websites for small and local businesses. Based in Manchester, I handle everything from setup and hosting to launch and support.",
    path: "/",
});

const projects = [
    {
        name: "Astra HR",
        type: "Business website",
        href: "https://astrahr.co.uk/",
        image: "/images/projects/astrahr.webp",
        alt: "Astra HR homepage introducing its HR consultancy services",
        width: 1200,
        height: 800,
        description: "Business website for an HR consultancy supporting businesses with employee relations and workplace matters.",
    },
    {
        name: "Manchester Vegan Guide",
        type: "Restaurant directory",
        href: "https://manchesterveganguide.com/",
        image: "/images/projects/mancveganscreen.webp",
        alt: "Manchester Vegan Guide restaurant directory homepage",
        width: 3810,
        height: 1903,
        description: "Vegan and vegetarian restaurant directory",
    },
    {
        name: "Movie Tracker App",
        type: "Personal project",
        href: "https://movietracker.kylemardell.me",
        image: "/images/projects/movietracker.webp",
        alt: "Movie Tracker app for finding where movies are streaming",
        width: 3808,
        height: 1896,
        description: "Find out where movies are streaming (personal project, sign up if you like)",
    },
];

const services = [
    { title: "Web Design", description: "A custom design tailored to your business, with clear layouts and easy navigation." },
    { title: "Development", description: "Mobile-friendly websites built with performance and search visibility in mind." },
    { title: "Hosting", description: "Website hosting and deployment, with domain setup and management available." },
    { title: "Technical Support", description: "Ongoing technical maintenance to keep your site running, with content updates available separately." },
];

export default function Home() {
    return (
        <div className={styles.home} data-home-content>
            <section className={styles.hero} aria-labelledby="home-heading">
                <div className={`container ${styles.heroGrid}`}>
                    <div data-aos="fade-right" data-aos-offset="0">
                        <p className={styles.eyebrow}>Independent web design &amp; development</p>
                        <h1 id="home-heading">Freelance Web Developer in Manchester</h1>
                        <p className={styles.heroIntro}>
                            Professional websites for small businesses, built to look good,
                            work smoothly and help you get enquiries.
                        </p>
                        <div className={styles.heroOffer}>
                            <p>Websites from <strong>£39<span>/month</span></strong></p>
                            <p className={styles.heroTerms}>No upfront website build fee</p>
                        </div>
                        <div className={styles.actions}>
                            <Link href="/contact/" className="button-primary">Get in Touch</Link>
                        </div>
                    </div>
                    <figure className={styles.portraitCard} data-aos="fade-left" data-aos-offset="0">
                        <div className={styles.portraitFrame}>
                            <Image src={portrait} alt="Kyle Mardell, freelance web developer" sizes="(max-width: 767px) 96px, 320px" priority fetchPriority="high" />
                        </div>
                        <figcaption>
                            <strong>Kyle Mardell</strong>
                            <span>Websites for small &amp; local businesses</span>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section id="projects" className={`surface-dark ${styles.portfolio}`} aria-labelledby="projects-heading">
                <div className="container">
                    <div className={styles.sectionHeading} data-aos="fade-up">
                        <div>
                            <h2 id="projects-heading">A few things I&apos;ve built.</h2>
                        </div>
                        <p>Business websites, useful directories and personal projects.</p>
                    </div>
                    <div className={styles.projectsGrid}>
                        {projects.map((project, index) => (
                            <article className={styles.projectCard} key={project.name} data-aos="fade-up" data-aos-delay={index * 100}>
                                <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <div className={styles.projectImage}>
                                        <picture>
                                        <source
                                            type="image/webp"
                                            srcSet={[360, 720, 1200].map((width) => `${project.image.replace(".webp", `-${width}.webp`)} ${width}w`).join(", ")}
                                            sizes="(max-width: 767px) calc(100vw - 42px), (max-width: 1099px) calc((100vw - 88px) / 2), 340px"
                                        />
                                        <Image src={project.image} alt={project.alt} width={project.width} height={project.height} sizes="(max-width: 767px) 100vw, (max-width: 1099px) 50vw, 33vw" />
                                        </picture>
                                    </div>
                                    <div className={styles.projectInfo}>
                                        <p className={styles.projectType}>{project.type}</p>
                                        <h3>{project.name}</h3>
                                        <p>{project.description}</p>
                                        <span className={styles.projectAction}>Visit website <span aria-hidden="true">↗</span><span className={styles.srOnly}> (opens in a new tab)</span></span>
                                    </div>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.section} aria-labelledby="services-heading">
                <div className="container">
                    <div className={styles.sectionHeading} data-aos="fade-up">
                        <div>
                            <p className={styles.eyebrow}>From first idea to launch</p>
                            <h2 id="services-heading">Small business website design, without the technical headache.</h2>
                        </div>
                        <p>I design and build custom websites, handling the setup, hosting, deployment and ongoing support.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <article className={styles.serviceCard} key={service.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>
                    <Link href="/services/" className={styles.textLink}>Explore my services <span aria-hidden="true">→</span></Link>
                </div>
            </section>

            <section className={`${styles.section} ${styles.packageSection}`} aria-labelledby="package-heading">
                <div className={`container ${styles.packageGrid}`}>
                    <div className={`surface-dark ${styles.packageIntro}`} data-aos="fade-up">
                        <p className={styles.eyebrow}>The small business website package</p>
                        <h2 id="package-heading">A proper website.<br />A manageable monthly cost.</h2>
                        <p>A straightforward way to get your business online, with the essentials taken care of.</p>
                        <p className={styles.price}>£39<span> / month</span></p>
                        <p className={styles.packageTerms}>No upfront website build fee.<br />Six month minimum commitment.</p>
                        <Link href="/contact/" className="button-primary">Let&apos;s talk about your website <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className={styles.packageDetails} data-aos="fade-left" data-aos-delay="100">
                        <h3>What&apos;s included</h3>
                        <ul className={styles.inclusions}>
                            <li>Up to five pages</li>
                            <li>Mobile friendly responsive design</li>
                            <li>Hosting included</li>
                            <li>Essential technical maintenance included</li>
                            <li>Basic on page SEO setup</li>
                        </ul>
                        <div className={styles.packageNotes}>
                            <p>Domain registration and renewal charged separately. Content changes charged separately.</p>
                            <p>Larger or more complex projects quoted individually.</p>
                        </div>
                        <Link href="/services/" className={styles.textLink}>More about my services <span aria-hidden="true">→</span></Link>
                    </div>
                </div>
            </section>

            <section className={styles.section} aria-labelledby="about-heading">
                <div className={`container ${styles.aboutGrid}`}>
                    <div className={styles.aboutIdentity} data-aos="fade-right">
                        <Image src={portrait} alt="Kyle Mardell" width={112} height={112} className={styles.aboutPortrait} />
                        <p className={styles.eyebrow}>A local, independent developer</p>
                        <h2 id="about-heading">Hi, I&apos;m Kyle.</h2>
                    </div>
                    <div className={styles.aboutCopy} data-aos="fade-left">
                        <p>I&apos;m a freelance web developer based in Eccles, Manchester. I enjoy building practical, good looking websites and helping small businesses get online. I work with businesses across the UK, with a focus on straightforward design, usability and SEO.</p>
                        <p>I mainly work with small and local businesses, including tradespeople, cafés, independent shops and community groups, whether they need their first website or a replacement for one that no longer reflects them.</p>
                        <p>I design the homepage first so we can agree on the look and feel before building the rest of the site. You&apos;re involved where it matters, but you&apos;re never expected to deal with the technical side.</p>
                        <p>I want local businesses to have a website they feel confident sharing and a local person they can trust to build and support it.</p>
                    </div>
                </div>
            </section>

            <section className={styles.contactSection} aria-labelledby="contact-heading">
                <div className={`container ${styles.contactInner}`} data-aos="fade-up">
                    <p className={styles.eyebrow}>Let&apos;s start with a conversation</p>
                    <h2 id="contact-heading">Thinking about a website?</h2>
                    <p>Whether it&apos;s your first website or a refresh of an existing one, I&apos;d be happy to chat about what you need.</p>
                    <Link href="/contact/" className="button-primary">Get in Touch <span aria-hidden="true">→</span></Link>
                    <p className={styles.contactNote}>No pressure, no hard sell.</p>
                </div>
            </section>
            <HomeAOS />
        </div>
    );
}
