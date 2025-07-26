import { GlobalStore } from "@/app/lib/types/global";
import { create } from "zustand";

const useGlobalStore = create<GlobalStore>((set) => ({
  // Overlay states
  isLoading: false,
  isSnowOverlayVisible: true,
  isRainOverlayVisible: true,

  isThemeOverlayVisible: false,
  isAmbientOverlayVisible: false,
  isTrackOverlayVisible: false,
  isPomoOverlayVisible: false,
  isMusicOverlayVisible: false,
  isTodoOverlayVisible: false,
  isStatsOverlayVisible: false,
  isGuideOverlayVisible: false,
  backgroundImage: "/assets/img/bg1.jpg",

  // Overlay setters
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setSnowOverlayVisible: (v: boolean) => set({ isSnowOverlayVisible: v }),
  setRainOverlayVisible: (v: boolean) => set({ isRainOverlayVisible: v }),
  
  setThemeOverlayVisible: (v: boolean) => set({ isThemeOverlayVisible: v }),
  setAmbientOverlayVisible: (v: boolean) => set({ isAmbientOverlayVisible: v }),
  setTrackOverlayVisible: (v: boolean) => set({ isTrackOverlayVisible: v }),
  setPomoOverlayVisible: (v: boolean) => set({ isPomoOverlayVisible: v }),
  setMusicOverlayVisible: (v: boolean) => set({ isMusicOverlayVisible: v }),
  setTodoOverlayVisible: (v: boolean) => set({ isTodoOverlayVisible: v }),
  setStatsOverlayVisible: (v: boolean) => set({ isStatsOverlayVisible: v }),
  setGuideOverlayVisible: (v: boolean) => set({ isGuideOverlayVisible: v }),
  setBackgroundImage: (image: string) => set({ backgroundImage: image }),
}));

export default useGlobalStore;

