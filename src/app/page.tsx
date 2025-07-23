"use client";
import React from "react";
import { SnowOverlay } from "react-snow-overlay";
import BottomBar from "@components/Bottom-bar";
import ConnectBar from "@components/Connect-bar";
export default function Home() {
  return (
    <div
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: "url('/assets/img/bg1.jpg')",
        backgroundSize: "cover",
      }}
    >
      <SnowOverlay maxParticles={20} />

      <BottomBar />

      <ConnectBar />
    </div>
  );
}
