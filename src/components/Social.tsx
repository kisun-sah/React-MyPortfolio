import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const Social = () => {
  const socialLinks = [
    { link: "https://github.com/kisun-sah", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/kisun-sah/", icon: IconBrandLinkedin },
    {
      link: "https://www.facebook.com/kartik.shah.33671748",
      icon: IconBrandFacebook,
    },
    { link: "https://bit.ly/3WRu4lz", icon: IconBrandWhatsapp },
    { link: "https://leetcode.com/u/kishunsah783/", icon: IconBrandLeetcode },
  ];

  const SocialIcons = socialLinks.map((socialLink, index) => {
    return (
      <a
        href={`${socialLink.link}`}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
        className="font-mono text-lg hover:text-primaryColor transform transition-all duration-300"
      >
        <div data-aos="fade-up-right">
          <socialLink.icon size={30} />
        </div>
      </a>
    );
  });

  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:fixed sm:bottom-40 sm:-left-48 sm:rotate-90 text-textColor">
      {SocialIcons}
      <hr className="border-[2px] w-20 sm:w-40 rounded-full bg-bgColor border-textColor" />
    </div>
  );
};

export default Social;
