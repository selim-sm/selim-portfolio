import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-r dark:from-[#040110eb] dark:to-[#060a25] bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white py-20 text-center lg:text-start">
        <div className="container mx-auto px-6">
          <div className="lg:flex lg:justify-around lg:items-center">
            <div className="">
              <div className="text-xl font-bold">Hello, Its Me</div>
              <div className="text-5xl font-bold py-3 font-sans">
                Selim Mondal
              </div>
              <div className="text-6xl font-bold text-indigo-700 dark:text-cyan-400">
                <span className="font-normal text-white font-sans">
                  And I'm a
                </span>{" "}
                Frontend Devloper
              </div>
              <div className="pt-3 font-sans lg:w-[35rem] ">
                "I am Selim Mondal, a passionate frontend developer who loves
                creating smooth and engaging user experiences. I skilled in
                everything from researching user needs to designing and building
                the final product."
              </div>
              {/* icon***************** */}
              <div className="flex gap-5 py-5 justify-center lg:justify-normal">
                <Link
                  href={
                    "https://www.facebook.com/people/Selim-Mondal/100034003773920/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook hover:stroke-cyan-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                {/* facebook */}
                {/* insta */}
                <Link href={"https://www.instagram.com/selimmondal372/?hl=en"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram hover:stroke-cyan-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* insta */}
                {/* inbox */}
                <Link href={"mailto:selimmondal619@gmail.com"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-plus hover:stroke-cyan-400"
                  >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <path d="M19 16v6" />
                    <path d="M16 19h6" />
                  </svg>
                </Link>
                {/* inbox */}
                {/* linkdin */}
                <Link
                  href={"https://www.linkedin.com/in/selim-mondal-3718572a0/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin hover:stroke-cyan-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                {/* linkdin */}
              </div>
              {/* icon***************** */}
              <Link href={"#about-a"}>
                <button className="mt-5 px-7 py-3 backdrop-blur-sm bg-white/30 rounded-lg hover:text-red-500 font-bold dark:bg-cyan-400 dark:shadow-md dark:shadow-cyan-500">
                  KNOW MORE
                </button>
              </Link>
            </div>
            <div className="flex justify-center lg:justify-normal pt-10 lg:pt-0">
              <img
                src="/sm-c.png"
                className=" w-[500px] rounded-3xl shadow-lg shadow-blue-500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
