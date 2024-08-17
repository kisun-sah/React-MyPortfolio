import { useEffect, useState } from "react";
import { Info } from "../User";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
const About = () => {

    const [dots, setDots] = useState<any>(null)
    useEffect(() => {
      if (!dots) {
        setDots(DOTS({
            el: "#bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x64FFDA,
            color2: 0x204aff,
            backgroundColor:0x112249,
            size: 2,
            showLines:false,
            spacing: 23.00
          }))
      }
      return () => {
        if (dots) dots.destroy()
      }
    }, [dots])

  return (
    <div>
        <div className="flex px-16 h-[90vh] " id="bg">
                 <div>Hi ,I am</div>
                 <div>{Info.name}</div>
                 <div> I'm a <span></span></div>
                 <div>Hello! My name is [kisun(kartik ) sah], and I am currently pursuing a Bachelor of Computer Applications (BCA). 
                    As an enthusiastic and dedicated student, 
                    I am passionate about technology and the ever-evolving world of software development.  
                    In addition to my academic pursuits, I am a budding Full Stack Developer. 
                    This role allows me to blend my knowledge of front-end and back-end 
                    technologies to create dynamic and responsive web applications. My journey in full stack development with DSA
                    has equipped me with a diverse skill set, including proficiency 
                    in ( HTML, CSS, JavaScript, DSA , java , React, Node.js, Express, and MongoDB, among other tools and frameworks ).
                    </div>
        </div>
        <div>

        </div>
    </div>
  )
}
export default About;