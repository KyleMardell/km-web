"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSWrapper({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    return children;
}
