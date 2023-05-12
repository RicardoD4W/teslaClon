import video from "../assets/video.webm";

const LandingSection = () => {
  return (
    <section>
      <div className="relative z-30 flex flex-col items-center justify-between h-screen">
        <header className="text-center">
          <h2 className="p-3 pt-48 text-5xl font-medium text-white ">
            Disfrute de Tesla
          </h2>
          <p className="text-lg text-white ">
            Programe una prueba de conducción hoy mismo
          </p>
        </header>

        <footer className="flex flex-col justify-end pb-28">
          <a
            className="py-2 text-lg font-semibold text-white transition-colors duration-300 border-4 border-white rounded px-14 bg-white/5 backdrop-blur-md hover:bg-black/30 "
            href="#"
          >
            Prueba de conducción
          </a>
        </footer>
      </div>

      <video
        className="absolute top-0 bottom-0 z-10 object-cover w-full h-full"
        autoPlay
        loop
        muted
        src={video}
      ></video>
    </section>
  );
};

export default LandingSection;
