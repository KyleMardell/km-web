import React from "react";
import styles from "./TechLogoScroller.module.css";

const logos = [
    "html-logo.webp",
    "css-logo.webp",
    "js-logo.webp",
    "react-logo.webp",
    "django-logo.webp",
    "bootstrap-logo.webp",
    "python-logo.webp",
    "googlesearch-logo.webp",
    "next-logo.webp",
];

const SCROLL_DURATION = 60;
const LOGO_HEIGHT = 60;

const TechLogoScroller = () => {
    const allLogos = [...logos, ...logos, ...logos];

    return (
        <div className={styles.TechWrapper}>
            <div
                className={styles.TechTrack}
                style={{
                    animationDuration: `${SCROLL_DURATION}s`,
                }}>
                {allLogos.map((logo, index) => (
                    <div className={styles.TechItem} key={index}>
                        <img
                            src={`/images/techlogos/${logo}`}
                            alt={logo.replace(".webp", "")}
                            style={{
                                height: `${LOGO_HEIGHT}px`,
                                width: "auto",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechLogoScroller;
