
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconGitBranch } from "@tabler/icons-react";
import { Info } from "../User"; // Ensure this import path is correct

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10 mt-20 mb-0 font-mono">
            <div className="mx-auto max-w-6xl flex flex-col items-center gap-4">
                <div className="text-4xl text-primaryColor font-semibold">
                    {Info.name}
                </div>
                <div className="text-gray-400 text-lg text-center">
                    Copyright &copy; {new Date().getFullYear()} {Info.name} | All rights reserved
                </div>
                
                {/* Social Media Links */}
                <div className="flex space-x-6 mt-4">
                    <a href="https://www.facebook.com/kartik.shah.33671748" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primaryColor">
                        <IconBrandFacebook size={24} />
                    </a>
                    <a href="https://github.com/kisun-sah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primaryColor">
                        <IconGitBranch size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/kisun-sah/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primaryColor">
                        <IconBrandLinkedin size={24} />
                    </a>
                    <a href="https://www.facebook.com/kartik.shah.33671748" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primaryColor">
                        <IconBrandInstagram size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
