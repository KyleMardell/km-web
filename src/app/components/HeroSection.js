"use client";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import faceImg from "../../../public/images/face.webp";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src={faceImg}
                    alt="Background"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
                <div className={styles.backgroundOverlay}></div>
            </div>
        </section>
    );
}
