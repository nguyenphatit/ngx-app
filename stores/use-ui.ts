import { create } from "zustand";

export const useUI = create<{
    showUserConfig: boolean;
    setShowUserConfig: (show: boolean) => void;
    showAgentEdit: boolean;
    setShowAgentEdit: (show: boolean) => void;
}>(set => ({
    showUserConfig: true,
    setShowUserConfig: (show: boolean) => set({ showUserConfig: show }),
    showAgentEdit: false,
    setShowAgentEdit: (show: boolean) => set({ showAgentEdit: show }),
}));