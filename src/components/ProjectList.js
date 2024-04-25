import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const recordsArray = projects.map((record) => {
    return <ProjectItem key={record.id} record={record} />;
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{recordsArray}</div>
    </div>
  );
}

export default ProjectList;
