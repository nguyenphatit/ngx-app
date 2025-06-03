import { create } from "zustand";

export type User = {
    name?: string;
    info?: string;
};

export const useUserStore = create<
    {
        setName: (name: string) => void;
        setInfo: (info: string) => void;
    } & User
>(set => ({
    name: '',
    info: '',
    setName: name => set({ name }),
    setInfo: info => set({ info }),
}));