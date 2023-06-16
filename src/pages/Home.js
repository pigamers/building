import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionOne from "../components/SectionOne";

export default function Home() {
    return(
        <div>
            <Navbar />
            <Carousel />
            <SectionOne />
            <div className="bg-gradient-to-r from-[#e1d476] via-gray-600 to-[#153e8d] h-2"></div>
            <Footer />
        </div>
    )
}