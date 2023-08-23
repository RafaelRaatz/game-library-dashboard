import { create } from 'zustand';

interface IStore {
  consoles: string;
  updateGame: (newGame: string) => void;
  theme: string;
  updateTheme: (newTheme: string) => void;
  origin: string;
  updateOrigin: (newOrigin: string) => void;
  GamesLenght: any[];
  updateLenght: (newOrigin: any[]) => void;
}

export const useGameStore = create<IStore>(set => ({
  consoles: '',
  updateGame: (newGame: string) => {
    set({ consoles: newGame });
  },
  theme: 'light',
  updateTheme: (newTheme: string) => {
    set({ theme: newTheme });
  },
  origin: '',
  updateOrigin: (newOrigin: string) => {
    set({ origin: newOrigin });
  },
  GamesLenght: [],
  updateLenght: (newLenght: any[]) => {
    set({ GamesLenght: newLenght });
  },
}));
