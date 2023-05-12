import GenericSection from "./components/GenericSection";
import LandingHeader from "./components/LandingHeader";
import LandingSection from "./components/LandingSection";
import img from "./assets/model-y.avif";

function App() {
  return (
    <>
      <LandingHeader />

      <main className="relative w-full h-screen overflow-auto snap-mandatory snap-y">
        <div className="snap-center">
          <LandingSection />
        </div>

        <div className="snap-center">
          <GenericSection
            title={"Model Y"}
            subtitle="Concertar una prueba de conducción"
            titleLink1="Explorar inventario"
            titleLink2="Pedido Personalizado"
            color="black"
            img={img}
          />
        </div>
      </main>
    </>
  );
}

export default App;
