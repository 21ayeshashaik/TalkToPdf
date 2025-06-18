import { create } from 'zustand';

type NewChatState = {
  showNewChat: boolean;
  openNewChat: () => void;
  closeNewChat: () => void;
};

export const useNewChatStore = create<NewChatState>((set) => ({
  showNewChat: false,
  openNewChat: () => set({ showNewChat: true }),
  closeNewChat: () => set({ showNewChat: false }),
}));