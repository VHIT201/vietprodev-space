"use client";
import React, { useEffect, useState } from "react";
import { SnowOverlay } from "react-snow-overlay";
import BottomBar from "@components/Bottom-bar";
import ConnectBar from "@components/Connect-bar";
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

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
        backgroundImage: "url('/assets/img/bg1.jpg')",
        backgroundSize: "cover",
      }}
    >
      <SnowOverlay maxParticles={20} />
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
        </>
      )}
    </div>
  );
}
