import { Progress, Tab, Tabs } from "@nextui-org/react";

const Skill = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="font-bold text-white bg-white/15 dark:bg-cyan-400 rounded-borders shadow-xl shadow-indigo-500 dark:shadow-cyan-600 text-[2.45rem] px-10 py-6 my-20 font-serif">
          My Skill
        </div>
      </div>

      {/* <div className="lg:flex justify-center items-center gap-16 pb-20">
        <div className="grid justify-center">
          <div className="border-3 border-white lg:w-[28rem] w-[25rem] px-5 py-8 rounded-xl">
            <div className="flex justify-between">
              <div className="">HTML5</div>
              <div className="">95%</div>
            </div>
            <div className="pb-3">
              <Progress value={90} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">CSS3</div>
              <div className="">80%</div>
            </div>
            <div className="pb-3">
              <Progress value={80} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">JAVASCRIPT</div>
              <div className="">70%</div>
            </div>
            <div className="pb-3">
              <Progress value={70} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">TYPESCRIPT</div>
              <div className="">70%</div>
            </div>
            <div className="pb-3">
              <Progress value={70} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">REACT</div>
              <div className="">70%</div>
            </div>
            <div className="pb-3">
              <Progress value={70} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">NEXT JS</div>
              <div className="">70%</div>
            </div>
            <div className="pb-3">
              <Progress value={70} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">NODE JS</div>
              <div className="">70%</div>
            </div>
            <div className="">
              <Progress value={70} className="max-w-md" />
            </div>
          </div>
        </div> */}
      {/* profe******** */}
      {/* <div className="grid justify-center pt-10 lg:pt-0">
          <div className="border-3 border-white lg:w-[28rem] w-[25rem] px-5 py-8 rounded-xl">
            <div className="flex justify-between">
              <div className="">PHOTOSHOP</div>
              <div className="">90%</div>
            </div>
            <div className="pb-3">
              <Progress value={90} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">TAILWIND CSS</div>
              <div className="">90%</div>
            </div>
            <div className="pb-3">
              <Progress value={90} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">BOOTSTRAP</div>
              <div className="">80%</div>
            </div>
            <div className="pb-3">
              <Progress value={80} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">NEXT UI</div>
              <div className="">75%</div>
            </div>
            <div className="pb-3">
              <Progress value={75} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">REACT-HOOK-FORM</div>
              <div className="">75%</div>
            </div>
            <div className="pb-3">
              <Progress value={85} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">AXIOS</div>
              <div className="">75%</div>
            </div>
            <div className="pb-3">
              <Progress value={85} className="max-w-md" />
            </div>
            <div className="flex justify-between">
              <div className="">TANSTACK-QUEARY</div>
              <div className="">75%</div>
            </div>
            <div className="">
              <Progress value={85} className="max-w-md" />
            </div>
          </div>
        </div> */}
      {/* profe******** */}
      {/* </div> */}
      <div className="flex justify-center pb-20">
        <Tabs className="flex justify-center pt-6" placement="bottom">
          {/* 1st ************************ */}
          <Tab title="Language">
            <div className="text-center grid grid-cols-1 md:flex justify-center border-4 border-white p-14 rounded-xl gap-10">
              <div className="border-2 border-white px-8 py-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/html (2).png" alt="" />
                </div>
                <div className="font-bold pt-1">HTML5</div>
              </div>
              <div className="border-2 border-white px-9 py-5 rounded-lg">
                <img src="/css-file-format-symbol.png" alt="" />
                <div className="font-bold pt-1">CSS3</div>
              </div>
              <div className="border-2 border-white p-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/javascript.png" alt="" />
                </div>
                <div className="font-bold pt-1">JAVASCRIPT</div>
              </div>
              <div className="border-2 border-white p-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/typescript.png" alt="" />
                </div>
                <div className="font-bold pt-1">TYPESCRIPT</div>
              </div>
            </div>
          </Tab>
          {/* 1st ***********end************* */}
          {/* 2nd *************************** */}

          <Tab title="Framework">
            <div className="text-center grid grid-cols-1 lg:flex justify-center gap-10 border-4 border-white p-14 rounded-xl">
              <div className="border-2 border-white px-7 py-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/atom.png" alt="" />
                </div>
                <div className="font-bold pt-1">REACT</div>
              </div>
              <div className="border-2 border-white p-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/tailwind.png" alt="" />
                </div>
                <div className="font-bold pt-1">TAILWIND</div>
              </div>
              <div className="border-2 border-white p-4 rounded-lg">
                <div className="flex justify-center">
                  <img src="/bootstrap.png" alt="" />
                </div>
                <div className="font-bold pt-1">BOOTSTRAP</div>
              </div>
              <div className="border-2 border-white px-7 py-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/next-ui.png" alt="" />
                </div>
                <div className="font-bold pt-1">NEXT UI</div>
              </div>
              <div className="border-2 border-white px-7 py-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/images.png" alt="" />
                </div>
                <div className="font-bold pt-1">NEXT JS</div>
              </div>
              <div className="border-2 border-white px-7 py-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/nodejs.png" alt="" />
                </div>
                <div className="font-bold pt-1">NODE JS</div>
              </div>
            </div>
          </Tab>
          {/* 2nd ***********end************* */}
          <Tab title="Graphics">
            <div className="grid grid-cols-1 md:flex justify-center border-4 border-white py-14 px-20 rounded-xl">
              <div className="border-2 border-white p-5 rounded-lg">
                <div className="flex justify-center">
                  <img src="/photoshop.png" alt="" />
                </div>

                <div className="font-bold pt-1">PHOTOSHOP</div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default Skill;
