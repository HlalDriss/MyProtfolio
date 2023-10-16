import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaJava } from "react-icons/fa";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                {
                  //we add this condition bc we didn't find icons java
                  logo.skillName === "java" ? (
                    <li className="software-skill-inline" name={logo.skillName}>
                      <span
                        className="iconify"
                        style={logo.style}
                        data-inline="false"
                      >
                        <FaJava />
                      </span>
                    </li>
                  ) : (
                    <li className="software-skill-inline" name={logo.skillName}>
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    </li>
                  )
                }
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
