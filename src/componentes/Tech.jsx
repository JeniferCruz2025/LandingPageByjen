import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/navLink";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="flex flex-col items-center">
          
          <div className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
          <a
            href={technology.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-5 h-5 bg-white border border-gray-400 rounded-full flex items-center justify-center hover:scale-110 transition"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
