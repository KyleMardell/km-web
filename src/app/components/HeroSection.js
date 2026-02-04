"use client";

import styles from "./HeroSection.module.css";
import Image from "next/image";
import faceImg from "../../../public/images/face.webp";

export default function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src={faceImg}
                    alt="Background"
                    fill
                    sizes="(max-width: 560px) 100vw, (max-width: 1200px) 78vw, (max-width: 2220px) 59.5vw, 51.5vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    priority
                />
                <div className={styles.backgroundOverlay} />
            </div>
        </div>
    );
}
