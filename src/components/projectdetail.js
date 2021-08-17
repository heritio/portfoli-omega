import React from "react";
import { useLocation, useHistory, Link, useParams } from "react-router-dom";
export default function Projectdetail(props) {
  const history = useHistory();
  const location = useLocation();
  const { ourItem, ourData } = location.state;

  return (
    <div className="project-detail">
      <img
        className="project-detail__hero"
        src={ourItem.imgUrlDesktop}
        alt={"hero for the project" + ourItem.name}
      />
      <div className="project-detail__container">
        <div className="project-detail__cta">
          <div className="project-detail__cta-1">
            <h2 className="project-detail__cta-name">{ourItem.name}</h2>
            <h3 className="project-detail__cta-tech">{ourItem.objective}</h3>
            <h3 className="project-detail__cta-tech">{ourItem.technologyUsed}</h3>
            <button className="project-detail__cta-btn"><a href={ourItem.websiteUrl}>visit website</a> </button> 
          </div>
          <p className="project-detail__cta-info">{ourItem.previewInfo}</p>
        </div>
        <div className="project-detail__info">
          <h2 className="project-detail__info-title">Project Background</h2>
          <p className="project-detail__info-background">
            {ourItem.projectBackground}
          </p>
          <h2 className="project-detail__info-static">Static Preview</h2>
          <img
            className="project-detail__info-gif"
            src={ourItem.ourGif}
            alt={ourItem.name + "gif-preview"}
          />
        </div>
      </div>
    </div>
  );
}
