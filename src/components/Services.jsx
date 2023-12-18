/* eslint-disable react/no-unescaped-entities */
import { FaMobileAlt } from "react-icons/fa";
import { VscPaintcan } from 'react-icons/vsc';
import { PiDesktopTower } from 'react-icons/pi'
import { SiMaterialdesignicons} from 'react-icons/si'

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26] relative">
      <div className="container mx-auto px-3 pt-20">
        <div className="lg:flex items-center justify-between gap-x-40">
          <span className="lg:w-1/2">
            <p className="text-[#c0d6bb] lg:text-2xl text-xl pb-4 uppercase">Services</p>
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl ">
              Building Digital Product with Better Experience
            </h1>
          </span>
          <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-r-none border border-r-0 border-[#4c613e] opacity-40 lg:static absolute top-0 right-0"></div>
        </div>

        <section className="grid lg:grid-cols-4 grid-cols-1 gap-8">
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <SiMaterialdesignicons className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl mb-8">UI/UX Design</h1>
            <p className="text-[#93a98b] mb-6">
              I've created a user interface and user experience with some
              process and method
            </p>
          </div>
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <PiDesktopTower className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl mb-8">Web Development</h1>
            <p className="text-[#93a98b] text-lg mb-6">
              Building a full-stack structure for our working workflow process
            </p>
          </div>
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <VscPaintcan className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl mb-8">Visual Branding</h1>
            <p className="text-[#93a98b] text-lg mb-6">
              Making an unique identity for marketing and promoting company
              goals
            </p>
          </div>
          <div className="pt-8 pb-12 px-6 hover:bg-[#1c2f13] hover:border-b-4 hover:border-[#ff8267]">
            <FaMobileAlt className="text-4xl text-white mb-4" />
            <h1 className="text-white text-2xl mb-8">App Development</h1>
            <p className="text-[#93a98b] text-lg mb-6">
              Building some responsive mobile for our working workflow process
            </p>
          </div>
        </section>
        </div>


        <section className="lg:flex w-full items-end gap-20 mt-12">
          <div className="sm:w-[30rem] w-4/5 lg:mx-0 mx-auto rounded-[560px] rounded-b-none border border-b-0 border-l-0 border-[#4c613e] relative z-20">
            <img
              src="/assets/Main_Image.png"
              alt=""
              className="w-full -mt-8 -left-8 relative z-20"
            />
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-12">
            <p className="text-[#c0d6bb] text-2xl uppercase lg:text-left text-center">Statistic</p>
            <div className="w-full lg:flex justify-between gap-8 lg:pt-24">
              <span className="text-center">
                <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  200+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">Project Delivered</p>
              </span>
              <span className="text-center">
                <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  13
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">Awards</p>
              </span>
              <span className="text-center">
                <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  8
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">Years Experience</p>
              </span>
              <span className="text-center">
                <p className="lg:text-5xl bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:pt-0 pt-8">
                  50+
                </p>
                <p className="text-[#93a98b] text-lg lg:pt-4 pt-2">Happy Clients</p>
              </span>
            </div>

            <div className="flex lg:justify-between justify-start lg:gap-0 gap-[50%] pt-12 xl:pl-[20%] lg:h-auto h-44">
              <div className="lg:w-60 w-28 lg:h-40 rounded-[560px] rounded-b-none border border-b-0 border-[#4c613e] opacity-40"></div>

              <div className="bg-[#3f5125] rounded-full rounded-b-none lg:w-40 w-32 lg:h-20 h-16 lg:p-8 p-6">
                <button className="rounded-full bg-[#ff8267] text-[#762f20] lg:h-24 h-20 lg:w-24 w-20 p-4 relative">
                  <p className="lg:text-2xl text-xl font-medium">LET'S TALK</p>
                  <img src='/assets/arrow-right.png' alt="arrow" className="lg:w-full w-1/2 h-12 absolute lg:-left-20 -left-8 top-[25%]" />
                </button>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Services;
