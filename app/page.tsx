"use client";
import "./page.scss";
import { Main } from "./components/Main/Main";

export default function Home() {
  return (
    <div className="main-container">
      <div className="secondary-container">
        <Main />
      </div>
    </div>
  );
}
