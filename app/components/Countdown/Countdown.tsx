// "use client";
// import { useEffect, useState } from "react";
import "./Countdown.scss";
import { DM_Sans } from "next/font/google";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import dynamic from "next/dynamic";

const font = DM_Sans({ subsets: ["latin"], weight: "400" });

const Countdown = () => {
  const endDate = new Date("September 10, 2024");

  return (
    <div className={"countdown-container " + font.className}>
      <div>
        <FlipClockCountdown
          to={endDate}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
          className="flipclock"
          digitBlockStyle={{
            width: "1.5em",
            height: "2em",
            fontSize: "2em",
            borderRadius: 10,
            fontStyle: font.style.fontStyle,
            fontFamily: font.style.fontFamily,
            fontWeight: 800,
            backgroundColor: "#2E214E",
          }}
          showSeparators={false}
        />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Countdown), { ssr: false });
