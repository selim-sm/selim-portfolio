import Head from "next/head";

const resume = () => {
  return (
    <>
      <Head>
        <title>RESUME</title>
        <link rel="icon" href="/logo1.png" sizes="" />
      </Head>
      <div className="dark:bg-gradient-to-r dark:from-[#040110eb] dark:to-[#060a25] bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] text-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center py-10">
            <img src="/cv.png" className="w-[550px]" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default resume;
