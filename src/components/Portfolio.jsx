const Portfolio = () => {
  // eslint-disable-next-line react/prop-types
  const Img_Card = ({ img }) => {
    return <img src={img} alt="" className="object-cover h-full w-full" />;
  };
  return (
    <div className="bg-gradient-to-r from-[#273b1a] to-[#3b4c26]">
      <div className="container mx-auto px-3 pt-20">
        <p className="text-[#c0d6bb] lg:ext-2xl text-xl uppercase text-center">
          Portfolio
        </p>
        <span className="flex justify-center pb-20 pt-8">
          <h1 className="bg-gradient-to-r from-[#bcffa4] to-[#f49872] text-transparent bg-clip-text font-medium lg:text-5xl text-2xl">
            Selected Works
          </h1>
        </span>

        <section className="grid md:grid-cols-3 grid-cols-1 gap-6 pb-16">
          <div className="md:col-span-2 ">
            <Img_Card img="/assets/img1.png" />
          </div>
          <div className="flex flex-col gap-6">
            <Img_Card img="/assets/img2.png" />
            <Img_Card img="/assets/img3.jpg" />
          </div>
          <Img_Card img="/assets/img4.png" />
          <Img_Card img="/assets/img5.jpg" />
          <Img_Card img="/assets/img6.jpg" />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
