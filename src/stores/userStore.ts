import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '../types/userTypes';

interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
