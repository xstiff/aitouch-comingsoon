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
          Specialises in assisting with the complex process of introducing projects to fund managers of private and public funds.

          </p>
        </div>
        <Subscribe />
      </div>
    </>
  );
};
