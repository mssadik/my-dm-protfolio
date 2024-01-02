import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";

const Home = () => {
    return (
        <div>
            <div className="bg-black md:px-10">
                <Banner></Banner>
                <About></About>
                <Work></Work>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;