"use client";
import React, { useState } from "react";
import contactMe2 from "../../static/images/contact-me2.png";
import contactMe3 from "../../static/images/contact-me3.png";
import ScreenHeading from "@/app/utilities/ScreenHeading/ScreenHeading";
import ScrollService from "@/app/utilities/ScrollService";
import Animations from "@/app/utilities/Animation";
import Typical from "react-typical";
import '../../static/js/custom.js'
import "./ContactMe.css";

function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      const res = await fetch(`https://api.own3r.me/contact`,{
        method: 'POST',
        body: JSON.stringify(data)
      })
    const content = await res.json();  
      if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0 || content.success === "false") {
        setBanner(content.message);
        setBool(false);
      } else if (content.success === "true") {
        setBanner(`Dear ${content.name}, Your message has been send to me!`);
        setBool(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return ( 
  <>
    <div className="main-container fade-in" style={{minHeight: 'inherit', marginBottom: '60px'}} id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Send Me A Message"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Send Me A Message !",
                5000,
                "I try to reply in very short time!",
                5000,

              ]}
            />
          </h2>
          <div className="social-medias">
          <a href="https://www.instagram.com/itsown3r" target="_blank">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://t.me/itsOwn3r" target="_blank">
                    <i icon='fa fa-heart' className="fa fa-paper-plane"></i>
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Message Here !</h4>
            <img src={contactMe2.src} alt="Image"className="img-contact-me-2"  />
            <img src={contactMe3.src} alt="Image" className="img-contact-me-3" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name"> Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email"> Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message"> Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
      <button className="go-up btn highlighted-btn text-white border-white" onClick={() => ScrollService.scrollHandler.scrollToHome()}><i className="fa fa-2x fa-arrow-up"/></button>
     </>
  );
}

export default ContactMe;
