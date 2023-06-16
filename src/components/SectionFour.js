export default function SectionFour() {
    return(
        <div>
            <div className="mt-16 py-10 flex flex-col justify-center items-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-center my-5">Subscribe to our Newsletter</h1>
            <div className="flex flex-row justify-center items-center">
                <input className="bg-gray-300 w-full h-10 p-3" placeholder="Search" />
                <button type="button" class="px-9 py-1.5 text-lg font-medium bg-[#8e0000] text-white">Search</button>
            </div>
            </div>
            <div className="flex flex-col lg:px-12 lg:flex-row justify-between">
                <div className="flex flex-col">
                    <img src={"/images/itemOne.jpg"} className="max-w-sm lg:max-h-min lg:max-w-xl" alt="" />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row pb-5">
                    <img src={"/images/itemOne.jpg"} className="max-w-sm" alt="" />
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col px-5">
                        <img src={"/images/itemOne.jpg"} className="max-w-xs" alt="" />
                        </div>
                        <div className="flex flex-col">
                        <img src={"/images/itemOne.jpg"} className="max-w-xs" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16 py-10 flex flex-col justify-center items-center">
                <h1 className="text-2xl lg:text-4xl font-bold text-center my-5">Subscribe to our Newsletter</h1>
            <div className="flex flex-row justify-center items-center">
                <input className="bg-gray-300 w-full h-10 p-3" placeholder="Email" />
                <button type="button" class="px-9 py-1.5 text-lg font-medium bg-[#8e0000] text-white">Subscribe</button>
            </div>
            </div>
        </div>
    )
}