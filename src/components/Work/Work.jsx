import { Link } from "react-router-dom";

const Work = () => {
    return (
        <section id="pre" className="bg-black py-16">
            <h2 className="text-3xl md:text-4xl text-white text-center pt-10  md:pt-20 mb-10 md:pb-18 font-serif font-extrabold">What I DO</h2>
            <div className="flex flex-col md:flex-row mx-0 md:mx-20 items-center justify-center mb-10">
                <div className="w-1/4 ">
                    <img src="https://i.ibb.co/bmJxvXP/download-2-removebg-preview.png" alt="" />
                </div>
                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-2xl mb-2 font-extrabold font-serif">Facebook Marketing</h3>
                    <p className="text-xs md:text-base text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem dolores tempore reprehenderit quas cum ea omnis quis ab assumenda, molestias consequatur enim dolor corporis. Quaerat beatae id ratione dolore officiis tempore soluta dicta distinctio expedita autem, earum corporis praesentium eum rerum debitis impedit nisi unde hic amet animi fugiat dolorem magnam. Illum laudantium deleniti ex similique corporis tempore enim? Repudiandae natus, ea mollitia reprehenderit alias vel provident aperiam laborum officia eaque doloribus aspernatur quo distinctio laudantium. Voluptate, voluptatum corrupti.</p>
                    <Link to="/facebookPreWork">
                        <button className="bg-emerald-400 mb-4 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none mt-4">
                            Previous work
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row mx-0 md:mx-20 items-center justify-center mb-10">
                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-2xl mb-2 font-extrabold font-serif">Instagram Marketing</h3>
                    <p className="text-xs md:text-base text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem dolores tempore reprehenderit quas cum ea omnis quis ab assumenda, molestias consequatur enim dolor corporis. Quaerat beatae id ratione dolore officiis tempore soluta dicta distinctio expedita autem, earum corporis praesentium eum rerum debitis impedit nisi unde hic amet animi fugiat dolorem magnam. Illum laudantium deleniti ex similique corporis tempore enim? Repudiandae natus, ea mollitia reprehenderit alias vel provident aperiam laborum officia eaque doloribus aspernatur quo distinctio laudantium. Voluptate, voluptatum corrupti.</p>
                    <Link to="/instaPreWork">
                        <button className="bg-emerald-400 mb-4 font-extrabold text-white py-2 px-6 rounded-full hover:bg-amber-600 focus:outline-none mt-4">
                            Previous work
                        </button>
                    </Link>
                </div>
                <div className="w-1/4">
                    <img className="w-full" src="https://i.ibb.co/r4RfWGV/download-4-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mx-0 md:mx-20 items-center justify-center mb-10">
                <div className="w-1/4">
                    <img src="https://i.ibb.co/YWWnWfK/download-3-removebg-preview-2.png" alt="" />
                </div>
                <div className="w-3/4">
                    <h3 className="text-emerald-500 text-2xl mb-2 font-extrabold font-serif">Youtube Marketing</h3>
                    <p className="text-xs md:text-base text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem dolores tempore reprehenderit quas cum ea omnis quis ab assumenda, molestias consequatur enim dolor corporis. Quaerat beatae id ratione dolore officiis tempore soluta dicta distinctio expedita autem, earum corporis praesentium eum rerum debitis impedit nisi unde hic amet animi fugiat dolorem magnam. Illum laudantium deleniti ex similique corporis tempore enim? Repudiandae natus, ea mollitia reprehenderit alias vel provident aperiam laborum officia eaque doloribus aspernatur quo distinctio laudantium. Voluptate, voluptatum corrupti.</p>
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