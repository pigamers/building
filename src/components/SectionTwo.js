import { CgSortAz } from "react-icons/cg";
import { MdFilterAlt } from "react-icons/md";

export default function SectionTwo() {
    return (
        <div>
            <div className="mt-20 flex flex-row justify-between px-10 py-8">
                <h1 className="text-3xl font-bold pb-10">Project
                    <span className="text-[#8e0000]"> Images</span>
                </h1>
                <div className="flex flex-row">
                    <div>
                        <button type="button" class="m-2 rounded-lg px-6 py-1 text-lg font-semibold bg-gray-500 text-[#8e0000]">
                            <MdFilterAlt size={25} />
                            Filter
                        </button>
                    </div>
                    <div>
                        <button type="button" class="m-2 rounded-lg px-6 py-1 text-lg font-semibold bg-gray-500 text-[#8e0000]">
                            <CgSortAz size={25} />
                            Sort
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:columns-3 mx-10 space-y-5">
                <img src="/images/usel01.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel2.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel02.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel3.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel03.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel4.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
                <img src="/images/usel04.jpg" className="w-full aspect-auto hover:scale-110 duration-300" alt="" />
            </div>
            <div className="py-8 px-8 flex flex-col lg:flex-row justify-center lg:justify-between lg:px-24 items-center">
                <h1 className="text-2xl lg:text-4xl font-semibold text-center my-5">Subscribe to our Newsletter</h1>
                <div className="flex flex-row justify-center items-center">
                <input className="bg-gray-300 w-full h-10 p-3" placeholder="Email" />
                <button type="button" class="px-9 py-1.5 text-lg font-medium bg-[#8e0000] text-white">Subscribe</button>
                </div>
            </div>
        </div>
    )
}