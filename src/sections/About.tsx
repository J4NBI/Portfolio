'use client';
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import ReactIcon from '@/assets/icons/react.svg';
import CssIcon from "@/assets/icons/css3.svg";
import HTMLIcon from '@/assets/icons/html5.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg'
import mapImage from '@/assets/images/map.png';
import hero from '@/assets/images/jan_alpha_green.png'
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect} from "react";

import useLanguageStore from "@/lib/useLanguageStore";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
  
  
]

const hobbies = [
  {
    title: "Guitar",
    emoji: "🎸",
    left: "5%",
    top: "5%",

    
  },
  {
    title: "Coding",
    emoji: "💻",
    left: "50%",
    top: "25%",
  },
  {
    title: "books",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Longboard",
    emoji: "🛹",
    left: "60%",
    top: "52%",
  },
  {
    title: "Little daughter",
    emoji: "👧",
    left: "35%",
    top: "75%",
  },
  {
    title: "Nature",
    emoji: "🌳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cooking",
    emoji: "🥗",
    left: "55%",
    top: "5%",
  },
];

const hobbiesDE = [
  {
    title: "Gitarre",
    emoji: "🎸",
    left: "5%",
    top: "5%",
  },
  {
    title: "Programmieren",
    emoji: "💻",
    left: "50%",
    top: "25%",
  },
  {
    title: "Bücher",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Longboard",
    emoji: "🛹",
    left: "60%",
    top: "52%",
  },
  {
    title: "Kleine Tochter",
    emoji: "👧",
    left: "35%",
    top: "75%",
  },
  {
    title: "Natur",
    emoji: "🌳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Kochen",
    emoji: "🥗",
    left: "55%",
    top: "5%",
  },
];

export const AboutSection = () => {
  const constainRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true });

  const bookFade = useAnimation()

  const { language } = useLanguageStore();

  useEffect(() => {
    if(isInView){
      bookFade.start("visible")
    }
  }, [isInView]);
    
  return (
    <div id="about" className="pb-20 pt-20">

      <div className="container">
        <SectionHeader
          eyebrow={language === "de" ? "About me" : "Über mich"}
          title={language ==="de" ? "A Glimpse Into My World" : "Ein Blick in meine Welt"}
          description={language === "de" ? "Who I am, what I do, and what inspires me." :"Wer ich bin, was ich tue und was mich inspiriert."}
        />
        <div className="mt-20 flex flex-col gap-6">

          <div className="md:flex items-center justify-center gap-8">
            <Card className="h-[320px] flex-shrink-0 mb-6 md:mb-0 md:pt-6">
              <CardHeader title={language ==="de" ? "Books" : "Bücher"} description={language === "de" ? "What I'm currently reading." : "Was ich gerade lese." }/>
              <div className="w-40 mx-auto mt-8">
                <motion.div
                  ref={imageRef}
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={bookFade}
                  transition={{
                    duration: 0.5, delay:0.25
                  }}
                >
                  <Image src={bookImage} alt="book cover"/>
                </motion.div>

              </div>
            </Card>
            <Card className="h-[320px] w-full ">
              <CardHeader className="md:px-6 md:pt-0" title={language === "de" ? "My Toolbox" : "Meine Toolbox" } description={language === "de" ? "Explore the technologies and tools I use to create digital experinces." : "Entdecken Sie die Technologien und Tools, die ich verwende, um digitale Erlebnisse zu schaffen." }/>
              <ToolboxItems items={toolboxItems} className="mt-6 md:mt-10" itemsWrapperClassName="animate-move-left-two [animation-duration:35s]"/>
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName=" -translate-x-1/2 animate-move-right [animation-duration:35s]"/>
            </Card>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col mb-6">
            <CardHeader className="px-6 py-6" title={language === "de" ? "Beyond the Code" : "Meine Hobbys" } description={language === "de" ? "Explore my interests and hobbies besyyond the digital realm." : "Erfahre mehr über meine Interessen und Hobbys jenseits der digitalen Welt." }/>
            <div className="relative flex-1" ref={constainRef}>
                {language === "de" ? hobbies.map(hobby => (
                  <div key={hobby.title} >
                    <motion.div className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" key={hobby.title}
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constainRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  </div>
                )) :
                hobbiesDE.map(hobby => (
                  <div key={hobby.title} >
                    <motion.div className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" key={hobby.title}
                    style={{
                      left: hobby.left,
                      top: hobby.top
                    }}
                    drag
                    dragConstraints={constainRef}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  </div>
                ))}
                
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative">
                <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="map" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <Image className="size-20 " src={hero} alt="hero image" />
                  <h2 className="text-bold text-black/50 mt-2 mx-4 absolute font-sans lg:hidden">BERLIN</h2>
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
