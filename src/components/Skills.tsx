import { SkillsInfo } from "../User";
import SkillsCard from "./SkillsCard";

const Skills = () => {
    return  <div className="px-16 mx-20 my-10 mb-28 font-mono" id="Skills">
    <h1 className="text-4xl mb-10 text-center font-bold text-white">
      <span className="text-primaryColor">03 &nbsp;</span> Skills
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