"use client"
import React from "react";
import Typical from "react-typical";
import ScrollService from "@/app/utilities/ScrollService";
import "./Profile.css"
const Profile = (props) => {
  return <div className="profile-container" id={props.id || ""}>
    <div className="profile-parent">
        <div className="profile-details">
            <div className="colz">
                <div className="colz-icon">
                <a href="https://www.instagram.com/itsown3r" target="_blank">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://t.me/itsOwn3r" target="_blank">
                    <i icon="fa fa-heart" className="fa fa-paper-plane"></i>
                </a>
                <a href="https://github.com/itsOwn3r" target="_blank">
                    <i className="fa fa-github"></i>
                </a>
                <a href="mailto:contact@own3r.me">
                    <i className="fa fa-envelope-square"></i>
                </a>
                <a style={{"cursor":"pointer"}} onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                    <i className="fa fa-comment"></i>
                </a>
                </div>
            </div>
            <div className="profile-details-name">
                <span className="primary-text">
                    Hello, I&apos;m <span className="highlighted-text">Own3r</span>
                </span>
            </div>
            <div className="role">
                <span className="primary-text">
                    <h1>
                    <Typical loop={Infinity} steps={[
                        "Front End Developer",
                        2000,
                        "Vanilla JS Developer",
                        2000,
                        "React JS Developer",
                         2000,
                        ]} />
                    </h1>
                    <span className="profile-role-tagline">
                       I&apos;m a Front-End Developer, Who is also familiar with Building API&apos;s:)
                    </span>
                </span>
            </div>
            <div className="profile-options">
                        <button className="btn primary-btn text-white border-white" onClick={() => ScrollService.scrollHandler.scrollToContactMe()}>
                            
                            Contact Me 
                        </button>
                        
                            <button className="btn highlighted-btn text-white border-white" onClick={() => ScrollService.scrollHandler.scrollToProject()}>My Projects</button>
                        
            </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
    </div>
  </div>;
};

export default Profile;
