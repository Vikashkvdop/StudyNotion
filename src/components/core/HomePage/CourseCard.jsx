import { GiHumanTarget } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  const isActive = currentCard === cardData.heading;

  return (
    <div className="relative w-[280px] md:w-[250px]">
      {/* Yellow Background Layer (only for active card) */}
      {isActive && (
        <div className="absolute bottom-4 right-4 w-full h-full bg-blue-400 rounded-md z-0" />
      )}

      {/* Main Card */}
      <div
        className={`relative p-6 transition-all duration-300 cursor-pointer rounded-md h-[240px] w-[250px] flex flex-col
          ${isActive ? "z-10 scale-105 shadow-lg bg-white text-gray-950" : "z-0 bg-gray-900 text-white"}`}
        onClick={() => setCurrentCard(cardData.heading)}
      >
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{cardData.heading}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500">{cardData.description}</p>

        {/* Bottom Info Row */}
        <div className="flex justify-between items-center text-sm mt-auto pt-4">
          {/* Level */}
          <div className="flex items-center gap-2">
            <GrUserManager className="text-blue-700 text-lg" />
            <span className="text-blue-500">{cardData.level}</span>
          </div>

          {/* Lessons */}
          <div className="flex items-center gap-2">
            <GiHumanTarget className="text-blue-700 text-lg" />
            <span className="text-blue-500">{cardData.lessionNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
