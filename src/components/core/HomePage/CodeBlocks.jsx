import { FaArrowRight } from "react-icons/fa";
import CTAButton from "../HomePage/Button";
import { TypeAnimation } from "react-type-animation";

const CodeBlocks=({
    position,heading,subheading,ctabtn1,ctabtn2,codeblock,backgroundGradient,codeColor
})=>{
    return(
        <div className={`flex flex-col ${position} lg:flex-row justify-between items-center gap-10 lg:gap-40 w-full`}>
            {/* Section 1: Text and Buttons */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                {heading}
                <div className="text-gray-300 font-medium text-sm sm:text-base">
                {subheading}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className="flex gap-2 justify-center items-center">
                    {ctabtn1.btnText}
                    <FaArrowRight />
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                    {ctabtn2.btnText}
                </CTAButton>
                </div>
            </div>

            {/* Section 2: Code Block */}
            <div className="codeBlocks w-full lg:w-[50%] h-fit flex flex-row font-mono">
                {/* Line Numbers */}
                <div className="text-right pr-4 text-gray-500 font-mono select-none w-6 sm:w-8">
                {Array.from({ length: 10 }, (_, i) => (
                    <p key={i}>{i + 1}</p>
                ))}
                </div>

                {/* Code Text */}
                <div className={`flex-1 font-mono whitespace-pre-line font-semibold  ${codeColor}`}>
                <TypeAnimation
                    sequence={[codeblock, 5000, '']}
                    wrapper="span"
                    repeat={Infinity}
                    cursor={true}
                    style={{
                    whiteSpace:"pre-line",   
                    display: "block",
                    }}
                    omitDeletionAnimation={true}
                />
                </div>
            </div>
        </div>

    )
}

export default CodeBlocks