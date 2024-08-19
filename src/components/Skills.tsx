import { SkillsInfo } from "../User";
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return <div className="px-16 mx-20 my-10 font-mono" id="skills">
    <h1 className="text-4xl mb-5 text-center font-bold text-white">
      <span className="text-primaryColor">03 &nbsp;</span> skills
    </h1>
    <div className="flex flex-wrap gap-5 justify-between">
      {
        SkillsInfo.map((skill:any , index:number) => < SkillsCard key={index} 
        title={skill.title} 
        skills={skill.skills}
         />)
      }
      </div>

    </div>
}
export default Skills;