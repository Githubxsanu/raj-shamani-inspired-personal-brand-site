import { create } from 'zustand';

interface RajModeState {
  isRajMode: boolean;
  toggleRajMode: () => void;
}

export const useRajMode = create<RajModeState>((set) => ({
  isRajMode: false,
  toggleRajMode: () => set((state) => ({ isRajMode: !state.isRajMode })),
}));
