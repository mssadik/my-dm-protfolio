import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';


const Work = () => {
    return (
        <section id="pre" className="bg-black py-16">
            <h2 className="text-3xl md:text-4xl text-white text-center pt-10  md:pt-20 mb-10 md:pb-18 font-serif font-extrabold ">What I DO</h2>
            <div className="flex gap-5 flex-col pt-5 md:pt-0 md:flex-row mx-0 md:mx-24 items-center justify-center mb-10  md:hover:p-1  hover:bg-slate-900">
                <div className="w-1/4 ">
                    <img className="w-full md:h-56 rounded-md" src="https://i.ibb.co/pz7SHvg/Untitled-design-2.png" alt="" />
                </div>
                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-center md:text-left text-1xl md:text-2xl mb-2 font-extrabold font-serif">Canva Pro Designer</h3>
                    <p className="text-xs md:text-base text-gray-300">As an Impact Strategist, I use Canva&lsquo;s visual magic to make brands shine. With my creative touch and Canva skills, I craft eye-catching graphics, designs, and thumbnails that stick in people&lsquo;s minds. From social media posts to branding and captivating video thumbnails, every piece connects with your audience, making your brand stand out online. With meticulous attention to detail, I ensure that each design reflects your brand identity and drives engagement. Work with me, and let go of your graphic design stress, while we elevate your brand&lsquo;s visual presence to new heights.</p>
                    <Link to="/canvaPreWork">
                        <button className="bg-emerald-400 mb-4 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none mt-4">
                            Previous work
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex gap-5 flex-col-reverse pt-5 md:pt-0 md:flex-row mx-0 md:mx-24 items-center justify-center mb-10  md:hover:p-1 hover:bg-slate-900">

                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-center md:text-left text-1xl md:text-2xl mb-2 font-extrabold font-serif">Facebook Marketing</h3>
                    <p className="text-xs md:text-base inline text-gray-300">With 3 years in Facebook marketing, I specialize in creating impactful online presences. My services include crafting engaging FB business pages, optimizing organic reach through strategic content, and executing targeted paid campaigns. My approach blends technical expertise with a client-centric focus, ensuring alignment with your unique business goals. Choose me as a dedicated partner committed to propelling your brand to new heights in the dynamic realm of social media.</p>
                    <p className="text-white mt-3 text-xs md:text-sm"> <i className="fa-solid fa-arrow-right"></i> Facebook business page creation and setup</p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> Facebook paid marketing (adverting) </p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> Browser site and server-side tracking</p>
                    <Link to="/facebookPreWork">
                        <button className="bg-emerald-400 mb-4 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none mt-4">
                            Previous work
                        </button>
                    </Link>
                </div>
                <div className="w-1/4 ">
                    <img className="w-full rounded-md" src="https://i.ibb.co/Bn8sWGP/download-8.jpg" alt="" />
                </div>
            </div>
            <div className="flex gap-5 flex-col pt-5 md:pt-0 md:flex-row mx-0 md:mx-24 items-center justify-center mb-10  md:hover:p-1 hover:bg-slate-900">
                <div className="w-1/4">
                    <img className="w-full rounded-md" src="https://i.ibb.co/4YCjy7G/download-6.jpg" alt="" />
                </div>
                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-center md:text-left text-1xl md:text-2xl mb-2 font-extrabold font-serif">Youtube Marketing</h3>
                    <p className="text-xs md:text-base text-gray-300">Welcome to a world where your YouTube videos not only captivate but dominate. As a Video SEO specialist, I bring a strategic edge to your content, ensuring it ranks high, reaches the right audience, and thrives in the competitive landscape of online video. From optimized titles, descriptions, and tags to leveraging cutting-edge SEO techniques, I engineer a pathway for your videos to be discovered and cherished. Witness increased views, subscriber growth, and elevated engagement—all while decoding the algorithms that drive YouTube&apos;s success. Let&apos;s amplify your video visibility and make your content the star it deserves to be. Partner with me for Video SEO that unlocks your channel&apos;s full potential.</p>
                    <p className="text-white mt-3 text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> Professional YouTube channel creation and setup</p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> Eye-catching thumbnail design</p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> YouTube video SEO and Optimisation</p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> YouTube ads campaign by Google ads account</p>
                    <p className="text-white text-xs md:text-sm"><i className="fa-solid fa-arrow-right"></i> YouTube influencer research</p>
                    <Link to="/youtubePreWork">
                        <button className="bg-emerald-400 mb-4 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none mt-4">
                            Previous work
                        </button>
                    </Link>
                </div>
            </div>
            
            

        </section>
    );
};

export default Work;