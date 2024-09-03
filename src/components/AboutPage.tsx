import Head from "next/head";
import Skill from "./Skill";

const AboutPage = () => {
  return (
    <>
      <div
        id="about-a"
        className="dark:bg-gradient-to-r dark:from-[#040110eb] dark:to-[#060a25]  bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white"
      >
        <div className="container mx-auto px-6">
          <div className="flex-col-reverse lg:flex-row flex lg:items-center justify-around w-full lg:gap-0 pt-20 pb-10">
            <div className="flex justify-center lg:w-[50%] w-full">
              <img
                src="/sm-c.png"
                className="rounded-custom backdrop-blur-sm lg:w-[70%] w-[50%] shadow-lg shadow-blue-500"
                alt=""
              />
            </div>

            <div className="lg:w-[50%] text-center lg:text-start w-full py-10">
              <div className="font-bold text-4xl">About Me</div>
              <div className="font-serif pt-6">
                "My name is Selim Mondal. I am 20 years old, and I live in
                Duttapukur, North 24 Parganas. I completed my secondary
                education under the WBBSE board in 2021 and my higher secondary
                in 2023. From 2023 to 2024, I studied frontend design at the
                Central Institute of Technology (CIT). I have skills in HTML,
                CSS, JavaScript, React, Next.js, and Tailwind CSS. I am
                passionate about creating responsive and user-friendly web
                interfaces."
              </div>

              {/* <div className="font-bold text-4xl py-5">Education</div>
              <div className=""></div> */}
            </div>
          </div>
          <Skill />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
