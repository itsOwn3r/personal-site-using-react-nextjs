"use client";
import React, { useEffect, useState } from "react";
import ScreenHeading from "@/app/utilities/ScreenHeading/ScreenHeading";
import ScrollService from "@/app/utilities/ScrollService";
import Animations from "@/app/utilities/Animation";
import "./MyWorks.css";

function MyWorks(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  // const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState(0);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const WorksHeading = (props) => {
    return (
      <div className="works-heading">
        <div className="works-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
          <div className="works-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="works-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const worksBullets = [
    { label: "Education", src: "education.svg" },
    { label: "TimeLine", src: "time-line.svg" },
    { label: "Programming Skills", src: "programming-skills.svg" },
    { label: "Projects", src: "projects.svg" },
    { label: "Favorites", src: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 55 },
    { skill: "PHP", ratingPercentage: 50 },
    { skill: "API", ratingPercentage: 65 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 93 },
  ];

  const projectDetails = [
    {
      title: "WP News Website",
      duration: { date: "2016" },
      description: "2016",
      subHeading: "Technology: Wordpress, PHP",
    },
    {
      title: "Personal Site",
      duration: { date: "2020" },
      description: "2020",
      subHeading: "Technology: Wordpress",
    },
    {
      title: "PHP Licence Verification System",
      duration: { date: "2020" },
      description: "2020",
      subHeading: "Technology: PHP",
    },
    {
      title: "Scraper(data extractor) for many sites!",
      duration: { date: "2023" },
      description: "2021 - *",
      subHeading: " Technology: JS, PHP",
    },

  ];

  const worksDetails = [
    <div className="works-screen-container" key="education" style={{marginTop: 0}}>
      <WorksHeading
        heading={"Elite School of Allameh"}
        subHeading={"Graduated High School"}
        fromDate={"2013 "}
        toDate={" 2017"}
      />
      <WorksHeading
        heading={"Self Taught Programmer"}
        subHeading={"No IT related Education."}
        fromDate={"2018 "}
        toDate={" *"}
      />
            <WorksHeading
        heading={"Web Design History"}
        subHeading={""}
        fromDate={"2013 "}
        toDate={" *"}
      />
    </div>,
    <div className="works-screen-container" key="work-experience"  style={{marginTop: "71%"}}>

      <div className="experience-description">
        <span className="works-description-text">
          -HTMl and CSS: First project that I can find now, belongs to 2013 !
        </span>
      </div>
      <div className="experience-description">
        <span className="works-description-text">
          -Wordpress: My first Wordpress site went online in 2016 !
        </span>
        <br />
        <span className="works-description-text">
          - I also had multiple Bitcoin Faucet in 2016!
        </span>
        <br />

        <span className="works-description-text">
          - Started learning JavaScript in late 2020
        </span>
        <br />
      </div>
      
      <div
        className="works-screen-container programming-skills-container"
        key={"programming-skills"}
      >
        {programmingSkillsDetails.map((skill, index) => {
          return (
            <div className="skill-parent" key={index}>
              <div className="heading-bullet"></div>
              <span>{skill.skill}</span>
              <div className="skill-percentage">
                <div
                  style={{ width: skill.ratingPercentage + "%" }}
                  className="active-percentage-bar"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="works-screen-container" key="projects">
        {projectDetails.map((project, index) => {
          return (
            <WorksHeading
              key={index}
              heading={project.title}
              subHeading={project.subHeading}
              description={project.description}
              fromDate={project.duration.date}
            />
          );
        })}
      </div>
      
      <div className="works-screen-container" key="interests">
        <WorksHeading
          heading="CloudFlare"
          description="By hiding your IP behind it&apos;s CDN, protects your privacy and helps access to free internet!"
        />
        <WorksHeading
          heading="Tor Project"
          description="Privacy and Free Internet!"
        />
          <WorksHeading
            heading="JavaScript"
            description="I love JS. It&apos;s easy to use and you can use it almost anywhere!"
          />
        <WorksHeading
          heading="VS Code"
          description="Self explanatory :)"
        />
      </div>
    </div>
  ];

  const handleCarousal = (index) => {
    // let offsetHeight = 360;
    // let valuesOF = index * offsetHeight * -1;

    let newCarousalOffset = index;
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return worksBullets.map((bullet, index) => {
      return (
        <div
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          onClick={() => handleCarousal(index)}
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../static/images/${bullet.src}`).default.src}
            alt={bullet.label}
          />
          <span className="bullet-label"> {bullet.label}</span>
        </div>
      );
    });
  };

  const getWorksScreen = () => {
    return (
      // <div style={carousalOffSetStyle.style} className="works-details-carousal">
      <div
        className={"works-details-carousal" + " index" + carousalOffSetStyle}
      >
        {worksDetails.map((WorksDetail) => WorksDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="works-container screen-container fade-in" style={{minHeight: "inherit", marginBottom: "50px"}} id={props.id || ""}>
      <div className="works-content">
        <ScreenHeading
          title={"How it started?"}
          subHeading={""}
        />

        <div className="works-card">
          <div className="works-bullet">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="works-bullets-details">{getWorksScreen()}</div>
        </div>
      </div>
    </div>
  );
}

export default MyWorks;
