import modal from '@/assets/images/work/01_Login_Modal.png'
import estate from '@/assets/images/work/02_Estate.png'
import assembly from '@/assets/images/work/03_Assembly.png'
import janbihl from '@/assets/images/work/04_JanBihl.png'

import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Modal",
    year: "2024",
    title: "Login Modal",
    results: [
      { title: "HTML" },
      { title: "CSS" },
      { title: "Tailwind" },
    ],
    link: "https://j4nbi.github.io/login_modal_Tailwind/",
    github: "https://github.com/J4NBI/login_modal_Tailwind",
    image: modal,
  },
  {
    company: "Estate",
    year: "2024",
    title: "Explore homes that fit your dreams",
    results: [
      { title: "React" },
      { title: "Tailwind" },
      { title: "Motion" },
    ],
    link: "https://j4nbi.github.io/real-estate/",
    github:"https://github.com/J4NBI/real-estate",
    image: estate,
  },
  {
    company: "Game",
    year: "2024",
    title: "Assembly Endgame",
    results: [
      { title: "React" },
      { title: "Hooks" },
      { title: "Responsive" },
    ],
    link: "https://j4nbi.github.io/assembly_endgame_v2/",
    github:"https://github.com/J4NBI/assembly_endgame_v2",
    image: assembly,
  },
  {
    company: "Portfolio",
    year: "2024",
    title: "Next.js Portfolio",
    results: [
      { title: "Next.js" },
      { title: "Hooks" },
      { title: "Motion" },
    ],
    link: "#home",
    github:"https://github.com/J4NBI/Portfolio",
    image: janbihl,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-20">
      <div className="container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging experience."/>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${index * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-400 to-sky-200 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex items-center gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6"/>
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <div className='flex gap-4 md:flex-row flex-col'>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-[200px] mx-auto md:w-auto rounded-xl
                    font-semibold flex justify-center gap-2 items-center mt-8 px-6 hover:shadow-3xl">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                  <a href={project.github} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-[200px] mx-auto md:w-auto rounded-xl
                    font-semibold flex justify-center gap-2 items-center mt-8 px-6 hover:shadow-3xl">
                      <span>View Code</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <Image className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" src={project.image} alt={project.title} />
              </div>
              
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
