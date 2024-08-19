/* eslint-disable react/jsx-no-duplicate-props */
import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";


const Project = () => {
    return (
        <div className="px-16 mx-20 my-10 font-mono" id="projects">
      <h1 className="text-4xl mb-5 text-center font-bold text-white">
        <span className="text-primaryColor">02 &nbsp;</span> Projects
      </h1>
            <div className="grid gap-4 grid-cols-4 ">
        {
          ProjectInfo.map((project: any, index: number) => 
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
        )
        
     }
   </div>
        </div>
    );
}

export default Project;
