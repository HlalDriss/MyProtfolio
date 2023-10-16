import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import ContactIntfoFooter from "./ContactInfoFooter";
import { contactInfo } from "../../portfolio";
export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <div className="footer-colect">
          <div className="social-div">
            <SocialMedia />
          </div>

          <ContactIntfoFooter
            phone={contactInfo.phone}
            email={contactInfo.email}
            location={contactInfo.location}
          />
        </div>
        <div className="copyright-div">
          {" "}
          <p class="copyright">© Driss HLAL 2023</p>
        </div>
      </Fade>
    </div>
  );
}
