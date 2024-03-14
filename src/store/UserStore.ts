import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserToken {
  success: boolean;
  token: string;
}

interface UserStore {
  loggedIn: boolean;
  setLoggedIn: (value: boolean) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      loggedIn: false,
      setLoggedIn: (value) => set({ loggedIn: value }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
