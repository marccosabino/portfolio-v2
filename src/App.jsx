import Header from "./components/Header";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Header />

      {/* Espaço para compensar o header fixo (se existir) */}
      <div className="pt-28 px-6">
        <Hero />

        {/* resto do conteúdo futuramente */}
      </div>
    </>
  );
}
