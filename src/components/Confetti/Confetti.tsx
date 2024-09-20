"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useWindowSize from "react-use/lib/useWindowSize";

// Dynamically import react-confetti to avoid SSR issues
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

interface ConfettiProps {
  numberOfPieces?: number;
  colors?: string[];
  recycle?: boolean;
  tweenDuration?: number;
  onConfettiComplete?: () => void;
}

const ConfettiComponent: React.FC<ConfettiProps> = ({
  numberOfPieces = 400,
  colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#FFD700",
    "#FF1493",
    "#00FA9A",
  ],
  recycle = false,
  tweenDuration = 7000,
  onConfettiComplete,
}) => {
  const { width, height } = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  // Ensure that it only renders on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Stop showing confetti after animation completes
  useEffect(() => {
    if (onConfettiComplete) {
      const timer = setTimeout(() => {
        onConfettiComplete();
      }, tweenDuration);
      return () => clearTimeout(timer);
    }
  }, [onConfettiComplete, tweenDuration]);

  if (!isClient) {
    return null;
  }

  return (
    <Confetti
      numberOfPieces={numberOfPieces}
      colors={colors}
      width={width}
      height={height}
      recycle={recycle}
      tweenDuration={tweenDuration}
    />
  );
};

export default ConfettiComponent;
