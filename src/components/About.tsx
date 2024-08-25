import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk"
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ResumeViwer from "./ResumeViwer/ResumeViwer";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./MagicUI/Particals";
import { NeonGradientCard } from "./MagicUI/neon-gradient-card";

const About = () => {
  const [opened , {open , close}] = useDisclosure(false);
  // const [dots, setDots] = useState<any>(null);
  // const [trunk , setTrunk] = useState<any>(null);
  // useEffect(() => {
  //   if (!dots) {
  //     setDots(
  //       DOTS({
  //         el: "#bg",
  //         mouseControls: true,
  //         touchControls: true,
  //         gyroControls: false,
  //         minHeight: 200.0,
  //         minWidth: 200.0,
  //         scale: 1.0,
  //         scaleMobile: 1.0,
  //         color: 0x64ffda,
  //         color2: 0x204aff,
  //         backgroundColor: 0x112249,
  //         size: 2,
  //         showLines: false,
  //         spacing: 23.0,
  //       })
  //     );
  //   }
  //   if(!trunk){
  //     setTrunk(TRUNK({
  //       el: "#photo",
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 200.00,
  //       minWidth: 200.00,
  //       scale: 1.00,
  //       scaleMobile: 1.00,
  //       color: 0x64ffda,
  //       backgroundColor: 0x112249,
  //       chaos: 5.50
  //     })

  //   );
  // }
  //   return () => {
  //     if (dots) dots.destroy();
  //     if(trunk) trunk.destroy();
  //   };
  // }, [] );

  return (
    <>
    <div className="flex relative px-16 overflow-hidden justify-around items-center font-mono h-[80vh] " id="bg">
    <Particles
          className="absolute  z-index-0 inset-0"
        quantity={1000}
        ease={80}
        color="#64FFDA"
        refresh
      />
      <div className="ml-20   w-3/5  flex flex-col">
        <div className="text-primaryColor text-3xl">Hi ,I am </div>
        <div className="text-white  font-extrabol text-[3.15rem]  ">{Info.name}</div>
        <div className="text-white text-4xl flex font-semibold">I'm a &nbsp; <span className="text-primaryColor">
          <Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /></span>   </div>

        <div className="text-textColor text-xl text-justify font-semibold my-5">{Info.Bio}</div>
        <div className="flex gap-3">
        <Button onClick={open} size="lg" className="!text-bgColor !w-fit" variant="filled" color="#64FFDA">Check Resume</Button>
        <Button   component="a"  href="./kisun001.pdf" download={Info.name} size="lg" className="!text-primaryColor !w-fit" variant="outline"  color="#64FFDA" rightSection={<IconDownload size={22} />} >Download</Button>
            

        </div>

      </div>
        <div className="h-fit flex justify-center items-center rounded-full bs:mr-10 w-fit" id="photo">
           <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
        <img className="  object-cover object-center h-full w-full  rounded-full " src="/me.jpg" alt="profile" />
        </NeonGradientCard>
        </div>
    </div>
    <ResumeViwer opened={opened} close={close} /></>
  );
};
export default About;
