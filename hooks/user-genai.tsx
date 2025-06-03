"use client";

import { AudioStreamer } from '@/lib/audio-streamer';
import { GenAILiveClient } from '@/lib/genai-client';
import { audioContext } from '@/lib/utils';
import { LiveConnectConfig } from '@google/genai';
import { use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import VolMeterWorket from '@/lib/worklets/vol-meter';

export type UseGenAIResults = {
    client: any;
    setConfig: (config: LiveConnectConfig) => void;
    config: LiveConnectConfig;
    connect: () => Promise<void>;
    disconnect: () => void;
    connected: boolean;
    volume: number;
}

interface GenAIProps {
    apiKey: string;
    model?: string;
}

export function useGenAI({ apiKey, model }: GenAIProps): UseGenAIResults {
    const client = useMemo(() => new GenAILiveClient(apiKey, model), [apiKey, model]);

    const audioStreamerRef = useRef<AudioStreamer | null>(null);
    const [volume, setVolume] = useState(0);
    const [connected, setConnected] = useState(false);
    const [config, setConfig] = useState<LiveConnectConfig>({});

    useEffect(() => {
        if (!audioStreamerRef.current) {
            audioContext({ id: 'audio-out' }).then((audioCtx: AudioContext) => {
                audioStreamerRef.current = new AudioStreamer(audioCtx);
                audioStreamerRef.current.addWorklet<any>('vumeter', VolMeterWorket, (en: any) => {
                    setVolume(en.data.volume);
                }).catch(err => {
                    console.error('Error adding worklet:', err);
                })
            })
        }
    }, [audioStreamerRef]);

    useEffect(() => {
        const onOpen = () => {
            setConnected(true);
        };

        const onClose = () => {
            setConnected(false);
        };

        const stopAudioStreamer = () => {
            if (audioStreamerRef.current) {
                audioStreamerRef.current.stop();
            }
        };

        const onAudio = (data: ArrayBuffer) => {
            if (audioStreamerRef.current) {
                audioStreamerRef.current.addPCM16(new Uint8Array(data));
            }
        };

        client.on('open', onOpen);
        client.on('close', onClose);
        client.on('interrupted', stopAudioStreamer);
        client.on('audio', onAudio);

        return () => {
            // Clean up event listeners
            client.off('open', onOpen);
            client.off('close', onClose);
            client.off('interrupted', stopAudioStreamer);
            client.off('audio', onAudio);
        };
    }, [client]);

    const connect = useCallback(async () => {
        if (!config) {
            throw new Error('Config has not been set');
        }

        client.disconnect();
        await client.connect(config);
    }, [client, config]);

    const disconnect = useCallback(() => {
        client.disconnect();
        setConnected(false);
    }, [client]);

    return {
        client,
        config,
        setConfig,
        connect,
        connected,
        disconnect,
        volume,
    }
}