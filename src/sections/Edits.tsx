'use client';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import { Fragment } from "react";

import YoutubeIcon from "@/assets/images/youtube.png";
import Image from "next/image";

import jp from '@/assets/images/jp.webp'



//SHADCN

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const edits = [
  {
    text: "juice plus+",
    subText: "Happy lunch box",
    image: jp,
    link: "https://www.youtube.com/watch?v=ZYHGHuGoFZQ",
  },
];

const videoOptions = {
  height: '390',
  width: '640',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

export const EditsSection = () => {
  return (
    <div className="py-1 lg:py-24 relative">
      <div className="container">
        <SectionHeader
          title="Take a Look Around"
          eyebrow="Videos & Clips"
          description="Take a look at some of my latest videos and edits, showcasing my expertise in storytelling and visual creativity."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {edits.map((edit) => (
                  <Card
                    key={edit.text}
                    className=" mt-6 hover:-rotate-3 transition duration-300 h-[300px]"
                  >
                    <div className="">
                      <h2 className="font-semibold text-xl  text-emerald-300">
                        {edit.text}
                      </h2>
                      <p className="text-sm mb-4">{edit.subText}</p>
                    </div>
                    <div className="relative w-ful group">
                      <Image
                        className="group-hover:opacity-25"
                        src={edit.image}
                        alt={edit.text}
                      />
                      <div className="absolute top-0 left-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="absolute inset-0 top-[60px] translate-x-[280%] left-0 w-12 group-hover:block hover:scale-110 ">
                              <Image
                                className="invert"
                                src={YoutubeIcon}
                                alt="YoutubeIcon"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[700px] text-black bg-none">
                            <h1>{edit.text}</h1>
                            <div className="flex items-center justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/ZYHGHuGoFZQ?si=OXWl6CzHcUo05pBJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
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
