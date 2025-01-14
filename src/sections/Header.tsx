'use client';

import React from 'react';
import { useState } from 'react';


export const Header = () => {
  const [isActive, SetIsActive] = useState(
    [
      {
        name: "Home",
        url: "#home",
        active: false
      },
      {
        name: "Projects",
        url: "#projects",
        active: false
      },
      {
        name: "About",
        url: "#about",
        active: false
      },
      {
        name: "Contact",
        url: "#contact",
        active: false
      },
    ]
  );
  const bg = isActive ? "red" : "green";

  function handleClick() {
    
  }

  return <div className="flex justify-center items-center fixed top-3 z-10 left-[50%] translate-x-[-50%]">
    <nav className="flex gapa-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">

      {isActive.map((link)=> (
        <a key={link.name} href={link.url}  className={"nav-item"}>{link.name}</a>
      ))}
    </nav>
  </div>;
};
