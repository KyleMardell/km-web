import React from "react";
import styles from "./PageFooter.module.css";
import { socialLinks } from "../lib/social";

const iconPaths = {
    Facebook: "M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z",
    Google: "M21.805 10.023H12v3.955h5.608c-.242 1.274-.975 2.354-2.077 3.077v2.556h3.365c1.97-1.814 3.104-4.486 3.104-7.656 0-.67-.06-1.315-.195-1.932zM12 22c2.7 0 4.964-.895 6.618-2.423l-3.365-2.556c-.93.623-2.12.998-3.253.998-2.604 0-4.815-1.758-5.604-4.126H2.924v2.637C4.568 19.79 8.014 22 12 22zM6.396 13.893A6.004 6.004 0 0 1 6.082 12c0-.658.113-1.295.314-1.893V7.47H2.924A9.99 9.99 0 0 0 2 12c0 1.615.386 3.143.924 4.53l3.472-2.637zM12 5.981c1.47 0 2.788.505 3.824 1.496l2.866-2.865C16.96 3 14.7 2 12 2 8.014 2 4.568 4.21 2.924 7.47l3.472 2.637C7.185 7.739 9.396 5.981 12 5.981z",
};

const PageFooter = () => {
    return (
        <footer className={`text-center py-4 ${styles.PageFooter}`}>
            <p className="m-0">- Kyle Mardell -</p>
            <div className={styles.socialLinks}>
                {socialLinks.map(({ name, label, url }) => (
                    <a key={name} href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
                            <path d={iconPaths[name]} />
                        </svg>
                        <span>{name}</span>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default PageFooter;
