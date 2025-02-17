'use client'
import StarIcon from '@/assets/icons/star.svg'
import { Fragment } from 'react';

import useLanguageStore from "@/lib/useLanguageStore";

const words = {
  en:[
    "Performant",
    "Accessible",
    "Secure",
    "Responsive"
  ,  "Interactive",
    "User Friendlx",
    "Search Optimized",
    "Usable",
    "Reliable",
  ],
  de: [
    "Leistungsfähig",
    "Zugänglich",
    "Sicher",
    "Reaktionsschnell",
    "Interaktiv",
    "Benutzerfreundlich",
    "Suchmaschinenoptimiert",
    "Benutzbar",
    "Zuverlässig",
  ]
}

export const TapeSection = () => {

  const { language } = useLanguageStore();

  return (
  <div className="py-16 lg:py-24 overflow-x-clip">
    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1'>
      <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
        <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'
        >
          {[...new Array(2)].fill(0).map((_,idx)=> (
            <Fragment key={idx}>
              {language === "de" ? words.en.map((word) => (
            <div className='inline-flex gap-4 items-center' key={word}>
              <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
              <StarIcon className="size-6 text-gray-900 -rotate-12" />
            </div>
          )) : words.de.map((word) => (
            <div className='inline-flex gap-4 items-center' key={word}>
              <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
              <StarIcon className="size-6 text-gray-900 -rotate-12" />
            </div>
          ))}
              {}
            </Fragment>
          ))}
          
        </div>
      </div>
    </div>
  </div>
  );
};
