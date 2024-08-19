import { Avatar } from "@mantine/core";

const SkillBadge = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill: string, index: number) => (
        <div
          key={index}
           className="flex flex-wrap gap-2 border border-textColor rounded-2xl items-center  px-3 py-2"
        >
          <Avatar
            className="!w-[24px] !p-1"
            variant="filled"
            radius="sm"
            src={`/Icons/${skill}.png`}
          />
          <div className="text-textColor text-xl font-medium">{skill}</div>
        </div>
      ))}
    </>
  );
};

const SkillsCard = (props: any) => {
  return (
    <div className="w-[49%]  hover:!scale-[1.02] cursor-pointer transition-transform duration-300  shadow-[0_0_10px_0_#64FFDA] rounded-2xl border border-primaryColor p-5">
      <div className="text-3xl text-white mb-4 text-center font-bold">{props.title}</div>
      <div className="flex flex-wrap gap-3 justify-center ">
        <SkillBadge skills={props.skills} />
      </div>
    </div>
  );
};

export default SkillsCard;
