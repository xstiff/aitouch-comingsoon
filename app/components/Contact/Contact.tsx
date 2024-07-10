import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.scss";
import { DM_Sans } from "next/font/google";
const font = DM_Sans({ subsets: ["latin"], weight: "300" });
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export const Contact = () => {
  return (
    <div className="top-container">
      <div className="text-conatainer">
        <div className="contact-secondary-container">
          <a
            href="https://wa.link/z1zga8"
            className={`email-mailto ${font.className}`}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
            &nbsp; +32 455 173 273
          </a>
        </div>
        <div className="contact-secondary-container">
          <a
            href="mailto:contact@globalfunding-group.com"
            className={`email-mailto ${font.className}`}
          >
            contact@globalfunding-group.com
          </a>
        </div>
      </div>
    </div>
  );
};
