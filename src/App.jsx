import About from "./components/About/About"
import Banner from "./components/Banner/Banner"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import Work from "./components/Work/Work"


function App() {

  return (
    <>
      <div className="bg-black">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Work></Work>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
