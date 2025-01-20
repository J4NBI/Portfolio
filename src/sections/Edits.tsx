import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import React from 'react'
import { Fragment } from "react";
import Image from "next/image";



const Edits = () => {

  const edits = [
    {
      name: "Alex Turner",
      position: "Marketing Manager @ TechStartups",
      text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: "",
    },
  ]
    
  return (
    <div className="py-1 lg:py-24">
      <div className="container">
      <SectionHeader
          title="Take a Look Around"
          eyebrow="Videos & Clips"
          description="Take a look at some of my latest videos and edits, showcasing my expertise in storytelling and visual creativity."
        />

        
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index)=> (
              <Fragment key={index}>
                {edits.map((edit) => (
            <Card key={edit.name} className="max-w-xs md:max-w-md mt-6 hover:-rotate-3 transition duration-300">
              <div className="flex gap-4 items-center">
                <div className="flex size-14 bg-gray-700 items-center justify-center rounded-full flex-shrink-0">
                  <Image src={""} alt={edit.name} className="max-h-full"/>
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">{edit.name}</div>
                  <div className="text-sm text-white/40">{edit.position}</div>
                </div>
              </div>
              <p className="mt-4 mdmt-6 text-sm md:text-base">{edit.text}</p>
            </ Card>
          ))}

              </Fragment>
            ))}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edits;