'use client';

import React, { useState, useEffect } from 'react';
import LanguageSwitcher from "@/components/LanguageSwitcher";
import useLanguageStore from "@/lib/useLanguageStore";

export const Header = () => {
  const { language } = useLanguageStore();

  const [isActive, setIsActive] = useState(
    [
      {
        name: "Home",
        url: "#home",
        active: true
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

  useEffect(() => {
    
    const updatedLinks = [
      {
        name: language === "de"  ? "Home" : "Startseite",
        url: "#home",
        active: true
      },
      {
        name: language === "de" ? "Projects" : "Projekte",
        url: "#projects",
        active: false
      },
      {
        name: language === "de" ? "About" : "About",
        url: "#about",
        active: false
      },
      {
        name: language === "de" ? "Contact": "Kontakt" ,
        url: "#contact",
        active: false
      },
    ];

    setIsActive(updatedLinks);
  }, [language]); 

  const navbarActiveStyle = "bg-white transition duration-900 text-gray-900 hover:bg-white/70";

  function handleClick(event: string) {
    setIsActive((prev) => {
      return prev.map((item) => {
        if (item.name === event) {
          return { ...item, active: !item.active };
        } else {
          return { ...item, active: false };
        }
      });
    });
  }

  return (
    <div className="flex justify-center items-center fixed top-3 z-10 left-[50%] translate-x-[-50%]">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {isActive.map((link) => (
          <a
            onClick={() => handleClick(link.name)}
            id={link.name}
            key={link.name}
            href={link.url}
            className={`nav-item ${link.active ? navbarActiveStyle : null}`}
          >
            {link.name}
          </a>
        ))}
        <LanguageSwitcher />
      </nav>
    </div>
  );
};