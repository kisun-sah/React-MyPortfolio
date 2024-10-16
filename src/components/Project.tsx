/* eslint-disable react/jsx-no-duplicate-props */
import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 mx-4 sm:mx-10 my-10 mb-28 font-mono" id="Projects">
      <h1 className="text-3xl sm:text-4xl mb-6 text-center font-bold text-white">
        <span className="text-primaryColor">02 &nbsp;</span> Projects
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ProjectInfo.map((project: any, index: number) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            live={project.live}
            link={project.link}
            github={project.github}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
