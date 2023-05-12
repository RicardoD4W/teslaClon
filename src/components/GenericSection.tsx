import { GenericSectionProps } from "../types/GenericSectionsProps";

const ChargeSection = ({
  title,
  subtitle,
  titleLink1,
  titleLink2,
  img,
  color,
}: GenericSectionProps) => {
  return (
    <section className="relative">
      <div className="relative z-30 flex flex-col items-center justify-between h-screen">
        <header className="text-center">
          <h2 className={`p-3 pt-48 text-5xl font-medium text-${color} `}>
            {title}
          </h2>
          <p className="text-lg text-${color} ">{subtitle}</p>
        </header>

        <footer className="flex flex-col justify-end pb-28">
          <div className="flex items-center gap-x-4">
            <a
              className={`py-2 text-lg font-semibold text-white transition-colors duration-300  rounded px-14 bg-black/70 backdrop-blur-md hover:bg-black/30`}
              href="#"
            >
              {titleLink1}
            </a>
            <a
              className={`py-2 text-lg font-semibold text-black transition-colors duration-300  rounded px-14 bg-white/70 backdrop-blur-md hover:bg-black/30 `}
              href="#"
            >
              {titleLink2}
            </a>
          </div>
        </footer>
      </div>

      <img
        className="absolute top-0 object-cover object-center w-full h-full"
        src={img}
        alt={title}
      />
    </section>
  );
};

export default ChargeSection;
