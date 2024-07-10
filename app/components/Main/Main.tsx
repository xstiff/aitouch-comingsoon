import "./Main.scss";
// import { d } from "../Countdown/Countdown";
import { Subscribe } from "../Subscribe/Subscribe";
import { Logo } from "../Logo/Logo";
import { DM_Sans } from "next/font/google";
import { Contact } from "../Contact/Contact";
import Countdown from "../Countdown/Countdown";

const font = DM_Sans({ subsets: ["latin"], weight: "1000" });
const fontSnd = DM_Sans({ subsets: ["latin"], weight: "400" });

export const Main = () => {
  return (
    <>
      <Contact />
      <div className="midbar-container">
        <h1 className={font.className}>EXCITING CHANGES<br />COMING SOON</h1>
        <Countdown />
        <div className="coming-container">
          <Logo />

          <p className={fontSnd.className + " " + "description"}>
          We provide customized AI solutions, training, and continuous process optimization, helping businesses streamline operations and improve efficiency.

          </p>
        </div>
        <Subscribe />
      </div>
    </>
  );
};
