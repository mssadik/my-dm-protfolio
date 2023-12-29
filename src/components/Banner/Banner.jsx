

const Banner = () => {
  return (
    <section id="home" className="bg-black  py-16 lg:px-20 lg:py-24">
      <div className="container px-8 mx-auto flex flex-col lg:flex-row lg:mt-10 justify-center ">
        {/* First column (text) */}
        <div className="lg:w-2/5 lg:pr-8 mb-8 lg:mt-5  ">
          <h2 className="text-2xl  lg:text-4xl font-bold text-slate-300 mb-4">
            Elevate Your <span className="text-green-600 font-extrabold">Brand</span> with <span className="text-green-600 font-extrabold">Expert</span> Social Media Mastery
          </h2>
          <p className="text-xs md:text-base text-gray-300 mb-6">
            Crafting success in the digital realm! I specialize in Facebook, Instagram, and YouTube marketing, ensuring your brand stands out. From strategic ads to SEO mastery, I&apos;m your go-to for unlocking online potential. Let&apos;s elevate your social media presence and drive results together!
          </p>
          <a href="#contact"><button className="bg-emerald-400 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none">
            Hire me
          </button></a>
        </div>

        {/* Second column (small image) */}
        <div className="lg:w-1/5 hidden md:block lg:pr-8  lg:ml-14  mb-8 lg:mt-10">
          <img
            src="
            https://i.ibb.co/bmJxvXP/download-2-removebg-preview.png"
            alt="Small Image Alt Text"
            className="md:w-44 bg-emerald-500 h-auto rounded-lg"
          />
          <img
            src="https://i.ibb.co/r4RfWGV/download-4-removebg-preview.png"
            alt="Small Image Alt Text"
            className="md:w-44 md:my-4 bg-emerald-500 h-auto rounded-lg"
          />
          <img
            src="https://i.ibb.co/YWWnWfK/download-3-removebg-preview-2.png"
            alt="Small Image Alt Text"
            className="md:w-44 bg-emerald-500 h-auto rounded-lg"
          />
        </div>

        {/* Third column (large image) */}
        <div className="lg:w-2/5 ">
          <img
            src="https://i.ibb.co/k2GTM6y/pic-removebg-preview.png"
            alt="Large Image Alt Text"
            className="w-5/6 h-full lg:pl-10 rounded-full"
          />
        </div>
      </div>
      <hr className="border-b-stone-600 " />
    </section>
  );
};

export default Banner;
