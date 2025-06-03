"use client";

import { GEMINI_API_KEY } from "@/common/constants";
import { useGenAI } from "@/hooks/user-genai";
import { useEffect, useState } from "react";
import { Modality } from "@google/genai";
import { createSystemInstructions } from "@/lib/prompts";
import { useAgentStore } from "@/stores/agent-store";
import { Mic, MicOff } from "lucide-react";
import { useUserStore } from "@/stores/user-store";
import Companion from "./companion";
import { AudioRecorder } from "@/lib/audio-recorder";

export default function ChatterMain() {
    const { client, setConfig, connected, connect, disconnect } = useGenAI({ apiKey: GEMINI_API_KEY! });
    const user = useUserStore();
    const { current } = useAgentStore();
    const [muted, setMuted] = useState(false);
    const [audioRecorder] = useState(() => new AudioRecorder());

    useEffect(() => {
        setConfig({
            responseModalities: [Modality.AUDIO],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: current.voice }
                }
            },
            systemInstruction: {
                parts: [
                    {
                        text: createSystemInstructions(current, user)
                    }
                ]
            }
        })
    }, [setConfig, user, current]);

    useEffect(() => {
        const beginSession = async () => {
            if (!connected) return;
            client.send(
                {
                    text: 'Greet the user and introduce yourself and your role.',
                },
                true
            );
        };
        beginSession();
    }, [client, connected]);

    // useEffect(() => {
    //     const onData = (base64: string) => {
    //         client.sendRealtimeInput([
    //             {
    //                 mimeType: 'audio/pcm;rate=16000',
    //                 data: base64,
    //             },
    //         ]);
    //     }

    //     if (connected && !muted && audioRecorder) {
    //         audioRecorder.on('data', onData).start();
    //     } else {
    //         audioRecorder?.stop();
    //     }

    //     return () => {
    //         audioRecorder.off('data', onData);
    //     }
    // }, [connected, muted, audioRecorder]);

    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-2xl font-bold mb-4">Chatter Component</h1>
            <p className="text-gray-700">This is a placeholder for the Chatter component.</p>
            <Companion onClick={connected ? disconnect : connect} />

            <button onClick={connect}>Connect</button>
            <button onClick={disconnect}>Disconnect</button>

            <button onClick={() => setMuted(!muted)} className={connected ? "text-green-500" : "text-red-500"}>
                {!muted ? (
                    <Mic />
                ) : (
                    <MicOff />
                )}
            </button>
        </div>
    );
}