'use client';

import React from 'react';
import { useState } from 'react';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useLanguageStore from "@/lib/useLanguageStore";

export const HeaderDE = () => {
  const { language } = useLanguageStore();
  const [isActive, SetIsActive] = useState(
    [
      {
        name: "Home",
        url: "#home",
        active: true
      },
      {
        name: "Projekte",
        url: "#projects",
        active: false
      },
      {
        name: "Über mich",
        url: "#about",
        active: false
      },
      {
        name: "Kontakt",
        url: "#contact",
        active: false
      },
    ]
  );

  const bg = isActive ? "red" : "green";

  const navbarActiveStyle = "bg-white transition duration-900 text-gray-900 hover:bg-white/70"

  function handleClick(event: string) {
    SetIsActive((prev) => {
      return prev.map((item) => {
        if (item.name === event) {
          return { ...item, active: !item.active };
        } else {
          return {...item, active: false};
        }
      });
    });
  }

  return <div className="flex justify-center items-center fixed top-3 z-10 left-[50%] translate-x-[-50%]">
    <nav className="flex gapa-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">

      {isActive.map((link)=> (
        <a onClick={() => handleClick(link.name)} id={link.name} key={link.name} href={link.url}  className={`nav-item ${ link.active ? navbarActiveStyle : null}`}>{link.name}</a>
      ))}
      <LanguageSwitcher />
    </nav>
  </div>;
};
