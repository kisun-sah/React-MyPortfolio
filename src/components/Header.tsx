import { Anchor } from "@mantine/core";
import { IconHexagonLetterK } from "@tabler/icons-react";
import Sidebar from "./Sidebar";

const Links =["About" ,"Project" ,"Experiences" , "Skills","Contacts"];
const navLinks = (col:Boolean) => {
    return Links.map((Link , index) =>{
        return   <a className={`${col ? 'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor`} href={`#${Link}`} > <span className="text-primaryColor">0{index +1}.</span>{Link}</a>
    })
}
const Header = () => {
    return (
        <nav className="flex bg-bgColor  dm-mono-regular text-primaryColor  items-center justify-between px-10  h-[15vh]">
           <IconHexagonLetterK  size={58} className="z-10"/>
            <div className=" flex space-x-4 md-mx:hidden " >

               {navLinks(false)}
            </div>
            <Sidebar/>
        </nav>
    );
}

export default Header;
export {navLinks};
