import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionThree from "../components/SectionThree";

export default function Two() {
    return(
        <div>
            <Navbar />
            <SectionThree />
            <div className="bg-[#8e0000] h-2"></div>
            <Footer />
        </div>
    )
}