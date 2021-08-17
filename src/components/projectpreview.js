import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
export default function Projectpreview(props) {
  
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 27em)" });

  return (
    <div
      className={props.reverse ? "project-preview" : "project-preview reverse"}
    >
      <img
        className="project-preview__img"
        src={isTabletOrMobile ? props.item.imgUrlMob : props.item.imgUrlDesktop}
        alt={props.item.name + "description preview"}
      />
      <div className="project-preview__text">
        <h1 className="project-preview__title">{props.item.name}</h1>
        <p className="project-preview__info">{props.item.previewInfo}</p>
        <Link
          to={{
            pathname: "/projects/" + props.item.name,
            state: {
              ourItem: props.item,
              ourData: props.projects,
            },
          }}
        >
          <button className="project-preview__btn">view project</button>
        </Link>
      </div>
    </div>
  );
}
