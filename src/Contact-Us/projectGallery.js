import React from "react";

const ProjectImage = ({ projectName, img }) => {
  return (
    <div className="project project_item  col-sm-6 col-md-4 col-lg-3">
      <a className="link" href="/">
        <figure>
          <img src={img} />

          <figcaption>
            <h3 className="project-title">{projectName}</h3>
            <h4 className="project-category">
              BrightMartinsLTD <br />
            </h4>
            <div className="project-zoom"></div>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ProjectImage;
