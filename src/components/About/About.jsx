const About = () => {
    return (
        <section id='about' className="bg-black">
            <h2 className="text-white text-4xl mb-5 font-serif font-extrabold text-center">About Me</h2>
            <div className="flex flex-col-reverse md:flex-row lg:flex-row md:mx-20  px-8 lg:pb-5 md:px-4">
                <div className="md:w-3/6">
                    <h2 className="text-2xl font-bold mb-2 hidden md:block text-emerald-500">Strategist of Social Impact: Elevating Businesses through Facebook, Instagram, and YouTube Mastery.</h2>
                    <h2 className="text-1xl font-bold mb-2 block md:hidden  text-emerald-500">Social Media Maven: Boosting Brands with Expertise in Facebook, Instagram, and YouTube.</h2>
                    <p className="mb-4 text-slate-300 text-xs md:text-sm ">

                        As a seasoned social media expert, I specialize in elevating brands through targeted Facebook and Instagram ads, strategic marketing campaigns, and comprehensive YouTube services. My proficiency extends from crafting compelling ad strategies that drive engagement and conversions to implementing SEO techniques for enhanced video discoverability. With a focus on YouTube channel monetization, I guide creators towards sustainable success. My portfolio reflects a proven track record of optimizing online presence, fostering audience growth, and maximizing revenue streams. Let&apos;s collaborate to amplify your social media impact and achieve unparalleled success in the digital landscape.
                    </p>
                    <a href="#contact"><button className="bg-emerald-400 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none">
                        Contact me
                    </button></a>
                </div>
                <div className="mb-4 flex items-center justify-center md:w-3/6 md:mr-4 lg:mr-4 md:mb-0 lg:mb-0">
                    <div className="block md:hidden">
                        <iframe
                            style={{ width: '100%', maxWidth: '560px', height: '315px' }}
                            className="w-full h-full"
                            src="https://www.youtube.com/emed/FAq3HlR4c5I?si=a52XkN4XvrLRuom2"
                            title="YouTube Video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="hidden md:block">
                        <iframe
                            className={{}}
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embd/ZZJdSrL4hQQ?si=2f-DVvMC2RN8FZVc"
                            title="YouTube Video"
                            allowfullscreen
                        ></iframe>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default About;
