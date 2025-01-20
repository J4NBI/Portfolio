"use client";
import memojiImage from "@/assets/images/jan_alpha.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div id="home">
      <div className="py-32 md:py-48 lg:py-60 relative -z-2 overflow-x-clip">
        <div className="z-5">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="hero-ring -z-20"> </div>
          <div className="hero-ring size-[920px] -z-20"></div>
          <div className="hero-ring size-[1120px] -z-20"></div>
          <div className="hero-ring size-[1320px] -z-20"></div>
          <HeroOrbit
            size={1050}
            rotation={-72}
            spinDuration="50s"
            shouldOrbit={true}
          >
            <StarIcon className="size-28 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit
            size={855}
            rotation={200}
            spinDuration="40s"
            shouldOrbit={true}
          >
            <StarIcon className="size-16 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit
            size={700}
            rotation={20}
            spinDuration="30s"
            shouldOrbit={true}
          >
            <StarIcon className="size-12 text-emerald-300" />
          </HeroOrbit>

          <HeroOrbit
            size={540}
            rotation={98}
            spinDuration="20s"
            shouldOrbit={true}
          >
            <StarIcon className="size-8 text-emerald-300" />
          </HeroOrbit>
        </div>

        <div className="container z-100 md:-mt-20">
          <motion.div
            className="flex flex-col items-center"
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <Image
              src={memojiImage}
              className="size-[200px]"
              alt="Person peeking from behind laptop"
            />
            <div className="bg-gray-950 border-gray-800 px-4 py-1.5 items-center gap-4 inline-flex rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-semibold">
                Availabel for new projects
              </div>
            </div>
          </motion.div>

          <motion.div
            className="max-w-lg mx-auto"
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.5,
              delay: 0.25,
            }}
          >
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide leading-10">
              Frontend{" "}
              <span className="text-emerald-300 leading-10">Developer</span>
              <br /> Editor
            </h1>
            <p className="mt-4 text-center text-white/80 md:text-lg">
              I am Jan, a creative mind from Berlin with a background in media
              design. After earning my degree as an editor at the Film Academy
              and spending years as a freelance editor, I discovered my passion
              for graphic design and web development. Today, I combine my
              technical expertise and creative vision to design unique,
              functional websites.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-8">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="#projects">
                <motion.button
                  className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                  }}
                  whileTap={{ scale: 0.9, rotate: 3 }}
                >
                  <span className="font-semibold">Explore My Work</span>
                  <ArrowDown className="size-4" />
                </motion.button>
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="#contact">
                <motion.button
                  className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-8 rounded-xl"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    duration: 0.5,
                    delay: 0.8,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span>👋</span>
                    <span className="font-semibold">Let's Connect</span>
                  </div>
                </motion.button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
