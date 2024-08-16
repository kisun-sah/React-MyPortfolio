import { Anchor } from "@mantine/core";

const Header = () => {
    return (
        <nav className="flex bg-bgColor text-primaryColor justify-between px-4 py-6 h-[10vh]">
            <h1 >My Portfolio</h1>
            <div className="space-x-4">
                <a className="text-textColor" href="#about" > About</a>
                <a href="#skills" > Skills</a>
                <a href="#projects" > Projects</a>
                <a href="#experiences" > Experiences</a>
                <a href="#contact" > Contact</a>
            </div>
        </nav>
    );
}

export default Header;
