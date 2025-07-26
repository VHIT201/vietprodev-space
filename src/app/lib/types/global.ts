interface GlobalStore {
  isLoading: boolean;
  isSnowOverlayVisible: boolean;
  isRainOverlayVisible: boolean;
  isThemeOverlayVisible: boolean;
  isAmbientOverlayVisible: boolean;
  isTrackOverlayVisible: boolean;
  isPomoOverlayVisible: boolean;
  isMusicOverlayVisible: boolean;
  isTodoOverlayVisible: boolean;
  isStatsOverlayVisible: boolean;
  isGuideOverlayVisible: boolean;

  backgroundImage?: string;
  
  setLoading: (loading: boolean) => void;
  setSnowOverlayVisible: (v: boolean) => void;
  setRainOverlayVisible: (v: boolean) => void;
  setThemeOverlayVisible: (v: boolean) => void;
  setAmbientOverlayVisible: (v: boolean) => void;
  setTrackOverlayVisible: (v: boolean) => void;
  setPomoOverlayVisible: (v: boolean) => void;
  setMusicOverlayVisible: (v: boolean) => void;
  setTodoOverlayVisible: (v: boolean) => void;
  setStatsOverlayVisible: (v: boolean) => void;
  setGuideOverlayVisible: (v: boolean) => void;
  setBackgroundImage: (image: string) => void;
}


export type { GlobalStore }