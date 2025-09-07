import gsap from "gsap";
import { HeartFilled } from "@ant-design/icons";
export const FooterTimeline = () => {
  const tl = gsap.timeline();
  tl.to('.footerSection',{
  opacity:1,
  y:0,
  duration:0.2  
  })
  return tl;
}

const Footer = () => {
  return (
    <section className="footerSection w-[100vw]">
      <p className="text-slate-500 text-xs pb-5">Built with <HeartFilled className=" text-slate-400 px-1" /> by Venkatesh Kasani.</p>
    </section>
  );
};

export default Footer;
