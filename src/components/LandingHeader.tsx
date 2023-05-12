import Logo from "../components/Logo";
import { MODELS, MODES } from "../info/Models";

const LandingHeader = () => {
  return (
    <header className="fixed top-0 z-40 flex items-center justify-between w-full px-10 py-3 text-white">
      <div className="flex flex-grow basis-0">
        <Logo />
      </div>

      <nav>
        <ul className="flex text-lg [&>li>a]:font-medium [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          {MODELS.map((model) => (
            <li key={model}>
              <a href="#">{model}</a>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="flex justify-end flex-grow flex-end basis-0">
        <ul className="flex text-lg [&>li>a]:font-medium [&>li>a]:text-white [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2">
          {MODES.map((mode) => (
            <li key={mode}>
              <a href="#">{mode}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default LandingHeader;
