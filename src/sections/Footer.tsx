'use client';

import ArrowUpRight from '@/assets/icons/arrow-up-right.svg'
import useLanguageStore from "@/lib/useLanguageStore";

const footerLinks =[
  
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jan-bihl-ab1ba330/"
  },
  {
    title: "GitHub",
    href: "https://github.com/J4NBI"
  },
  {
    title: "Editor Page",
    href: "https://shiny-mermaid-029f94.netlify.app/"
  },
]


export const Footer = () => {

  const { language } = useLanguageStore();
  return (
    <footer>
      <div className='relative overflow-x-clip'>
        <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>
        <div className="container">
          <div className='border-t border-white/25 py-6 text-sm flex flex-col md:flex-row items-center gap-8 justify-center'>
            <div className='text-white/40'>&copy; 2025. All rights reserved.</div>
            <nav className='flex flex-col md:flex-row items-center gap-8'>
              {footerLinks.map((footerLink)=>{
                return (
                  <a key={footerLink.title} className='inline-flex items-center gap-1.5' href={footerLink.href} target='_blank'>
                    <span className='font-semibold'>{footerLink.title}</span>
                    <ArrowUpRight className="size-4"/>
                  </a>
                )
              })}
            </nav>
            <div className='flex gap-8 z-50'>
              <a href="impressum" target="_blank">Impressum</a>
              <a href="/datenschutz.pdf" target="_blank">{language === "de" ? "Privacy Policy" : "Datenschutzerklärung"}</a>
          </div>
            
          </div>
        
        </div>
      </div>
      
    </footer>
  );
};
