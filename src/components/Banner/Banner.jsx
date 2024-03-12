

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
            Crafting digital success is my passion! With a focus on Facebook, YouTube, and product design, alongside marketing expertise, I&lsquo;m dedicated to making your brand shine in the online sphere. From crafting strategic ads to mastering SEO, I&lsquo;m your trusted partner in unlocking your brand&lsquo;s full potential. Let&lsquo;s not just boost your social media presence; let&lsquo;s drive tangible results together! Don&lsquo;t wait any longer—let&lsquo;s schedule a meeting to discuss your project. Feel free to explore our agency&lsquo;s YouTube channel and connect with me on LinkedIn or WhatsApp below. </p>
          <div className="flex gap-5">
            <a href="#contact"><button className="bg-emerald-400 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none">
              Hire me
            </button></a>

            <div className="flex gap-2 mb-4 ml-0 items-center">
              <a href="https://www.linkedin.com/in/sadikul-islam-6b2827278/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <img className="rounded-lg w-8 transition duration-300 ease-in-out transform hover:scale-110" src="https://i.ibb.co/ZNVDr1g/download-4.png" alt="" />
              </a>
              <a href="https://wa.link/4zwe0h" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <img className="rounded-lg w-12 transition duration-300 ease-in-out transform hover:scale-110" src="https://i.ibb.co/ZKMn0d2/sm-5b321c99945a2-removebg-preview.png" alt="" />
              </a>
              <a href="https://www.youtube.com/watch?v=OMVvjdxDvmA&list=PLFdvf8urHOpG-oyyXWfNoNXxPbF-7tQjj" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <img className="rounded-lg w-12 h-auto transition duration-300 ease-in-out transform hover:scale-110" src="https://i.ibb.co/wr380Tp/download-5-removebg-preview.png" alt="" />
              </a>
            </div>
          </div>
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
            src="https://i.ibb.co/Bn8sWGP/download-8.jpg"
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
            className="w-full h-full"
          />
        </div>
      </div>
      <hr className="border-b-stone-600 " />
    </section>
  );
};

export default Banner;
