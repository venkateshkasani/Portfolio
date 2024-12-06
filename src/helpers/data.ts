interface Prop {
    title:string,
    link:string,
    path:string
}
interface links {
    linkedin:string,
    twitter:string,
    github:string
}
export const MediaLinks:links = {
  github:"https://www.github.com/venkateshkasani",
  twitter:"https://x.com/VKasani81912",
  linkedin:"https://www.linkedin.com/in/venkatesh-kasani-8614b1239/"
}
export const Ecommerce:Prop = {
 title:"Ecommerce App",
 link:"https://thedarkknights.vercel.app/electronics/headphones",
 path:"/img/batstore.png"
}
export const Apple:Prop = {
 title:"Apple's Complex Frontend",
 link:"https://applebyvenkateshh.vercel.app/",
 path:"/img/apple_page.png"
}
export const PhotoManager:Prop = {
 title:"Photo Manager App",
 link:"https://github.com/venkateshkasani/Photo-manager-app",
 path:"/img/photo_manager.png"
}
