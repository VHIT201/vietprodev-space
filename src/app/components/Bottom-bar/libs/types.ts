
import { GlobalStore } from "@/app/lib/types/global";

interface IconItem {
  icon: React.ComponentType<{ color: string; size: number }>;
  label: string;
  key: keyof GlobalStore;
  setter: keyof GlobalStore;
}

export type { IconItem };