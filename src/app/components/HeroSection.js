"use client";

import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.backgroundInner} />
            </div>
        </section>
    );
}
