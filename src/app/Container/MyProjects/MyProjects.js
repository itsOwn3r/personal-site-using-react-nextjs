"use client";
import React from "react";
import Footer from "../Home/Footer/Footer";
import "./MyProjects.css";

import ScreenHeading from "@/app/utilities/ScreenHeading/ScreenHeading";
import ScrollService from "@/app/utilities/ScrollService";
import Animations from "@/app/utilities/Animation";

function MyProjects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <>
      <section className="projects-section fade-in" id={props.id || ""}>
      <ScreenHeading
        title={"My Projects"}
        subHeading={"Here Are Some of my Projects"}
      />
        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>My First-Ever Real-World
              Web-Dev Project! I Build a News Website Using Wordpress in 2016!
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="My First Wordpress Project"
              src={require("../../static/images/projects/2016.png").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/2016.png").default.src
                );
              }}
            />
          </div>
        </div>

        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Personal Site Using Wordpres in 2020(Images has been edited via Google Translate)
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Personal Site Using Wordpres"
              src={require("../../static/images/projects/personal.png").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/personal.png").default.src
                );
              }}
            />
          </div>
        </div>



        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>I Build a PHP Script For
              Validating Software&apos;s Licenses(Spesially WP Themes or Plugons) in 2020!
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img alt="PHP Script For Validating Theme and Plugin&apos;s Licenses" className="img-one"show={"true"} src={require("../../static/images/licence.png").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/licence.png").default.src);
              }}
            />
            <i className="fa fa-arrow-right fa-3x next" onClick={() => {
                if (document.querySelector(".img-one").getAttribute("show") == "true") {
                  document.querySelector(".img-one").setAttribute("show", "false");document.querySelector(".img-two").setAttribute("show", "true");
                  document.querySelector(".img-one").style = "display: none";
                  document.querySelector(".img-two").style = "display: block";
                } else if (
                  document.querySelector(".img-one").getAttribute("show") == "false"
                ) {
                  document.querySelector(".img-one").setAttribute("show", "true");
                  document.querySelector(".img-two").setAttribute("show", "false");
                  document.querySelector(".img-one").style = "display: block";
                  document.querySelector(".img-two").style = "display: none";
                }
              }}
            ></i>
            <img
              alt="PHP Script For Validating Theme and Plugin&apos;s Licenses"
              className="img-two"
              show={"false"}
              style={{ display: "none" }}
              src={require("../../static/images/licence2.png").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/licence2.png").default.src
                );
              }}
            />
          </div>
        </div>





        <div className="project-item">
          <div className="project-comment">
            <p><i className="fa fa-quote-left"></i> Online Real Estate Agency Site in 2020(Images has been edited via Google Translate)<i className="fa fa-quote-right"></i></p></div>
          <div className="projects-info">
            <img alt="Online Real Estate Agency Site" className="real-estate-img-one"show={"true"} src={require("../../static/images/projects/esf-min.jpg").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/projects/esf-min.jpg").default.src);}}/>
            <i className="fa fa-arrow-right fa-3x next" style={{color: "#444444"}} onClick={() => {
                if (document.querySelector(".real-estate-img-one").getAttribute("show") == "true") {
                  document.querySelector(".real-estate-img-one").setAttribute("show", "false");document.querySelector(".real-estate-img-two").setAttribute("show", "true");
                  document.querySelector(".real-estate-img-one").style = "display: none";
                  document.querySelector(".real-estate-img-two").style = "display: block";
                } else if (document.querySelector(".real-estate-img-one").getAttribute("show") == "false"){
                  document.querySelector(".real-estate-img-one").setAttribute("show", "true");
                  document.querySelector(".real-estate-img-two").setAttribute("show", "false");
                  document.querySelector(".real-estate-img-one").style = "display: block";
                  document.querySelector(".real-estate-img-two").style = "display: none";}
              }}
            ></i>
            <img alt="Online Real Estate Agency Site" className="real-estate-img-two" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/Properties-List.png").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/Properties-List.png").default.src
                );
              }}
            />
          </div>
        </div>


        <div className="project-item">
          <div className="project-comment">
            <p><i className="fa fa-quote-left"></i> Online New/Used Cars Sale in 2020(Images has been edited via Google Translate)<i className="fa fa-quote-right"></i></p></div>
          <div className="projects-info">
            <img alt="Online Car Sale Site" className="auto-sale-img-one"show={"true"} src={require("../../static/images/projects/auto-sale.jpg").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/projects/auto-sale.jpg").default.src);}}/>
            <i className="fa fa-arrow-right fa-3x next" onClick={() => {
                if (document.querySelector(".auto-sale-img-one").getAttribute("show") == "true") {
                  document.querySelector(".auto-sale-img-one").setAttribute("show", "false");document.querySelector(".auto-sale-img-two").setAttribute("show", "true");
                  document.querySelector(".auto-sale-img-one").style = "display: none";
                  document.querySelector(".auto-sale-img-two").style = "display: block";
                } else if (document.querySelector(".auto-sale-img-one").getAttribute("show") == "false"){
                  document.querySelector(".auto-sale-img-one").setAttribute("show", "true");
                  document.querySelector(".auto-sale-img-two").setAttribute("show", "false");
                  document.querySelector(".auto-sale-img-one").style = "display: block";
                  document.querySelector(".auto-sale-img-two").style = "display: none";}
              }}
            ></i>
            <img alt="Online Car Sale Site" className="auto-sale-img-two" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/auto-sale-ad.png").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/auto-sale-ad.png").default.src
                );
              }}
            />
          </div>
        </div>




        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Simple Online Book Store in 2020(Images has been edited via Google Translate)
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Online Book Store Site"
              src={require("../../static/images/projects/book-store.jpg").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/book-store.jpg").default.src
                );
              }}
            />
          </div>
        </div>




        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Scrapers(Divar: Listing website, Emalls: Price tracker site, RadioJavan: music info )
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Web Scrapers"
              src={require("../../static/images/projects/scrape2.jpg").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/scrape2.jpg").default.src
                );
              }}
            />
          </div>
        </div>



        <div className="project-item">
          <div className="project-comment">
            <p><i className="fa fa-quote-left"></i> Telegram Bots(1.Send updated &apos;.txt&apos; file automated. 2.Send Divar&apos;s scraped data to Telegram. 3.Text/Url to QR Code)<i className="fa fa-quote-right"></i></p></div>
          <div className="projects-info">
            <img alt="Telegram Bots" className="bot-img-one" show={"true"} src={require("../../static/images/projects/txt-bot.jpg").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/projects/txt-bot.jpg").default.src);}}/>
            <i className="fa fa-arrow-right fa-3x next" onClick={() => {
                if (document.querySelector(".bot-img-one").getAttribute("show") == "true") {
                  document.querySelector(".bot-img-one").setAttribute("show", "false");
                  document.querySelector(".bot-img-two").setAttribute("show", "true");
                  document.querySelector(".bot-img-one").style = "display: none";
                  document.querySelector(".bot-img-two").style = "display: block";
                }else if (document.querySelector(".bot-img-one").getAttribute("show") == "false" && document.querySelector(".bot-img-three").getAttribute("show") == "false"){
                  document.querySelector(".bot-img-three").setAttribute("show", "true");
                  document.querySelector(".bot-img-two").setAttribute("show", "false");
                  document.querySelector(".bot-img-two").style = "display: none";
                  document.querySelector(".bot-img-three").style = "display: block";}
                 else if (document.querySelector(".bot-img-one").getAttribute("show") == "false" && document.querySelector(".bot-img-two").getAttribute("show") == "false"){
                  document.querySelector(".bot-img-one").setAttribute("show", "true");
                  document.querySelector(".bot-img-three").setAttribute("show", "false");
                  document.querySelector(".bot-img-one").style = "display: block";
                  document.querySelector(".bot-img-three").style = "display: none";}
              }
            }
            ></i>
            <img alt="Telegram Bots" className="bot-img-two" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/divar-bot.jpg").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/divar-bot.jpg").default.src
                );
              }}
            />
            <img alt="Telegram Bots" className="bot-img-three" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/qr-bot.jpg").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/qr-bot.jpg").default.src
                );
              }}
            />
          </div>
        </div>




        <div className="project-item">
          <div className="project-comment">
            <p><i className="fa fa-quote-left"></i> Chrome Extentions(1.Volume For Youtube Shorts. 2.Super Simple Ext. to show the latest Crypto price. 3.Text/Url to QR Code)<i className="fa fa-quote-right"></i></p></div>
          <div className="projects-info">
            <img alt="Chrome Extentions" className="ext-img-one" show={"true"} src={require("../../static/images/projects/shorts-ext.jpg").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/projects/shorts-ext.jpg").default.src);}}/>
             <i className="fa fa-arrow-right fa-3x next" onClick={() => {
                if (document.querySelector(".ext-img-one").getAttribute("show") == "true") {
                  document.querySelector(".ext-img-one").setAttribute("show", "false");
                  document.querySelector(".ext-img-two").setAttribute("show", "true");
                  document.querySelector(".ext-img-one").style = "display: none";
                  document.querySelector(".ext-img-two").style = "display: block";
                } else if (document.querySelector(".ext-img-one").getAttribute("show") == "false"){
                  document.querySelector(".ext-img-one").setAttribute("show", "true");
                  document.querySelector(".ext-img-two").setAttribute("show", "false");
                  document.querySelector(".ext-img-one").style = "display: block";
                  document.querySelector(".ext-img-two").style = "display: none";}
              }}
            ></i>
            <img alt="Chrome Extentions" className="ext-img-two" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/clipboard-ext.jpg").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/clipboard-ext.jpg").default.src
                );
              }}
            />
          </div>
        </div>




        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Budget Tracker With Live Edit And Google Chart<br/> <a href="https://budgettracker.pages.dev/"  target="_blank">Preview </a> - <a href="https://github.com/itsOWNER/Budget-Tracker" target="_blank"> GitHub</a>
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Budget Tracker App"
              src={require("../../static/images/projects/budget-tracker.jpg").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/budget-tracker.jpg").default.src
                );
              }}
            />
          </div>
        </div>


        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              Full Stack App, With JS and PHP, Updatable data(Automatically), Near 10k Url, Connected to Telegram bot  
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Full Stack App"
              src={require("../../static/images/projects/question-mark.png").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/question-mark.png").default.src
                );
              }}
            />
          </div>
        </div>


        <div className="project-item">
          <div className="project-comment">
            <p>
              <i className="fa fa-quote-left"></i>
              My Biggest Project: 1.1 Millions Files Processed and 556,186 Emails with Attachments Added to a Database and shown on Website
              <i className="fa fa-quote-right"></i>
            </p>
          </div>
          <div className="projects-info">
            <img
              alt="Emails Project"
              src={require("../../static/images/projects/question-mark.png").default.src}
              width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/question-mark.png").default.src
                );
              }}
            />
          </div>
        </div>




        <div className="project-item">
          <div className="project-comment">
            <p><i className="fa fa-quote-left"></i> ClipBoard Share Via Copyable Text and QR Code(Includes: A Web page, Chrome Extention and A Telegram Bot)<i className="fa fa-quote-right"></i></p></div>
          <div className="projects-info">
            <img alt="ClipBoard Share Share" className="clip-board-one" show={"true"} src={require("../../static/images/projects/clipboard-ext.jpg").default.src} width={100} height={100}onClick={() => {window.open(require("../../static/images/projects/clipboard-ext.jpg").default.src);}}/>
             <i className="fa fa-arrow-right fa-3x next" onClick={() => {
                if (document.querySelector(".clip-board-one").getAttribute("show") == "true") {
                  document.querySelector(".clip-board-one").setAttribute("show", "false");
                  document.querySelector(".clip-board-two").setAttribute("show", "true");
                  document.querySelector(".clip-board-one").style = "display: none";
                  document.querySelector(".clip-board-two").style = "display: block";
                } else if (document.querySelector(".clip-board-one").getAttribute("show") == "false"){
                  document.querySelector(".clip-board-one").setAttribute("show", "true");
                  document.querySelector(".clip-board-two").setAttribute("show", "false");
                  document.querySelector(".clip-board-one").style = "display: block";
                  document.querySelector(".clip-board-two").style = "display: none";}
              }}
            ></i>
            <img alt="ClipBoard Share Share" className="clip-board-two" show={"false"} style={{ display: "none" }} src={require("../../static/images/projects/qr-bot.jpg").default.src} width={100}
              height={100}
              onClick={() => {
                window.open(
                  require("../../static/images/projects/qr-bot.jpg").default.src
                );
              }}
            />
          </div>
        </div>




        <Footer />
      </section>
    </>
  );
}

export default MyProjects;
