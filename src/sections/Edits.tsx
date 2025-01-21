'use client';

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import { Fragment } from "react";
import Image from "next/image";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import logo from "@/assets/images/logo.png";

import useLanguageStore from "@/lib/useLanguageStore";

const Edits = () => {

  const { language } = useLanguageStore();

  const edits = [
    {
      name: "JP plus+",
      text: "Happy Lunch Box",
      logo: logo,
      link: "juice_plus_gmoc0w",
    },
    {
      name: "OBI",
      text: "Mach es zu deinem Projekt",
      logo: logo,
      link: "OBI_Mach_es_zu_deinem_Projekt_hxkodo",
    },
    {
      name: "Envie de",
      text: "Bathroom",
      logo: logo,
      link: "CEDEO_FACTORY_k17ig4",
    },
    
  ];

  

  return (
    <div className="py-1 lg:py-24">
      <div className="container">
        <SectionHeader
          title={language === "de" ? "Take a Look Around" : "Schau dich um"}
          eyebrow="Videos & Clips"
          description={language === "de" ? "Some of my videos and edits, showcasing my expertise in storytelling and visual creativity." : "Hier sind einige meiner Videos und Clips."  }
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(4)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {edits.map((edit) => (
                  <Card
                    key={edit.name}
                    className="max-w-[400px] w-[300px] md:w-auto md:max-w-xl mt-6 hover:scale-105 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="flex size-14 bg-gray-700 items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={logo}
                          alt={edit.name}
                          className="size-10"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div className="font-semibold">{edit.name}</div>
                        <div className="text-sm text-white/40">
                          {edit.text}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-[400px] mt-4">
                      <CldVideoPlayer
                        width="1920"
                        height="1080"
                        src={edit.link}
                      />
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edits;
