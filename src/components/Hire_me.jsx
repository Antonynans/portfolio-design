/* eslint-disable react/no-unescaped-entities */

const Hire_me = () => {
  return (
    <div className="bg-gradient-to-b from-[#273b1a] to-[#3b4c26] h-full relative">
      <div className="px-3 pt-20 lg:flex items-end justify-between gap-8 container mx-auto">
        <div className="lg:w-2/3">
          <p className="text-[#c0d6bb] lg:text-2xl text-xl uppercase">
            Hire me
          </p>
          <span className="flex pb-8 pt-4">
            <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f29b73] text-transparent bg-clip-text lg:text-[3rem] leading-normal text-2xl">
              Stay Chill and Tell <br /> Your Plan
            </h1>
          </span>

          <div className="lg:hidden block mx-auto sm:w-[30rem] w-4/5 rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e]">
            <img
              src="/assets/Main_Image.png"
              alt=""
              className="h-[106%] w-full -mt-8"
            />
          </div>

          <form className="lg:w-11/12 flex flex-col lg:gap-6 gap-3 text-white lg:mt-0 mt-12">
            <div className="flex lg:gap-6 gap-3 w-full">
              <label htmlFor="Name" className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#213516] w-full px-4 h-16 outline-none"
                />
              </label>
              <label htmlFor="Email" className="w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#213516] w-full px-4 h-16 outline-none"
                />
              </label>
            </div>
            <label htmlFor="Message">
              <textarea
                placeholder="Message..."
                className="resize-none w-full bg-[#213516] p-4 h-40 outline-none"
              />
            </label>

            <div className="pt-4 flex justify-end h-40">
              <div className="bg-gradient-to-b from-[#3f5125] to-[#364823] rounded-full rounded-b-none lg:w-40 w-32 lg:h-20 h-16 lg:p-10 p-6">
                <button className="rounded-full bg-[#ff8267] text-[#762f20] h-20 w-20 p-4 relative">
                  <p className="text-2xl font-medium">SEND</p>
                  <img
                    src="/assets/arrow-right.png"
                    alt="arrow"
                    className="lg:w-full w-1/2 h-12 absolute lg:-left-16 -left-8 top-[25%]"
                  />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-40 w-20 lg:h-32 h-20 rounded-t-[560px] border-t border-[#4c613e] absolute left-0 bottom-0"></div>

        <div className="lg:block hidden xl:w-[30rem] lg:w-[35%] h-[70%] rounded-[560px] rounded-b-none border border-b-0 border-r-0 border-[#4c613e] absolute right-0">
          <img
            src="/assets/Main_Image.png"
            alt=""
            className="h-[106%] w-full -mt-8"
          />
        </div>
      </div>
    </div>
  );
};

export default Hire_me;
