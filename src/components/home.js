
import React from 'react'

import { useMediaQuery } from 'react-responsive'

import heroMob from "../assets/homepage/mobile/image-homepage-hero.jpg";
import heroTab from "../assets/homepage/tablet/image-homepage-hero.jpg";
import heroBig from "../assets/homepage/desktop/image-homepage-hero.jpg";
import profilePicMob from "../assets/homepage/mobile/image-homepage-profile.jpg";
import profilePicBig from "../assets/homepage/desktop/image-homepage-profile.jpg";
function Home() {

    const isBigScreen = useMediaQuery({ query: '(min-width: 27em)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 27em)' })

    return (
        <div className="home">
             <div className="home__section-1">
                 <img className="home__hero" src={isTabletOrMobile ? heroMob : heroBig } alt="home-hero" />
                 <div className="home__section-1-cta">
                     <h1 className="home__section-1-cta-text">Hey, I’m Heritier Akilimali and I love building beautiful websites </h1>
                     <div className="home__button">
                     <svg className="home__button-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="14"><g fill="none" fill-rule="evenodd" stroke="#5FB4A2"><path d="M0 9l8 4 8-4"/><path opacity=".5" d="M0 5l8 4 8-4"/><path opacity=".25" d="M0 1l8 4 8-4"/></g></svg> 
                     <button className="home__button-btn">ABOUT ME</button>
                     </div>
                 </div>
             </div>
             <div className="home__section-2">
               <img className="home__section-2-img" src={isTabletOrMobile ? profilePicMob : profilePicBig } alt="profilepicture" />
               <div className="home__section-2-about">
                    <h3 className="home__section-2-title">About Me</h3>
                    <p className="home__section-2-info">I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Norway, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                    <button className="home__section-2-cta">Go to portfolio</button>
               </div>
             </div>
        </div>
    )
}

export default Home
