"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function ContactAOS() {
    useEffect(() => {
        const root = document.querySelector("[data-contact-content]");
        if (!root) return;
        const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
        const elements = [...root.querySelectorAll("[data-aos]")];
        let initialised = false;

        const initialise = () => {
            delete root.dataset.aosReady;
            if (preference.matches) return;
            try {
                elements.forEach((element) => {
                    element.dataset.aosDuration = "800";
                    element.dataset.aosEasing = "ease-out-cubic";
                    element.dataset.aosOnce = "false";
                    element.dataset.aosMirror = "true";
                    if (!element.hasAttribute("data-aos-offset")) element.dataset.aosOffset = "80";
                });
                // Keep shared defaults unchanged; contact page settings live on its elements.
                if (!initialised) {
                    AOS.init({ duration: 1000, easing: "ease-in-out", once: false, mirror: false, offset: 120 });
                    initialised = true;
                }
                AOS.refreshHard();
                if (elements.every((element) => element.classList.contains("aos-init"))) {
                    root.dataset.aosReady = "true";
                }
            } catch {
                // Without the ready attribute, contact page CSS keeps everything visible.
                delete root.dataset.aosReady;
            }
        };

        initialise();
        preference.addEventListener("change", initialise);
        return () => {
            delete root.dataset.aosReady;
            preference.removeEventListener("change", initialise);
        };
    }, []);

    return null;
}

