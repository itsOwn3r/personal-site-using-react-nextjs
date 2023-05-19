"use client";
import React, { useEffect } from "react";
import ScreenHeading from "@/app/utilities/ScreenHeading/ScreenHeading";
import ScrollService from "@/app/utilities/ScrollService";
import Animations from "@/app/utilities/Animation";
import './AboutMe.css'
function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    description:
      "Vanilla & React JS developer, Also familiar with Building API's using PHP",
    highlights: {
      bullets: [
        "Vanilla JS Developer",
        "React JS Developer",
        "Familiar with building API's",
      ],
      heading: "Here are few Highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => {
      return (
        <div className="highlight" key={i}>
          <div className="highlight-blob"></div>
          <span>{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading
          title={"About Me"}
          subHeading={"Just a small bio"}
        />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
            <button className="btn primary-btn text-white border-white" onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                           
                            Contact Me 
                        </button>
                        <button className="btn highlighted-btn text-white border-white" onClick={() => ScrollService.scrollHandler.scrollToProject()}>My Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
