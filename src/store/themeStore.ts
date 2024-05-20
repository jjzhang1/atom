import create from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface VisibleState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toogleOpen: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  toggleTheme: () => set((state) => ({
    theme: state.theme === 'light' ? 'dark' : 'light',
  })),
}));

export const useDialogStore = create<VisibleState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toogleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));