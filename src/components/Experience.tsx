import { Timeline, Text } from "@mantine/core";
import { IconBriefcaseFilled } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";

const TimelineItem = (items: any) => {
  return items.map((item: any, index: number) => (
    <Timeline.Item
      data-aos="fade-up"
      data-aos-duration="800"
      key={index}
      className="!pt-12 !mb-12"
      bullet={<IconBriefcaseFilled color="bgColor" size={20} />}
    >
<div className="flex flex-col gap-2 border border-primaryColor shadow-[0_0_10px_0_#64FFDA] hover:!scale-[1.02] cursor-pointer p-4 rounded-2xl max-h-[200px] overflow-y-auto md:max-h-[300px]">
        <div className="flex flex-col">
          <div className="text-white flex flex-col text-xl sm:text-2xl font-semibold">
            {item.title}
          </div>
          <div className="text-sm sm:text-lg font-semibold text-textColor">
            {item.company} &#x2022; {item.date}
          </div>
        </div>
        <div className="text-sm sm:text-base text-textColor text-justify leading-6">
          {item.desc}
        </div>
      </div>
    </Timeline.Item>
  ));
};

const Experience = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 mx-auto my-10 mb-28 font-mono max-w-6xl" id="Experiences">
      <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-center font-bold text-white">
        <span className="text-primaryColor">04 &nbsp;</span> Experiences
      </h1>

      <Timeline color="#64FFDA" active={5} bulletSize={30} lineWidth={2} className="w-full">
        {TimelineItem(ExperienceInfo)}
      </Timeline>
    </div>
  );
};

export default Experience;

