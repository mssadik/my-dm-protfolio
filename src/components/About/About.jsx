const About = () => {
    return (
        <section id='about' className="bg-black">
            <h2 className="text-white text-4xl mb-5 font-serif font-extrabold text-center">About Me</h2>
            <div className="flex flex-col-reverse md:flex-row lg:flex-row md:mx-20  px-8 lg:pb-5 md:px-4">
                <div className="md:w-3/6">
                    <h2 className="text-2xl font-bold mb-2 hidden md:block text-emerald-500">Unlock Your Brand&apos;s Potential: Elevating Businesses through Digital Mastery.</h2>
                    <h2 className="text-1xl font-bold mb-2 block md:hidden  text-emerald-500">Unlock Your Brand&apos;s Potential: Elevating Businesses through Digital Mastery.</h2>
                    <p className="mb-4 text-slate-300 text-xs md:text-sm "> As a seasoned digital marketer with a focus on YouTube video SEO, I specialize in driving brand visibility and engagement. With over three years of experience, I craft compelling ad strategies, execute strategic campaigns, and offer expert product design services. Let&apos;s collaborate to optimize your YouTube presence and drive tangible results for your brand.</p>
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
                            src="https://www.youtube.com/embed/f4yjNY78JLo?si=odyQoXxCrDzdDuEv"
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
