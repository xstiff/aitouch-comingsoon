"use client";
import { useState } from "react";
import "./Subscribe.scss";
import { DM_Sans } from "next/font/google";
import MailerLiteForm from "../MailerLite/MailerLite";

const font = DM_Sans({ subsets: ["latin"], weight: "300" });

export const Subscribe = () => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      {visibility == true ? (
        <>
          <div className="blur"></div>
          <div className="subscribe-popup">
            <span
              className="subscribe-popup-close"
              onClick={() => setVisibility(!visibility)}
            >
              X
            </span>
            <div className="subscribe-popup-text">
              <h2>Subscribe to stay updated!</h2>
              <p>
              You can still count on the same great experience you&apos;ve come to expect from us. We appreciate your patience and look forward to unveiling our new look very soon
              </p>
            </div>
            <MailerLiteForm />
          </div>
        </>
      ) : (
        ""
      )}

      <div className="subscribe-container">
        <button
          className={font.className}
          type="button"
          onClick={() => setVisibility(!visibility)}
        >
          Get notified
        </button>
      </div>
    </>
  );
};
