import React from "react";
import gsap from "gsap";
import { GithubOutlined,TwitterOutlined,LinkedinFilled } from "@ant-design/icons";
interface structure {
    linkedin:string,
    twitter:string,
    github:string,
    coffee:string
}
export const FooterTimeline = () => {
  const tl = gsap.timeline();
  tl.to('.footerSection',{
  opacity:1,
  y:0,
  duration:0.2  
  })
  return tl;
}

const Footer: React.FC<{links:structure}> = ({links}) => {
  return (
    <section className="footerSection w-[100vw]">
        <hr className="mx-10 border border-gray-900" />
      <div className="text-xs mx-10 font-sans">
        <div id="footerDiv" className="flex justify-between py-4">
        <div className="text-left flex items-center justify-center">
            <p>Designed & developed by Venkatesh Kasani.</p>
        </div>
          <div className="flex flex-wrap justify-between ml-2 mr-10">
          <div className="mediaLink my-1 sm:my-0">
          <a className="text-[#beb9b9] hover:text-white" href={links.github} target="blank"> GitHub {" "} <GithubOutlined /></a> 
            <p className="mx-2 hidden md:inline">|</p> 
          </div>
          <div className="mediaLink my-1 sm:my-0">
          <a className="text-[#beb9b9] hover:text-white" href={links.twitter} target="blank" > Twitter {" "} <TwitterOutlined /></a>
            <p className="mx-2 hidden md:inline">|</p> 
          </div>
          <div className="mediaLink my-1 sm:my-0">
          <a className="text-[#beb9b9] hover:text-white" href={links.linkedin} target="blank" > LinkedIn {" "} <LinkedinFilled /></a>
          <p className="mx-2 hidden md:inline">|</p> 
          </div>
          <div className="mediaLink my-1 sm:my-0">
          <a className="text-[#beb9b9] hover:text-white" href={links.coffee} target="blank"> Buy me a Coffee {" "} </a> 
            <p className="mx-2 hidden md:inline">|</p> 
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
