"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Footer from "../Home/Footer/Footer";
import './Testimonial.css'
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "@/app/utilities/ScreenHeading/ScreenHeading";
import ScrollService from "@/app/utilities/ScrollService";
import Animations from "@/app/utilities/Animation";

function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options = {
        loop: true,
        margin:0,
        nav:true,
        animateIn: "bounceInRight",
        animateOut:"bounceOutRight",
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            1000:{
                items:3
            },
        }
    }

  return (
    <>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What my Clients Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousel" {...options}>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /> </li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <Image src={require("../../static/images/test/lady.png")} alt="Daisy Dominic" />
                    <h5>Daisy Dominic</h5>
                    <p>Ceo InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <Image src={require("../../static/images/test/mike.png")} alt="Mike Doe" />
                    <h5>Mike Doe</h5>
                    <p>Ceo MikeTech</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <Image src={require("../../static/images/test/man.png")} alt="Daisy Dominic" />
                    <h5>Daisy Dominic</h5>
                    <p>Ceo InansGlobal</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I patronized Ehizeex and when He delivered, I honestly
                      fell in love with the project He is a very honest guy and
                      he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <Image src={require("../../static/images/test/lady.png")} alt="Ceo InansGlobal" />
                    <h5>Daisy Dominic</h5>
                    <p>Ceo InansGlobal</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      <Footer />
      </section>
    </>
  );
}

export default Testimonial;
