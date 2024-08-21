import { Timeline, Text } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimelineItem = (items: any) => {
  return items.map((item: any, index: number) => (
    <Timeline.Item
      key={index}
      className="!pt-12 !mb-12"
      bullet={<IconBriefcaseFilled color="bgColor" size={20} />}
    >
      <div className="flex flex-col gap-2 border border-primaryColor shadow-[0_0_10px_0_#64FFDA]  hover:!scale-[1.02] cursor-pointer p-4 rounded-2xl">
        
        <div className="flex flex-col">
          <div className="text-white flex flex-col text-2xl font-semibold">
            {item.title}
          </div>
          <div className="text-lg font-semibold text-textColor">
            {item.company} &#x2022; {item.date}
          </div>
        </div>

        <div className="text-textColor text-justify leading-6">{item.desc}</div>


      
      </div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  return (
    <div className="px-16 mx-20 my-10 mb-28 font-mono" id="Experiences">
      <h1 className="text-4xl mb-10 text-center font-bold text-white">
        <span className="text-primaryColor">04 &nbsp;</span> Experiences      </h1>

      <Timeline color="#64FFDA" active={5} bulletSize={34} lineWidth={2}>
        {TimelineItem(ExperienceInfo)}
      </Timeline>
    </div>
  );
};

export default Experience;

