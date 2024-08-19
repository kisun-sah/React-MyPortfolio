import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
//@ts-ignore
import TRUNK from "vanta/src/vanta.trunk"
import Typewriter from "typewriter-effect";
import { Button } from "@mantine/core";

const About = () => {
  const [dots, setDots] = useState<any>(null);
  const [trunk , setTrunk] = useState<any>(null);
  useEffect(() => {
    if (!dots) {
      setDots(
        DOTS({
          el: "#bg",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x64ffda,
          color2: 0x204aff,
          backgroundColor: 0x112249,
          size: 2,
          showLines: false,
          spacing: 23.0,
        })
      );
    }
    if(!trunk){
      setTrunk(TRUNK({
        el: "#photo",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x64ffda,
        backgroundColor: 0x112249,
        chaos: 5.50
      })

    );
  }
    return () => {
      if (dots) dots.destroy();
      if(trunk) trunk.destroy();
    };
  }, [] );

  return (
    <div className="flex px-16 overflow-hidden justify-around items-center font-mono h-[80vh] " id="bg">
      <div className="ml-20   w-3/5  flex flex-col">
        <div className="text-primaryColor text-3xl">Hi ,I am </div>
        <div className="text-white  font-extrabol text-[3.15rem]  ">{Info.name}</div>
        <div className="text-white text-4xl flex font-semibold">I'm a &nbsp; <span className="text-primaryColor"> 
          <Typewriter   options={{  strings: Info.stack,    autoStart: true,     loop: true,          }}
    
        /></span>   </div>
              
       <div className="text-textColor text-xl text-justify font-semibold my-5">{Info.Bio}</div>
       <Button size="lg" className="!text-bgColor !w-fit" variant="filled" color="#64FFDA">Check Resume</Button>
       
      </div >
          <div className="h-[50vh]  flex justify-center items-center overflow-hidden rounded-full mr-14 w-[25vw] shadow-[0_0_70px_0_#64FFDA] " id="photo">
            <img className=" shadow-[0_0_10px_0_#64FFDA]   object-cover object-center h-72 w-[85%]  rounded-full " src="/me.jpg" alt="profile" />
          </div>
    </div>
  );
};
export default About;
