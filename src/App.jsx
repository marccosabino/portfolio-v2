import Header from "./components/Header";
import Hero from "./components/Hero";
import TechSnapshot from "./sections/TechSnapshot";
import ProjetosDestaque from "./sections/ProjetosDestaque";
import StackTecnica from "./sections/StackTecnica";
import CTAFinal from "./sections/CTAFinal";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <TechSnapshot />
      <ProjetosDestaque />
      <StackTecnica />
      <CTAFinal />
      <Footer />
    </>
  );
}
