"use client";

import { RefObject, use, useEffect, useState } from "react";
import { renderBasicFace } from "./render-basic-face";

interface BasicFaceProps {
    canvasRef: RefObject<HTMLCanvasElement | null>;
    radius?: number;
    color?: string;
    onClick?: () => void;
}

export default function BasicFace({ canvasRef, radius = 250, color, onClick }: BasicFaceProps) {
    const [isClient, setIsClient] = useState(false);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        function calculateScale() {
            setScale(Math.min(window.innerWidth, window.innerHeight) / 1000);
        }

        window.addEventListener('resize', calculateScale);
        calculateScale();

        return () => {
            window.removeEventListener('resize', calculateScale);
        };
    }, []);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        const ctx = canvasRef.current?.getContext("2d");

        if (!ctx) {
            console.error("Canvas context is not available.");
            return;
        }

        renderBasicFace({ ctx, color });

    }, [canvasRef, radius, color, scale]);

    if (!isClient) {
        return null; // Prevent rendering on the server side
    }

    return (
        <canvas
            onClick={onClick}
            ref={canvasRef}
            width={radius * 2 * scale}
            height={radius * 2 * scale}
            style={{
                display: "block",
                borderRadius: "50%",
            }}
        />
    );
}