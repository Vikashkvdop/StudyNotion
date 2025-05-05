import { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";

const tabsName = [
  "Free",
  "New to coding",
  "Most popular",
  "Skill paths",
  "Career paths",
];

const ExploreMore = () => {
  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

  const setMyCards = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.find((item) => item.tag === value);
    if (result) {
      setCourses(result.courses);
      setCurrentCard(result.courses[0]?.heading || "");
    }
  };

  return (
    <div className="px-4 md:px-10 mt-20">
      {/* Heading */}
      <div className="text-4xl font-semibold text-center">
        Unlock the <HighlightText text={"Power Of Code"} />
      </div>

      <p className="text-center text-gray-400 text-md mt-3">
        Learn to build anything you can imagine
      </p>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 rounded-full bg-gray-800 px-2 py-2 mb-20 ">
        {tabsName.map((element, index) => (
          <div
            key={index}
            className={`text-[16px] flex items-center gap-2 px-6 py-2 rounded-full cursor-pointer transition-all duration-200
              ${
                currentTab === element
                  ? "bg-gray-900 text-gray-100 font-medium"
                  : "text-gray-400 hover:bg-gray-900 hover:text-gray-100"
              }`}
            onClick={() => setMyCards(element)}
          >
            {element}
          </div>
        ))}
      </div>

      {/* Responsive Cards Section */}
      <div className="lg:-mb-30 mt-5">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-6">
          {courses.map((element, index) => (
            <CourseCard
              key={index}
              cardData={element}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
