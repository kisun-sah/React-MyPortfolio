import { Info } from "../User";
//@ts-ignore

import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViwer from "./ResumeViwer/ResumeViwer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./MagicUI/Particals";
import { NeonGradientCard } from "./MagicUI/neon-gradient-card";

const About = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row relative px-4 sm:px-16 overflow-hidden justify-center sm:justify-between items-center font-mono h-auto sm:h-[80vh] lg:h-[90vh] gap-6" id="bg">
        <Particles
          className="absolute z-0 inset-0"
          quantity={1000}
          ease={80}
          color="#64FFDA"
          refresh
        />
        
        {/* Left Section (Text and Buttons) */}
        <div className="w-full sm:w-3/5 flex flex-col items-center sm:items-start text-center sm:text-left mt-8 sm:mt-0 z-10">
          <div className="text-primaryColor text-xl sm:text-3xl md:text-4xl">Hi, I am </div>
          <div className="text-white font-extrabold text-2xl sm:text-[2.5rem] md:text-[3.5rem]">
            {Info.name}
          </div>
          <div className="text-white text-lg sm:text-2xl md:text-3xl flex font-semibold mt-2">
            I'm a &nbsp;
            <span className="text-primaryColor">
              <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true }} />
            </span>
          </div>
          <div className="text-textColor text-sm sm:text-lg md:text-xl text-justify font-semibold my-4 sm:my-5">
            {Info.Bio}
          </div>
          
          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
            <Button onClick={open} size="md" className="!text-bgColor w-full sm:w-fit sm:text-lg" variant="filled" color="#64FFDA">
              Check Resume
            </Button>
            <Button
              component="a"
              href="./Kisun Sah(software developer).pdf"
              download={Info.name}
              size="md"
              className="!text-primaryColor w-full sm:w-fit sm:text-lg"
              variant="outline"
              color="#64FFDA"
              rightSection={<IconDownload size={22} />}
            >
              Download
            </Button>
          </div>
        </div>
        
        {/* Right Section (Image) */}
        <div className="flex justify-center items-center rounded-full mt-8 sm:mt-0 w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] z-10">
          <NeonGradientCard className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] flex items-center justify-center">
            <img className="object-cover object-center h-full w-full rounded-full" src="/me.jpg" alt="profile" />
          </NeonGradientCard>
        </div>
      </div>

      <ResumeViwer opened={opened} close={close} />
    </>
  );
};

export default About;
