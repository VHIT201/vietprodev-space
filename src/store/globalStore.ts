import { create } from "zustand";

const useGlobalStore = create((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  snowMode: false,
  setSnowMode: (snowMode: boolean) => set({ snowMode }),
}));
export default useGlobalStore;