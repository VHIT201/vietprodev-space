import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useGlobalStore from "@/store/globalStore";
import bgImg from "@public/assets/img/index";

const ThemeBar = () => {
  const { isThemeOverlayVisible } = useGlobalStore();
  return (
    <Dialog
      defaultOpen={isThemeOverlayVisible}
      onOpenChange={(open) =>
        useGlobalStore.getState().setThemeOverlayVisible(open)
      }
    >
      <DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogHeader>
      <DialogContent>
        <DialogDescription className="text-lg text-gray-500">
          Choose a background theme for your application.
        </DialogDescription>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {Object.values(bgImg).map((img, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onClick={() => useGlobalStore.getState().setBackgroundImage(img)}
            >
              <img
                src={img}
                alt={`Theme ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  style={{ color: "white", textAlign: "center" }}
                  className="text-white font-bold text-xs "
                >
                  Choose background
                </span>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ThemeBar;
