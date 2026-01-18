import React from "react";
import styles from "./PageFooter.module.css";

const PageFooter = () => {
    return (
        <footer className={`text-center py-4 ${styles.PageFooter}`}>
            <p className="m-0">Created and Maintained by Kyle Mardell</p>
        </footer>
    );
};

export default PageFooter;
