import memojiImage from '@/assets/images/memoji-computer.png';
import Image from "next/image";
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from "@/assets/icons/star.svg"
import HeroOrbit from '@/components/HeroOrbit';


export const HeroSection = () => {
  return <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
    <div className='absolute inset-0 -z-30 opacity-5' style={{
      backgroundImage: `url(${grainImage.src})`,
    }}>
    </div>

    <div className='hero-ring'> </div>
    <div className='hero-ring size-[920px]'></div>
    <div className='hero-ring size-[1120px]'></div>
    <div className='hero-ring size-[1320px]'></div>

    <HeroOrbit size={800} rotation={-72}>
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>

    <HeroOrbit size={550} rotation={20}>
    <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>

    <HeroOrbit size={590} rotation={98}>
    <StarIcon className="size-8 text-emerald-300" />
    </HeroOrbit>
    

    <div className="container">
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[200px]' alt='Person peeking from behind laptop'/>
        <div className='bg-gray-950 border-gray-800 px-4 py-1.5 items-center gap-4 inline-flex rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full'></div>
          <div className='text-sm font-semibold'>Availabel for new projects</div>
        </div>
      </div>

      <div className='max-w-lg mx-auto'>
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facere nobis explicabo molestiae repellendus quas consectetur eligendi, debitis omnis praesentium commodi tenetur pariatur nostrum neque tempora?
        </p>
      </div>  

      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl'>
          <span>👋</span>
          <span className='font-semibold'>Let's Connect</span>

        </button>
      </div>
      </div>
  </div>;
};
