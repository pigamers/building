export default function SectionOne() {
    return(
        <div>
            <div className="flex flex-col px-8 py-8">
                <h1 className="text-3xl font-bold pb-10">Upcoming
                    <span className="text-[#8e0000]"> Projects</span>
                </h1> 
                               
                <div class="max-w-md lg:max-w-full bg-usel01 bg-auto bg-no-repeat mb-10 bg-center border rounded-lg shadow">
                        <div className="flex flex-row justify-between p-5">
                            <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-200">NXP Super Tech Towers, Nevada, US</h5>
                            <button type="button" class="lg:px-6 py-1.5 text-lg rounded-md font-medium bg-[#8e0000] text-white">Save this Project</button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between mt-[150px] lg:mt-[500px]">
                        <p class="mb-3 font-normal text-gray-200 p-5">A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it. </p>
                        <div className="flex flex-row mb-5 justify-center items-center space-x-5 lg:space-x-16 bg-[#8e0000] text-white">
                            <div className="">
                                <h1 className="font-semibold lg:ml-7">Architects</h1>
                                <h1 className="text-2xl font-bold lg:ml-9">SPEC</h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="">
                                <h1 className="font-semibold lg:ml-4">Area</h1>
                                <h1 className="text-2xl font-bold">82m<sup>2</sup></h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="lg:pr-12">
                                <h1 className="font-semibold ml-2">Year</h1>
                                <h1 className="text-2xl font-bold">2023</h1>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="max-w-md lg:max-w-full bg-usel02 bg-auto bg-no-repeat mb-10 bg-center border rounded-lg shadow">
                        <div className="flex flex-row justify-between p-5">
                            <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-200">NXP Super Tech Towers, Nevada, US</h5>
                            <button type="button" class="lg:px-6 py-1.5 text-lg rounded-md font-medium bg-[#8e0000] text-white">Save this Project</button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between mt-[150px] lg:mt-[500px]">
                        <p class="mb-3 font-normal text-gray-200 p-5">A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                        <div className="flex flex-row mb-5 justify-center items-center space-x-5 lg:space-x-16 bg-[#8e0000] text-white">
                            <div className="">
                                <h1 className="font-semibold lg:ml-7">Architects</h1>
                                <h1 className="text-2xl font-bold lg:ml-9">SPEC</h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="">
                                <h1 className="font-semibold lg:ml-4">Area</h1>
                                <h1 className="text-2xl font-bold">82m<sup>2</sup></h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="lg:pr-12">
                                <h1 className="font-semibold ml-2">Year</h1>
                                <h1 className="text-2xl font-bold">2023</h1>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
            <div className="flex flex-col px-8 py-8">
                <h1 className="text-3xl font-bold pb-10">Trending
                    <span className="text-[#8e0000]"> Articles</span>
                </h1>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <div className="">
                    <img src={"/images/usel03.jpg"} className="max-w-xs lg:max-w-2xl" alt="" />
                        <div class="flex flex-col justify-between pt-5 leading-normal">
                            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">April 5, 2023</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mega Project Announced Near Zone 1</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                            <div>
                            <button type="button" class="mb-5 px-6 py-1.5 rounded-lg text-lg font-medium bg-[#8e0000] text-white"><a href="/home/articleOne">Read More</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">   
                    <span class="flex flex-col items-center md:flex-row md:max-w-xl">
                        <img class="object-cover md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src="/images/usel2.jpg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">April 5, 2023</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mega Project Announced Near Zone 1</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                        <div>
                        <button type="button" class="mb-5 px-9 py-1.5 rounded-lg text-lg font-medium bg-[#8e0000] text-white"><a href="/home/articleTwo">Read More</a></button>
                        </div>
                        </div>
                    </span>
                    <span class="flex flex-col items-center md:flex-row md:max-w-xl">
                        <img class="object-cover md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src="/images/usel3.jpg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">April 5, 2023</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mega Project Announced Near Zone 1</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                        <div>
                        <button type="button" class="mb-5 px-9 py-1.5 rounded-lg text-lg font-medium bg-[#8e0000] text-white"><a href="/home/articleThree">Read More</a></button>
                        </div>
                        </div>
                    </span>
                    <span class="flex flex-col items-center md:flex-row md:max-w-xl">
                        <img class="object-cover md:h-48 md:w-48 md:rounded-none md:rounded-l-lg" src="/images/usel4.jpg" alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">April 5, 2023</h5>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Mega Project Announced Near Zone 1</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A sample description of some of the lines in the article or perhaps a small little summary of it.</p>    
                        <div>
                        <button type="button" class="mb-5 px-9 py-1.5 rounded-lg text-lg font-medium bg-[#8e0000] text-white"><a href="/home/articleFour">Read More</a></button>
                        </div>
                        </div>
                    </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-8 py-8">
                <h1 className="text-3xl font-bold pb-10">Other
                    <span className="text-[#8e0000]"> Projects</span>
                </h1>
                <div class="max-w-md lg:max-w-full bg-usel03 bg-auto bg-no-repeat mb-10 bg-center border rounded-lg shadow">
                        <div className="flex flex-row justify-between p-5">
                        <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-200">NXP Super Tech Towers, Nevada, US</h5>
                            <button type="button" class="lg:px-6 py-1.5 text-lg rounded-md font-medium bg-[#8e0000] text-white">Save this Project</button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between mt-[150px] lg:mt-[500px]">
                        <p class="mb-3 font-normal text-gray-200 p-5">A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                        <div className="flex flex-row mb-5 justify-center items-center space-x-5 lg:space-x-16 bg-[#8e0000] text-white">
                            <div className="">
                                <h1 className="font-semibold lg:ml-7">Architects</h1>
                                <h1 className="text-2xl font-bold lg:ml-9">SPEC</h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="">
                                <h1 className="font-semibold lg:ml-4">Area</h1>
                                <h1 className="text-2xl font-bold">82m<sup>2</sup></h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="lg:pr-12">
                                <h1 className="font-semibold ml-2">Year</h1>
                                <h1 className="text-2xl font-bold">2023</h1>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="max-w-md lg:max-w-full bg-usel04 bg-auto bg-no-repeat bg-center border rounded-lg shadow">
                        <div className="flex flex-row justify-between p-5">
                            <h5 class="mb-2 lg:text-2xl font-bold tracking-tight text-gray-200">NXP Super Tech Towers, Nevada, US</h5>
                            <button type="button" class="lg:px-6 py-1.5 text-lg rounded-md font-medium bg-[#8e0000] text-white">Save this Project</button>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-between mt-[150px] lg:mt-[500px]">
                        <p class="mb-3 font-normal text-gray-200 p-5">A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it. A sample description of some of the lines in the article or perhaps a small little summary of it.</p>
                        <div className="flex flex-row mb-5 justify-center items-center space-x-5 lg:space-x-16 bg-[#8e0000] text-white">
                            <div className="">
                                <h1 className="font-semibold lg:ml-7">Architects</h1>
                                <h1 className="text-2xl font-bold lg:ml-9">SPEC</h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="">
                                <h1 className="font-semibold lg:ml-4">Area</h1>
                                <h1 className="text-2xl font-bold">82m<sup>2</sup></h1>
                            </div>
                            <div className="bg-white w-0.5 h-10 lg:h-20"></div>
                            <div className="lg:pr-12">
                                <h1 className="font-semibold ml-2">Year</h1>
                                <h1 className="text-2xl font-bold">2023</h1>
                            </div>
                        </div>
                        </div>
                </div>
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