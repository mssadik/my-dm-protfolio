

const Banner = () => {
  return (
    <section id="home" className="bg-black  py-16 lg:px-20 lg:py-24">
      <div className="container px-8 mx-auto flex flex-col lg:flex-row lg:mt-10 justify-center ">
        {/* First column (text) */}
        <div className="lg:w-3/6 lg:pr-8 mb-8 lg:mt-5  ">
          <h2 className="text-2xl font-serif  lg:text-4xl font-bold text-slate-300 mb-4">
            Elevate Your <span className="text-green-600 font-extrabold">Brand</span> with <span className="text-green-600 font-extrabold">Expert</span> Social Media Mastery
          </h2>
          <p className="text-xs md:text-base text-gray-300 mb-6">
            Crafting success in the digital realm! I specialize in Facebook, Instagram, and YouTube marketing, ensuring your brand stands out. From strategic ads to SEO mastery, I&apos;m your go-to for unlocking online potential. Let&apos;s elevate your social media presence and drive results together!  So why are you waiting for let&apos;s have a meeting and discuss your project<br /> Open the agency YouTube channel and LinkedIn account below.

          </p>
          <div className="flex gap-2 mb-4 ml-0 items-center">
            <a href="https://www.linkedin.com/in/sadikul-islam-6b2827278/" className="hover:text-blue-500">
              <img className="rounded-lg w-6 transition duration-300 ease-in-out transform hover:scale-110" src="https://i.ibb.co/ZNVDr1g/download-4.png" alt="" />
            </a>
            <a href="https://www.youtube.com/@FreelancerFaruk1314/videos" className="hover:text-green-500">
              <img className="rounded-lg w-10 h-auto transition duration-300 ease-in-out transform hover:scale-110" src="https://i.ibb.co/wr380Tp/download-5-removebg-preview.png" alt="" />
            </a>
          </div>

          <a href="#contact"><button className="bg-emerald-400 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none">
            Hire me
          </button></a>
        </div>

        {/* Second column (small image) */}
        <div className="lg:w-1/6 hidden md:block lg:pr-8  lg:ml-14  mb-8 lg:mt-10">
          <img
            src="
            https://i.ibb.co/4YCjy7G/download-6.jpg"
            alt="Small Image Alt Text"
            className="md:w-24 h-auto rounded-lg mb-4 transition-transform transform hover:scale-110"
          />
            <img
            src="https://i.ibb.co/4PTd8CZ/download-5.jpg"
            alt="Small Image Alt Text"
            className="md:w-24 h-auto rounded-lg mb-4 transition-transform transform hover:scale-110"
          />

          <img
            src="https://i.ibb.co/Bn8sWGP/download-8.jpg"
            alt="Small Image Alt Text"
            className="md:w-24 h-auto rounded-lg mb-4 transition-transform transform hover:scale-110"
          />
          <img
            src="https://i.ibb.co/bFnHtp9/download-7.jpg"
            alt="Small Image Alt Text"
            className="md:w-24 h-auto rounded-lg mb-4 transition-transform transform hover:scale-110"
          />
          <img
            src="https://i.ibb.co/pz7SHvg/Untitled-design-2.png"
            alt="Small Image Alt Text"
            className="md:w-24 h-auto rounded-lg mb-4 transition-transform transform hover:scale-110"
          />

        </div>

        {/* Third column (large image) */}
        <div className="lg:w-2/6 flex items-center justify-center">
          <img
            src="https://i.ibb.co/k2GTM6y/pic-removebg-preview.png"
            alt="Large Image Alt Text"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      <hr className="border-b-stone-600 " />
    </section>
  );
};

export default Banner;
