"use client";

import { useEffect, useRef } from "react";
import BasicFace from "./basic-face";

export default function Companion({ onClick }: { onClick: () => void }) {
    const connected = false;
    const faceCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const beginSession = async () => {
            if (!connected) return;
        }
        beginSession();
    }, [connected])

    return (
        <div>
            <BasicFace canvasRef={faceCanvasRef!} onClick={onClick} color="red" />
        </div>
    )
}