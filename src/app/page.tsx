"use client";
import React, { useEffect, useState } from "react";
import { SnowOverlay } from "react-snow-overlay";
import BottomBar from "@components/Bottom-bar";
import ConnectBar from "@components/Connect-bar";
import useGlobalStore from "@/store/globalStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SoundAnimationsBar from "./components/Sound-Animations-bar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimationsBar from "./components/Animations-bar";
import ThemeBar from "./components/Theme-bar";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const {
    isSnowOverlayVisible,
    isAmbientOverlayVisible,
    isThemeOverlayVisible,
  } = useGlobalStore();

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: `url('${useGlobalStore.getState().backgroundImage}')`,
        backgroundSize: "cover",
      }}
    >
      {isSnowOverlayVisible && <SnowOverlay maxParticles={20} />}
      {
        // isRainOverlayVisible && <Rain/>
      }
      {isMobile ? (
        <div className="flex items-center justify-center min-h-screen w-full bg-black/80">
          <div className="text-white text-center text-lg font-semibold p-8 rounded-xl bg-black/70 shadow-lg">
            Trang web hiện đang thiết lập cho thiết bị di động và máy tính bảng.
            <br />
            Vui lòng truy cập bằng máy tính để bàn.
          </div>
        </div>
      ) : (
        <>
          <BottomBar />
          <ConnectBar />
          {isThemeOverlayVisible && <ThemeBar />}
          {isAmbientOverlayVisible && (
            <Card className="absolute p-0 bg-transparent border-transparent overflow-hidden left-1/2 bottom-[15%] transform -translate-x-1/2 flex items-center justify-center">
              <Tabs defaultValue="sound" className="w-[400px] bg-modal-black">
                <TabsList className="bg-orange-500">
                  <TabsTrigger value="sound">Sounds</TabsTrigger>
                  <TabsTrigger value="animation">Animations</TabsTrigger>
                </TabsList>
                <TabsContent value="sound">
                  <SoundAnimationsBar />
                </TabsContent>
                <TabsContent value="animation">
                  <AnimationsBar />
                </TabsContent>
              </Tabs>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
