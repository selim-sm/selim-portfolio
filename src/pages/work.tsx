import WorkShop from "@/components/WorkShop";
import Head from "next/head";

const work = () => {
  return (
    <>
      <Head>
        <title>WORK</title>
        <link rel="icon" href="/logo1.png" sizes="" />
      </Head>
      <div className="bg-[url(/project-bg.jpg)] h-[70dvh] bg-no-repeat bg-fixed bg-cover flex justify-center items-center">
        <div className="text-5xl font-bold text-white font-serif text-center">
          MY ALL PROJECTS
        </div>
      </div>
      <WorkShop />
    </>
  );
};

export default work;
