"use client";

import React, { useEffect, useState } from "react";

const FontWaveAnim = ({ text, base, active }) => {
    const letters = text.split("");
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % letters.length);
        }, 125);

        return () => clearInterval(interval);
    }, [letters.length]);

    const isActive = (index) => {
        const prev = (activeIndex - 1 + letters.length) % letters.length;
        const next = (activeIndex + 1) % letters.length;

        return index === prev || index === activeIndex || index === next;
    };

    return (
        <div
            style={{
                display: "inline-block",
                whiteSpace: "nowrap",
                lineHeight: active,
                height: 25,
            }}>
            {letters.map((char, index) => (
                <span
                    key={index}
                    style={{
                        display: "inline-block",
                        fontWeight: 600,
                        fontSize: isActive(index) ? active : base,
                        textShadow: "2px 2px 2px lightgray",
                        lineHeight: active,
                        verticalAlign: "middle",
                        transition: "font-size 0.25s ease",
                    }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </div>
    );
};

export default FontWaveAnim;
