import { FaArrowRight } from "react-icons/fa"
import {Link} from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import bgImage from "../assets/studybg.jpg";
import TimelineSection from "../components/core/HomePage/TimelineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Footer from "../components/common/footer";
import ReviewSlider from "../components/common/ReviewSlider";
const Home=()=>{
    return(
        <div>
            {/* section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 items-center  justify-between text-white ">
                <Link to={"/signup"}>
                 <div className="group mt-16 p-1 mx-auto rounded-full bg-gray-800 font-bold text-white drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]  hover:drop-shadow-none
                 transition-all duration-200 hover:scale-95 w-fit">
                    <div className="flex flex-row items-center  gap-2 rounded-full px-18 py-[5px]
                     transition-all duration-200 group-hover:bg-gray-900">
                        <p>Become an instructor</p>
                        <FaArrowRight/>
                    </div>
                 </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-7 ">
                    Empower Your Future With
                    <HighlightText text={"Coding Skills"}/>
                </div>

                <div className="mt-4 w-[90%] text-center text-md font-semibold text-gray-300 opacity-70 ">
                    With our online courses,you can learn at your own pace,from anywhere in the world,and get access wealth of resources,including hands-on projects, quizzes and personalized feedback from instructor. 
                </div>

                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"} >
                        Learn More
                    </CTAButton>

                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                {/* add Backgound image or video here code for video */}

                <div className="mx-3 my-12 shadow-blue-200 ">
                   {/* <video src=""
                     muted loop autoPlay >
                     <source   type="video/mp4"/>
                   </video> */}
                   {/* <img src={bgImage} alt="" width={700} height={700} /> */}
                </div>


                {/* code section 1 */}
                <div className="w-11/12 max-w-fit">
                    <CodeBlocks
                    position={"lg:flex-row"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your <HighlightText text={"Coding Potential"}/> With Our Online Courses
                        </div>
                    }
                    subheading={
                        "Our courses are designed and taught by industry experts who have years of experience in coding and real life projects."
                    }
                    ctabtn1={
                        {
                            btnText:"try it yourself",
                            linkto:"/signup",
                            active:true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active:false,
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  Hello World\n</body>\n</html>`}
                    codeColor={"text-yellow-300"}>
                        
                    </CodeBlocks>
                </div>

                {/* code section 2 */}
                <div className="mt-28 w-11/12 max-w-fit ">
                    <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                        <div className="text-4xl font-semibold">
                            Start Coding <HighlightText text={"In Seconds"}/> 
                        </div>
                    }
                    subheading={
                        "Go ahead, give it a try.Our hands-on learning environment means you'll be writing real code from very first lesson. "
                    }
                    ctabtn1={
                        {
                            btnText:"Continue Lesson",
                            linkto:"/signup",
                            active:true,
                        }
                    }
                    ctabtn2={
                        {
                            btnText:"Learn More",
                            linkto:"/login",
                            active:false,
                        }
                    }
                    codeblock={`<!DOCTYPE html>\n<html>\n<head>\n  <title>My Page</title>\n  <link rel="stylesheet" href="style.css" />\n</head>\n<body>\n  Hello World\n</body>\n</html>`}
                    codeColor={"text-gray-300"}>
                        
                    </CodeBlocks>
                </div>

                <ExploreMore/>
            </div>


            {/* section 2 */}
            <div className="bg-white text-gray-700 md:h-full ">
                <div className="homepage-bg h-[310px]  ">
                    <div className="w-11/12 max-w-fit flex items-center gap-8 mx-auto flex-col justify-between ">
                       <div className="lg:h-[150px]"></div>
                        <div className="flex gap-7 text-white  lg:mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                            <div className="flex items-center gap-3 ">
                                Expolre Full Catalog
                                <FaArrowRight/>
                            </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div className="">
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-11/12 max-w-fit flex flex-col items-center justify-between gap-7">
                    <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 w-11/12 lg:mt-20 lg:flex-row lg:gap-0 ">
                        <div className="text-4xl font-semibold lg:w-[45%] ">
                            Get the skills you need for a <HighlightText text={"job that is in demand"}/>
                        </div>

                        <div className="flex flex-col gap-10 lg:w-[40%] items-start">
                            <div className="text-[16px]">
                                The modern StudyNotion is the dicates its own terms. to be a competitive specialist reuires more than profesional skills.
                            </div>
                            <CTAButton active={true} linkto={"signup"}>
                                <div>
                                    Learn More
                                </div>
                            </CTAButton>
                        </div>
                    </div>

                    <TimelineSection/>

                    <LearningLanguageSection/>
                </div>
            </div>

            {/* section 3 */}
            <div className=" relative bg-[#07121b] text-white flex flex-col   items-center justify-between  gap-8  first-letter:bg-black w-11/12 mx-auto ">
                <InstructorSection/>

                <h2 className="text-center text-4xl font-semibold mt-10">Review from other Learners</h2>
                
                <ReviewSlider/>
                
            </div>


            {/* footer */}
            <div className="mt-10">
                <Footer/>
            </div>
        </div>
    )
}

export default Home