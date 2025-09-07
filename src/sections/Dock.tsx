"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { NavLink } from "react-router-dom";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <div className="z-100">
      <Dock direction="middle" className="z-50 px-0">
              <NavLink to={'https://www.github.com/venkateshkasani'} target="_blank">
                  <DockIcon>
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        </DockIcon>
        </NavLink>
              <NavLink to={'https://x.com/VKasani81912'} target="_blank">
                  <DockIcon>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
        </DockIcon>
        </NavLink>
              <NavLink to={'https://www.linkedin.com/in/venkateshkasani14/'} target="_blank">
                  <DockIcon>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
        </DockIcon>
        </NavLink>
              <NavLink to={'https://drive.google.com/file/d/1vy4o6FnZgkoT51l22l_TGkGF-924hWFE/view?usp=sharing'} target="_blank">
                  <DockIcon>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="white" stroke="white" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.5 8a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m6.743 .03a1 1 0 0 0 -1.213 .727l-.53 2.119l-.53 -2.119a1 1 0 1 0 -1.94 .486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5 -6a1 1 0 0 0 -.727 -1.213m-1.244 -7.031l4.001 4.001h-4z" /></svg>
        </DockIcon>
        </NavLink>
      </Dock>
    </div>
  );
}
