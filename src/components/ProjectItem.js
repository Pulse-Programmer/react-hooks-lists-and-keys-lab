import React from "react";

function ProjectItem({ record: { name, about, technologies } }) {
  const technologyArray = technologies.map((item) => {
    return <span key={item}>{item}</span>;
  });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyArray}</div>
    </div>
  );
}

export default ProjectItem;
