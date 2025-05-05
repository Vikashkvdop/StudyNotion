import logo1 from "../../../assets/logo1.jpeg";
import logo2 from "../../../assets/logo2aa.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.webp";
import TimelineImage from "../../../assets/readingBg.jpg";


const timeline=[
    {
        Logo:logo1,
        Heading:"Leadership",
        Description:"Fully committed to the success company",
    },
    {
        Logo:logo2,
        Heading:"Responsibility",
        Description:"Students will always our top priority",
    },
    {
        Logo:logo3,
        Heading:"Flexibility",
        Description:"The ability to switch on important skills",
    },
    {
        Logo:logo4,
        Heading:"Problem Sloving Ability",
        Description:"Code your way to solution",
    },
]

const TimelineSection = () => {
    return (
      <div className="px-4 py-10 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center w-full max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="relative w-full lg:w-[45%] flex flex-col gap-10">
                {timeline.map((element, index) => (
                <div className="flex flex-row gap-6 items-start relative" key={index}>
                    {/* Connector Line */}
                    {index !== timeline.length - 1 && (
                        <span className="absolute left-[25px] top-[60px] h-[calc(100%+20px)] w-[2px] border-l-2 border-dotted border-blue-500 z-0" />
                    )}

                    {/* Circle Icon */}
                    <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full shadow z-10">
                        <img src={element.Logo} alt="" className="w-full h-full object-contain" />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="font-semibold text-lg">{element.Heading}</h2>
                        <p className="text-base text-gray-600">{element.Description}</p>
                    </div>
                </div>
               ))}
            </div>

  
          {/* Right Section */}
          <div className="relative w-full lg:w-[50%] max-w-full">
            <img
              src={TimelineImage}
              alt=""
              className="rounded-lg w-full object-cover max-h-[500px]"
            />
            <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2
              bg-green-950 flex flex-col sm:flex-row text-white uppercase py-6 px-4 sm:px-0 rounded-md shadow-lg">

              <div className="flex flex-row gap-3 items-center sm:border-r sm:border-green-400 sm:px-7 mb-4 sm:mb-0">
                <p className="text-3xl font-bold">10</p>
                <p className="text-green-300 text-sm">Years of Experience</p>
              </div>
              <div className="flex flex-row gap-3 items-center sm:px-7">
                <p className="text-3xl font-bold">250</p>
                <p className="text-green-300 text-sm">Types of Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  

export default TimelineSection