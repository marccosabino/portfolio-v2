import React, { useEffect, useState } from "react";
import "./Header.css";

export default function Header() {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !isShrunk) {
        setIsShrunk(true);
      } else if (window.scrollY <= 20 && isShrunk) {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isShrunk]);

  return (
    <header className={`header ${isShrunk ? "shrink" : ""}`}>
      <div className="header-container">

        <nav className="nav">
          <a href="#home" className="nav-link">Início</a>
          <a href="#projetos" className="nav-link">Projetos</a>
          <a href="#sobre" className="nav-link">Sobre</a>
          <a href="#contato" className="nav-link contact-btn">Contato</a>
        </nav>
      </div>
    </header>
  );
}
