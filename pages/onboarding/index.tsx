import Image from "next/image";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PopUpContents {
  title: string;
  content: string[];
}

const PopUpContents: Array<PopUpContents> = [
  {
    title: "Help Us Customize your Prompts",
    content: [
      "Please fill in this form to the best of your detail so we can customize your AI generated proposals as much as possible.",
      "You can change these at any time by heading over to the settings tab within the app!",
    ],
  },
  {
    title: "Create a new scrape",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas integer. Purus ipsum amet scelerisque commodo dui ut.",
    ],
  },
  {
    title: "Enter scrape data",
    content: [
      "On this modal section, enter the details of your scrape",
      "Here you can choose where you will like to be notified, the interval of your scrape and the Upwork RSS feed for your jobs",
      "Don't worry, on the form we'll have a video showing you exactly how to get this information",
    ],
  },
  {
    title: "Get a list of jobs",
    content: [
      "With your scrape added, now the fun begins!",
      "Either check the jobs dashboard or just sit back and wait for you to be notified in your chosen platforms!",
    ],
  },
];

const OnBoardingPage = () => {
  const [totalSteps] = useState<number>(4);
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep < totalSteps ? prevActiveStep + 1 : totalSteps
    );
  };

  const StepOne = () => {
    return (
      <>
        <div className="expertise-box mb-[67px]">
          <div className="expertise-heading">
            <p className="text-sm font-medium pb-2 text-[#181A1F]">
              Expertise and Experience
            </p>
          </div>
          <textarea
            className="expertise-details w-full h-[117px] resize-none	focus-visible-none text-[#000000] text-base leading-6 m-0 font-normal bg-[#ffffff] border border-solid border-[#D8DDE9] rounded-lg py-2.5 px-3.5 shadow-[#1018280d]"
            placeholder="I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X.
         I have strong copywriting skills via ...."
          ></textarea>
        </div>
        <div className="expertise-box mb-[67px]">
          <div className="expertise-heading">
            <p className="text-sm font-medium pb-2 text-[#181A1F]">
              How would you like to sign off the proposal
            </p>
          </div>
          <textarea
            className="expertise-details w-full h-[117px] resize-none	focus-visible-none text-[#000000] text-base leading-6 m-0 font-normal bg-[#ffffff] border border-solid border-[#D8DDE9] rounded-lg py-2.5 px-3.5 shadow-[#1018280d]"
            placeholder="I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation
            Best
            Andrew"
          ></textarea>
        </div>
      </>
    );
  };

  const ImageSteps = () => {
    return (
      <div className="pb-8">
        <Image
          src={`/Images/Step${activeStep}.png`}
          alt={`step-${activeStep}-image`}
          width={500}
          height={312}
        />
      </div>
    );
  };

  return (
    <div className={`${inter.className}`}>
      <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center">
        <div className="relative w-full max-w-[526px] max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-6">
            {activeStep === 1 && <StepOne />}
            {activeStep !== 1 && <ImageSteps />}

            <div className="help-box pb-8">
              <div className="helpbox-heading pb-2 flex justify-between items-center">
                <p className="text-xl font-bold text-[#181A1F] m-0">
                  {PopUpContents[activeStep - 1].title}
                </p>
                <span className="text-[#0053E1] text-sm	font-normal	py-1 px-2 bg-[#EEF3FF] rounded">
                  {activeStep}/{totalSteps}
                </span>
              </div>
              <div className="helpbox-details max-w-[410px] w-full">
                {PopUpContents[activeStep - 1].content.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className={`text-sm font-normal text-[#6D727D] leading-5 pb-3`}
                    >
                      {item}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-8	">
              <button
                onClick={handleNext}
                type="button"
                className="border from-[#243c5a] text-base font-medium leading-6 text-[#181A1F] bg-white  border-[#D0D5DD] shadow-[#1018280d] rounded-lg	py-2.5	max-w-[223px] w-full"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                type="button"
                className="flex items-center gap-2.5 justify-center border bg-[#2554CC] text-base font-medium leading-6 text-[#ffffff]   border-[#D0D5DD] shadow-[#10182833] rounded-lg	py-2.5	max-w-[223px] w-full bg-gradient-to-b from-[#2D66F8] to-[#2554CC]"
              >
                {totalSteps === activeStep ? (
                  <>
                    Enter App{" "}
                    <Image
                      src="/RightArrow.svg"
                      alt="RightArrow svg"
                      width={12}
                      height={12}
                    />
                  </>
                ) : (
                  <>Next</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoardingPage;
