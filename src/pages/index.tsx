import AboutPage from "@/components/AboutPage";
import Hero from "@/components/Hero";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
        <link rel="icon" href="/logo1.png" />
      </Head>
      <Hero />

      {/* about******************** */}
      <AboutPage />
      {/* about******************** */}
    </>
  );
};

export default index;
