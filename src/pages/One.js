import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SectionTwo from "../components/SectionTwo";

export default function One(params) {
    return (
        <div>
            <Navbar />
            <SectionTwo />
            <div className="bg-[#8e0000] h-2"></div>
            <Footer />
        </div>
    )
}