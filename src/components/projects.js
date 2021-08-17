import srcAudio from "../assets/projectheros/mobile/audiphile-hero.png";
import srcAudioBig from "../assets/projectheros/desktop/audiphile-hero.png";
import srcAudioGif from "../assets/project gifs/ecom-guru-Animation.gif";

import srcBlogr from "../assets/projectheros/mobile/blogr-hero.png";
import srcBlogrBig from "../assets/projectheros/desktop/blogr-hero.png";
import srcBlogGif from "../assets/project gifs/blogr-landing-page.gif";

import srcCrowd from "../assets/projectheros/mobile/crowdfunding-hero.png";
import srcCrowdBig from "../assets/projectheros/desktop/crowdfunding-hero.png";
import srcCrowdGif from "../assets/project gifs/blogr-landing-page.gif";

import srcPizza from "../assets/projectheros/mobile/pizza-hero.png";
import srcPizzaBig from "../assets/projectheros/desktop/pizza-hero.png";
import srcPizzaGif from "../assets/project gifs/pizzeria-animtation1.gif";

import srcLoop from "../assets/projectheros/mobile/loop-hero.png";
import srcLoopBig from "../assets/projectheros/desktop/loop-hero.png";
import srcLoopGif from "../assets/project gifs/loop-landing-page.gif";

import React from "react";
import Projectpreview from "./projectpreview";
export default function Projects() {
  let ourProjects = [
    {
      name: "Audiophiles",
      previewInfo:
        "This project required me to build a fully responsive Ecommmerce page to the designs provided. I used HTML5, along with CSS Grid and React for the areas that required interactivity and statemanagement",
      imgUrlMob: srcAudio,
      imgUrlDesktop: srcAudioBig,
      projectBackground:
        "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      ourGif: srcAudioGif,
      websiteUrl: "https://sharp-visvesvaraya-224a23.netlify.app/",
      objective: "Interaction Design / Front End Development",
      technologyUsed: "REACT-JS / HTML / CSS / JS",
    },
    {
      name: "H-Pizzeria",
      previewInfo:
        "This project required me to build a fully responsive Pizza Ordering App. I used React for the front end, along with ekspress and mongodb for the backend",
      imgUrlMob: srcPizza,
      imgUrlDesktop: srcPizzaBig,
      projectBackground:
        "This project was a prototype for a website for a pizza-hut, I learned and implemented ekspress and mongodb for a fully complete fullstack application, were users can order pizzas and have them delivered to the door. The sellers are able to log into an admin dashboard and see new orders, and they can also check if its delivered or not. ",
      ourGif: srcPizzaGif,
      websiteUrl: "https://haugesundpizzeria.herokuapp.com/",
      objective:
        "Interaction Design / Front End Development /Back End Development / Payment Integration",
      technologyUsed:
        "REACT-JS / NodeJS / MongoDB / Ekspress / HTML / CSS / JS",
    },
    {
      name: "CrowdFunding Page",
      previewInfo:
        "This project required me to build a fully responsive crowdfunding website to the designs provided. I used HTML5, along with CSS Grid and javascript for the areas that required interactivity and statemanagement",
      imgUrlMob: srcCrowd,
      imgUrlDesktop: srcCrowdBig,
      ourGif: srcCrowdGif,
      projectBackground:
        "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      objective: "Interaction Design / Front End Development",
      technologyUsed: " HTML / CSS / JS",
      websiteUrl: "https://laughing-stonebraker-ba7a5c.netlify.app/",
    },
    {
      name: "Blogr Landing Page",
      previewInfo:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and javascript for the areas that required interactivity, like the mobile menu",
      imgUrlMob: srcBlogr,
      imgUrlDesktop: srcBlogrBig,
      ourGif: srcBlogGif,
      projectBackground:
        "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      objective: "Interaction Design / Front End Development",
      technologyUsed: " HTML / CSS / JS",
      websiteUrl: "https://flamboyant-shirley-09ef60.netlify.app/",
    },
    {
      name: "Loopstudios landing Page",
      previewInfo:
        "This project required me to build a fully responsive webpage to the designs provided. I used HTML5, along with CSS Grid and javascript for the areas that required interactivity",
      imgUrlMob: srcLoop,
      imgUrlDesktop: srcLoopBig,
      ourGif: srcLoopGif,
      projectBackground:
        "This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      objective: "Interaction Design / Front End Development",
      technologyUsed: " HTML / CSS / JS",
      websiteUrl: "https://gifted-lumiere-af0b43.netlify.app/",
    },
  ];
  return (
    <div>
      {ourProjects.map((item, index) => {
        return (
          <Projectpreview
            key={index + 1}
            item={item}
            reverse={index % 2 === 0 ? false : true}
            projects={ourProjects}
          />
        );
      })}
    </div>
  );
}
