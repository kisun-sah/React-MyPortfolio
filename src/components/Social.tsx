import { IconBrandFacebook, IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react";

const Social = () => {
    const socialLinks = [ {link:"https://github.com/kisun-sah", 
     icon:IconBrandGithub },

    {link:"https://www.linkedin.com/in/kisun-sah/", icon:IconBrandLinkedin } ,
        
     {link:"https://www.facebook.com/kartik.shah.33671748", icon:IconBrandFacebook     } ,

     {link:"https://bit.ly/3WRu4lz", icon:IconBrandWhatsapp     } ,

     {link:"https://leetcode.com/u/kishunsah783/", icon:IconBrandLeetcode     } ,

    ];

    const SocialIcons = socialLinks.map((socialLink) =>{

      return   <a href={`${socialLink.link}`} target="blank" className="font-mono text-lg -rotate-90 hover:text-primaryColor hover:-translate-x-2 translate transform">
    <div data-aos="fade-up-right">  <socialLink.icon  size={30} />  </div>
    </a>
    })
  return (
    <div   className="flex items-center  text-textColor gap-10 fixed bottom-40   -left-48 rotate-90">
      {SocialIcons}
    <hr className="boder-[2px] w-40 rounded-full bg-bgColor border-textColor " />
</div>
  )
}
export default Social;