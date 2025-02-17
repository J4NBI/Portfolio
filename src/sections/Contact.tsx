'use client';
import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg';
import useLanguageStore from "@/lib/useLanguageStore";


export const ContactSection = () => {

  const { language } = useLanguageStore();

  return (
    <div id="contact" className='py-16 pt-12 lg:py-24 lg:pt-20'>
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl relative overflow-hidden z-0'>
          <div className='absolute inset-0 opacity-5 -z-10'
          style={{
           backgroundImage: `url(${grainImage.src})` 
          }}
          >
          </div>
          <div className='flex flex-col pt-10 md:pt-0 md:flex-row items-center md:gap-16 justify-center'>
            <div className=''>
              <h2 className='font-serif text-2xl text-center md:text-left md:text-3xl'>{language === "de" ? "Let's create something amazing together" :  "Wollen wir gemeinsam etwas neues schaffen"}</h2>
              <p className='text-sm mt-2 text-center md:text-left md:text-base'>{language === "de" ? "Get in touch with me." : "Tritt mit mir in Kontakt und lass uns vernetzen."}</p>
            </div>
            <div className='md:self-start md:mt-4 lg:-mt-2'>
            <a href="#form" className='font-semibold'>
              <button className='text-white bg-gray-900 inline-flex justify-center text-center items-center px-6 h-12 rounded-xl gap-2 my-12 w-max border border-gray-900 hover:shadow-3xl transition-all duration-200 active:scale-90'>
                {language === "de" ? "Contact Me" : "Kontaktiere mich"}
                <ArrowUpRight className="size-4" />
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
