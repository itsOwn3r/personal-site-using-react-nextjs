import Main from "../Container/Home/Main";
import AboutMe from "../Container/Me/AboutMe";
import MyWorks from "../Container/MyWorks/MyWorks";
import MyProjects from "../Container/MyProjects/MyProjects";
import ContactMe from "../Container/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Main,
    },
    {
        screen_name: "About Me",
        component: AboutMe,
    },
    {
        screen_name: "How it started",
        component: MyWorks,
    },
    {
        screen_name: "My Projects",
        component: MyProjects,
    },
    {
        screen_name: "Contact Me",
        component: ContactMe,
    },
]

export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return -1
    for (let i = 0; i < TOTAL_SCREENS.length; i++) {
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i
        
    }
    return -1
}

//export default commonUtils;