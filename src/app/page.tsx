import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from '@/sections/Tape'
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import ContactForm from "@/sections/Form";
import { EditsSection } from "@/sections/Edits";

export default function Home() {
  return (
    <div>
     <Header />
     <HeroSection />
     <ProjectsSection />
     <TapeSection />
     <EditsSection />
     <AboutSection />
     <ContactSection />
     <ContactForm />   
     <Footer />
    </div>
  );
}
