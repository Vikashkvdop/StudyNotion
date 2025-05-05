import { FaArrowRight } from "react-icons/fa";
import instructor from "../../../assets/instructorImage.jpg";
import HighlightText from "./HighlightText";
import CTAButton from "../HomePage/Button";

const InstructorSection = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-[50%] relative flex justify-center">
          {/* White Background Div */}
          <div className="absolute bottom-4 right-4 w-full h-full bg-blue-500 z-0 rounded-md hidden sm:block"></div>
          
          {/* Image */}
          <img
            src={instructor}
            alt="Instructor"
            className="relative z-10 shadow-white rounded-md w-full max-w-[500px]"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6 text-center lg:text-left">
          <div className="text-4xl font-semibold">
            Become an <HighlightText text={"Instructor"} />
          </div>

          <p className="font-medium text-[16px] text-gray-400 max-w-[500px] mx-auto lg:mx-0">
            Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>

          <div className="w-fit mx-auto lg:mx-0">
            <CTAButton active={true} linkto={"signup"}>
              <div className="flex flex-row gap-2 items-center">
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
