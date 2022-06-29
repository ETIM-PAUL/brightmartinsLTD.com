import React from "react";

const ProjectImage = ({projectName, img}) => {
  return (
    <div className="project project_item  col-sm-6 col-md-4 col-lg-3">
      <a class="link" href="/">
        <figure>
          <img src={img} />

          <figcaption>
            <h3 class="project-title">{projectName}</h3>
            <h4 class="project-category">
              BrightMartinsLTD <br />
            </h4>
            <div class="project-zoom"></div>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ProjectImage;
