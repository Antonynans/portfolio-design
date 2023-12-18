/* eslint-disable react/no-unescaped-entities */
import { FaBehance, FaDribbble, FaFacebookF } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
      <div className=" px-3  flex flex-col items-center relative ">
        <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-t-none border border-t-0 border-r-0 border-[#69835e] absolute z-20 opacity-30 right-0"></div>
        <div className="lg:w-60 w-20 lg:h-60 h-20 rounded-[560px] rounded-b-none border border-b-0 border-l-0 border-[#69835e] absolute z-20 opacity-50 left-0 lg:bottom-40 bottom-0"></div>
        <div className="flex flex-col gap-y-12 text-[#c3d9bd] absolute lg:left-[20%] left-2 top-1/4">
          <FaFacebookF className="rounded-xl border border-[#c3d9bd] p-1 text-3xl cursor-pointer" />
          <FaBehance className="p-1 text-3xl cursor-pointer" />
          <FaDribbble className="p-1 text-3xl cursor-pointer" />
        </div>

        <div className="sm:w-[30rem] w-4/5 lg:h-[25rem] mt-24 rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#69835e] relative z-20">
          <img
            src="/assets/Main_Image.png"
            alt=""
            className="w-full -mt-8 relative z-20"
          />

          <div className="bg-gradient-to-b from-[#3f5125] to-[#364823] rounded-full rounded-b-none lg:w-40 h-20 lg:p-8 p-4 absolute top-[40%] lg:-right-32 -right-[16%]">
            <button className="rounded-full bg-[#ff8267] text-[#762f20] h-24 w-24 p-4 relative z-20">
              <p className="lg:text-[1.7rem] text-xl font-medium">LET'S TALK</p>
              <img src='/assets/arrow-left.png' alt="arrow" className="lg:w-full w-1/2 h-12 absolute lg:-right-20 -right-4 top-[25%]" />
            </button>
          </div>
        </div>

        <div className="relative z-20 lg:mt-16 mb-16">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text md:text-7xl text-3xl text-center font-semibold ">
            Willy James Wonka
          </h1>
          <p className="text-[#c3d9bd] md:text-2xl text-center mt-4">
            SOFTWARE ENGINEER // PRODUCT DESIGNER
          </p>
        </div>
      </div>

      <div className="h-32 bg-[#2e431f] flex flex-col justify-center">
        <Marquee>
          <img src="/assets/logo1.png" alt="" className="h-16 w-40 mr-20" />
          <img src="/assets/logo2.png" alt="" className="h-16 w-40 mr-20" />
          <img src="/assets/logo3.png" alt="" className="h-16 w-40 mr-20" />
          <img src="/assets/logo4.png" alt="" className="h-16 w-40 mr-20" />
          <img src="/assets/logo5.png" alt="" className="h-16 w-40 mr-20" />
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
