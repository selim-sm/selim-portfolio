import { Dot } from "lucide-react";
import Link from "next/link";

const WorkShop = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-r dark:from-[#040110eb] dark:to-[#060a25] bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4] py-10">
        <div className="container mx-auto px-6">
          <div className="flex justify-center pb-16">
            <div className="text-4xl font-bold bg-white/15 text-white backdrop-blur-md shadow-lg shadow-blue-500 dark:shadow-cyan-400 dark:bg-cyan-400 rounded-xl px-10 py-3">
              WorkShop :
            </div>
          </div>
          {/* 1st ************************** */}
          <div className="md:flex items-center justify-center md:gap-10">
            <div className="flex flex-col justify-center bg-white w-fit rounded-t-lg">
              <div className="flex justify-center">
                <img
                  src="/it.png"
                  className="w-[600px] h-[350px] rounded-t-lg border-1 border-gray-600"
                  alt=""
                />
              </div>
              <div className="text-black rounded-b-lg">
                <div className="py-3 font-bold ps-5">IT Solution Company</div>
                <div className="pb-3 ps-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consectetur, ea.
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] sm:w-full py-10">
              <div className="font-bold text-2xl flex items-center">
                <Dot size={48} strokeWidth={3} />
                IT Solution Company
              </div>
              <div className="font-serif text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nostrum sunt voluptatum quod ullam ad. Sequi asperiores
                nesciunt, incidunt numquam commodi consequuntur officia odit
                ullam vero molestiae, doloribus modi reprehenderit! nostrum sunt
                voluptatum quod ullam ad. Sequi asperiores nesciunt, incidunt
                numquam commodi consequuntur officia odit ullam vero molestiae,
                doloribus modi reprehenderit!
              </div>
              <Link href={"https://it-solution-navy.vercel.app/"}>
                <button className="mt-5 text-white px-7 py-2 backdrop-blur-sm bg-white/30 rounded-lg hover:text-red-500 font-bold dark:bg-cyan-400 dark:shadow-md dark:shadow-cyan-500">
                  {" "}
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>

          {/* 1st end ************************** */}
          {/* 2nd****************************** */}
          <div className="md:flex items-center justify-center w-full md:gap-10 py-14">
            <div className="lg:w-[50%] w-full">
              <div className="font-bold text-2xl flex items-center">
                <Dot size={48} strokeWidth={3} /> RandomUser
              </div>
              <div className="font-serif text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nostrum sunt voluptatum quod ullam ad. Sequi asperiores
                nesciunt, incidunt numquam commodi consequuntur officia odit
                ullam vero molestiae, doloribus modi reprehenderit! nostrum sunt
                voluptatum quod ullam ad. Sequi asperiores nesciunt, incidunt
                numquam commodi consequuntur officia odit ullam vero molestiae,
                doloribus modi reprehenderit!
              </div>
              <Link href={"https://user-card-nine.vercel.app/"}>
                <button className="my-5 text-white px-7 py-2 backdrop-blur-sm bg-white/30 rounded-lg hover:text-red-500 font-bold dark:bg-cyan-400 dark:shadow-md dark:shadow-cyan-500">
                  {" "}
                  KNOW MORE
                </button>
              </Link>
            </div>
            <div className="grid justify-center bg-white w-fit rounded-t-lg">
              <div className="flex justify-center ">
                <img
                  src="/random.png"
                  className="w-[600px] h-[350px] rounded-t-lg border-1 border-gray-600"
                  alt=""
                />
              </div>
              <div className="text-black rounded-b-lg">
                <div className="py-3 font-bold ps-5">RandomUser</div>
                <div className="pb-3 ps-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, blanditiis?
                </div>
              </div>
            </div>
          </div>
          {/* 2nd end****************************** */}
          {/* 3rd****************************** */}
          <div className="md:flex items-center justify-center md:gap-10">
            <div className="flex flex-col justify-center bg-white w-fit rounded-t-lg">
              <div className="flex justify-center">
                <img
                  src="/jewellary-shop.png"
                  className="w-[600px] h-[350px] rounded-t-lg border-1 border-gray-600"
                  alt=""
                />
              </div>
              <div className="text-black rounded-b-lg">
                <div className="py-3 font-bold ps-5">Jewellery Shop</div>
                <div className="pb-3 ps-5">
                  Beautiful website template perfect for building an online
                  store to sell Jewellery
                </div>
              </div>
            </div>
            <div className="lg:w-[50%] sm:w-full py-10">
              <div className="font-bold text-2xl flex items-center">
                <Dot size={48} strokeWidth={3} /> Jewellery Shop
              </div>
              <div className="font-serif text-white">
                Welcome to SM Jewelry Shop, where elegance meets craftsmanship.
                Discover our exquisite collection of handcrafted jewelry, from
                timeless classics to contemporary designs. Each piece is crafted
                with precision and passion, ensuring unmatched quality and
                beauty. Elevate your style with our stunning creations. Explore
                now and find your perfect sparkle.
              </div>
              <Link href={"https://jewellary-shop.netlify.app/"}>
                <button className="mt-5 text-white px-7 py-2 backdrop-blur-sm bg-white/30 rounded-lg hover:text-red-500 font-bold dark:bg-cyan-400 dark:shadow-md dark:shadow-cyan-500">
                  {" "}
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          {/* 3rd end****************************** */}
          {/* 4th ****************************** */}

          <div className="md:flex items-center justify-center w-full md:gap-10 py-14">
            <div className="lg:w-[50%] w-full">
              <div className="font-bold text-2xl flex items-center">
                <Dot size={48} strokeWidth={3} /> RandomUser V2
              </div>
              <div className="font-serif text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                nostrum sunt voluptatum quod ullam ad. Sequi asperiores
                nesciunt, incidunt numquam commodi consequuntur officia odit
                ullam vero molestiae, doloribus modi reprehenderit! nostrum sunt
                voluptatum quod ullam ad. Sequi asperiores nesciunt, incidunt
                numquam commodi consequuntur officia odit ullam vero molestiae,
                doloribus modi reprehenderit!
              </div>
              <Link href={"https://user-card-nine.vercel.app/"}>
                <button className="my-5 text-white px-7 py-2 backdrop-blur-sm bg-white/30 rounded-lg hover:text-red-500 font-bold dark:bg-cyan-400 dark:shadow-md dark:shadow-cyan-500">
                  {" "}
                  KNOW MORE
                </button>
              </Link>
            </div>
            <div className="grid justify-center bg-white w-fit rounded-t-lg">
              <div className="flex justify-center ">
                <img
                  src="/multiple.png"
                  className="w-[600px] h-[350px] rounded-t-lg border-1 border-gray-600"
                  alt=""
                />
              </div>
              <div className="text-black rounded-b-lg">
                <div className="py-3 font-bold ps-5">RandomUser V2</div>
                <div className="pb-3 ps-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Totam, blanditiis?
                </div>
              </div>
            </div>
          </div>
          {/* 4th end****************************** */}
        </div>
      </div>
    </>
  );
};

export default WorkShop;
