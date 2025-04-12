import { create } from "zustand";

type SplashState = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useSplashStore = create<SplashState>((set) => ({
  isOpen: false, // start closed
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
