import { Avatar } from "@mantine/core";

const SkillBadge = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill: string, index: number) => (
        <div
          key={index}
          className="flex flex-col items-center gap-2 border border-primaryColor shadow-[0_0_10px_0_#64FFDA] hover:!scale-[1.02] cursor-pointer p-3 rounded-2xl max-h-[150px] overflow-hidden transition-all duration-300"
        >
          <Avatar
            className="!w-[32px] !h-[32px] !p-1" // Increased size for better visibility
            variant="filled"
            radius="sm"
            src={`/Icons/${skill}.png`}
          />
          <div className="text-textColor text-lg font-medium text-center">{skill}</div> {/* Adjusted font size for better readability */}
        </div>
      ))}
    </>
  );
};

const SkillsCard = (props: any) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in-sine"
      className="w-full md:w-[49%] hover:!scale-[1.02] cursor-pointer transition-transform duration-300 shadow-[0_0_10px_0_#64FFDA] rounded-2xl border border-primaryColor p-5 mb-5" // Full width on mobile
    >
      <div className="text-3xl text-white mb-4 text-center font-bold">{props.title}</div>
      <div className="flex flex-wrap gap-4 justify-center"> {/* Increased gap for better spacing */}
        <SkillBadge skills={props.skills} />
      </div>
    </div>
  );
};

export default SkillsCard;
