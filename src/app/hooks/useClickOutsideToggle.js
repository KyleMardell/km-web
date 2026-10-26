"use client";

import { useEffect, useState, useRef } from "react";

// When a user clicks outside the ref component, sets expanded to false
const useClickOutsideToggle = () => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                ref.current &&
                event.target instanceof HTMLElement &&
                !ref.current.contains(event.target)
            ) {
                setExpanded(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!expanded) return;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setExpanded(false);
                ref.current?.querySelector(".navbar-toggler")?.focus();
            }
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [expanded]);

    return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;
