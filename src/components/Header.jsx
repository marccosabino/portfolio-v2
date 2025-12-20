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
        <a href="#home" className="brand"></a>

        <nav className="nav">
          <a href="#home" className="nav-link contact-btn">Início</a>
          <a href="#projetos-destaque" className="nav-link contact-btn">Destaques</a>
          <a href="#stack-tecnica" className="nav-link contact-btn">Stack</a>
          <a href="#cta-final" className="nav-link contact-btn">Contato</a>
        </nav>
      </div>
    </header>
  );
}
