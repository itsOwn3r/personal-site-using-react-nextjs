"use client"
import { TOTAL_SCREENS } from "./CommonUtils";
import { Subject } from "rxjs";
import { object } from "prop-types";

export default class ScrollService {
  static scrollHandler = new ScrollService();
  static currentScreenBroadCaster = new Subject();
  static currentScreenFadeIn = new Subject();

  constructor() {
    if (typeof window !== "undefined") {
    window.addEventListener("scroll", this.checkCurrentScreenUnderViewport);
    }
  }

  scrollToContactMe = () => {
    let contactMeScreen = document.querySelector("#Contact\\ Me");
    if (!contactMeScreen) return;
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeScreen = document.querySelector("#Home");
    if (!homeScreen) return;
    homeScreen.scrollIntoView({ behavior: "smooth" });
  };
  scrollToProject = () => {
    let projectsScreen = document.querySelector("section.projects-section");
    if (!projectsScreen) return;
    projectsScreen.scrollIntoView({ behavior: "smooth" });
  };

  isElementInView = (elem, type) => {
    let rec = elem.getBoundingClientRect();
    let elementTop = rec.top;
    let elementBottom = rec.bottom;

    let halfVisible = elementTop < window.innerHeight && elementBottom >= 0;
    let fullVisible = elementTop >= 0 && elementBottom <= window.innerHeight;

    switch (type) {
      case "half":
        return halfVisible;
      case "full":
        return fullVisible;
      default:
        return false;
    }
  };

  checkCurrentScreenUnderViewport = (e) => {
    if (!e || Object.keys(e).length < 1) return;

    for (let screen of TOTAL_SCREENS) {
      let screenFromDOM = document.getElementById(screen.screen_name);
      if (!screenFromDOM) continue;

      let fullyVisible = this.isElementInView(screenFromDOM, "full");
      let haflyVisible = this.isElementInView(screenFromDOM, "half");

      if (fullyVisible || haflyVisible) {
        if (haflyVisible && !screen.alreadyRendered) {
          ScrollService.currentScreenFadeIn.next({
            fadeInScreen: screen.screen_name,
          });
          screen["alreadyRendered"] = true;
          break;
        }
        if (fullyVisible) {
          ScrollService.currentScreenBroadCaster.next({
            screenInView: screen.screen_name,
          });
          break;
        }
      }
    }
  };
}
