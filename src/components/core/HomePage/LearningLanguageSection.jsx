import HighlightText from "./HighlightText";
import learningImg1 from "../../../assets/Plan_your_lessons.png";
import learningImg2 from "../../../assets/Compare_with_others.svg";
import learningImg3 from "../../../assets/Know_your_progress.png"
import CTAButton from "../HomePage/Button";

const LearningLanguageSection = () => {
  return (
    <div className="mt-20 md:mt-[30px] px-4 mb-20">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-3xl sm:text-4xl font-semibold text-center leading-snug">
          Your Swiss Knife for <HighlightText text={"Learning any Language"} />
        </div>

        <div className="text-center text-gray-500 mx-auto text-base sm:text-lg font-medium max-w-[90%] sm:max-w-[70%] leading-6">
          Using Spin makes learning multiple languages easy. With 20+ languages,
          realistic voice-over, progress tracking, custom schedule, and more.
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
          <img
            src={learningImg3}
            alt="Calendar"
            className="object-contain  lg:-mr-32"
          />
          <img
            src={learningImg2}
            alt="Mobile"
            className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
          />
          <img
            src={learningImg1}
            alt="Mobile"
            className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
          />
        </div>

        <div className="w-fit mx-auto lg:mb-20 mb-8 mt-3">
          <CTAButton active={true} linkto={"/signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
