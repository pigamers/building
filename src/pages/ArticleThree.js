import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GrShareOption } from "react-icons/gr";
import { BiRectangle } from "react-icons/bi";
import { BsFillCalendarFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { MdArchitecture } from "react-icons/md";

export default function ArticleThree() {
    return(
        <div>
            <Navbar />
            <div className="my-28 flex flex-col text-gray-900">
                <div className="justify-center items-center px-5">
                    <h5 class="text-2xl py-5 text-center font-bold tracking-tight">Mega Project Announced Near Zone 1</h5>
                    <img src={"/images/usel3.jpg"} className="w-full m-auto lg:max-w-full" alt="" />
                </div>
                <div className="flex flex-row justify-between items-center px-8">
                    <p className="text-2xl py-5 font-bold tracking-tight text-gray-900">Created by RockStar</p>
                    <div>
                    <GrShareOption size={30}/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:justify-between px-10">
                    <ul className="text-xl font-semibold space-y-6 lg:w-1/2 py-5">
                        <li className="flex items-center gap-5"><BiRectangle size={35} />Area : 7598 m^2</li>
                        <li className="flex items-center gap-5"><BsFillCalendarFill  size={35}/>Year : 2023</li>
                        <li className="flex items-center gap-5"><MdArchitecture  size={35}/>Architect : Mr.Rockstar</li>
                        <li className="flex items-center gap-5"><ImLocation  size={35}/>Location : Kolkata</li>
                    </ul>
                    <div className="text-xl font-semibold space-y-6 lg:w-1/2 py-5">
                        <h1 className="font-medium">Description </h1>
                        <p>Dolor nisi exercitation adipisicing aliqua Lorem. Incididunt enim culpa esse qui officia cupidatat cillum. Mollit qui laborum ad est aute irure ad aliqua incididunt irure ex. Sint ad ipsum ea anim aliquip aliquip quis laboris commodo. Commodo qui consectetur esse dolore do irure sint officia ipsum. Voluptate fugiat do qui ex adipisicing aliqua magna enim ut elit est et duis consectetur. Ad aliqua ea cillum laboris labore nulla nulla ipsum non sit esse velit officia nisi.</p>
                        <div className="flex justify-center">
                        <button type="button" class="mb-5 px-9 py-1.5 rounded-lg text-lg font-medium bg-[#8e0000] text-white">More Images</button>
                        </div>
                    </div>
                </div>
                <div className="text-xl font-medium py-5 space-y-6 px-10 justify-center items-center">
                    <p>Esse est do aliqua non. Occaecat ex nulla veniam adipisicing tempor cupidatat. Aliqua cillum exercitation non est sunt do tempor aliqua elit cupidatat laboris. Fugiat qui quis cupidatat officia. Qui Lorem magna ipsum fugiat qui ut incididunt reprehenderit pariatur. Veniam incididunt tempor sunt do fugiat labore sint esse dolor incididunt fugiat Lorem do laborum.</p>
                    <img src={"/images/usel3.jpg"} className="w-full m-auto lg:max-w-full" alt="" />
                </div>
                <div className="text-xl font-medium py-5 space-y-6 px-10 justify-center items-center">
                    <p>Esse est do aliqua non. Occaecat ex nulla veniam adipisicing tempor cupidatat. Aliqua cillum exercitation non est sunt do tempor aliqua elit cupidatat laboris. Fugiat qui quis cupidatat officia. Qui Lorem magna ipsum fugiat qui ut incididunt reprehenderit pariatur. Veniam incididunt tempor sunt do fugiat labore sint esse dolor incididunt fugiat Lorem do laborum. Adipisicing in proident anim sunt enim laboris ad incididunt pariatur quis in fugiat. Pariatur deserunt pariatur sit dolore exercitation excepteur esse eu. Excepteur ullamco nisi et ad ipsum aute ad cillum commodo exercitation ullamco nulla voluptate dolor. Enim occaecat esse eiusmod commodo aliquip aliquip voluptate.Consectetur magna irure aute quis enim sit ipsum cillum esse nostrud ut est. Minim Lorem veniam cupidatat exercitation ad elit elit pariatur proident enim incididunt duis. Fugiat elit fugiat ipsum duis ad ullamco labore consequat aute. Ad tempor officia velit aute culpa id ullamco. Aliquip tempor id voluptate elit sit ea nostrud quis id enim. Nisi tempor occaecat esse excepteur ut fugiat pariatur adipisicing laboris proident. Mollit nisi exercitation eu amet proident duis adipisicing et qui.Duis minim commodo adipisicing duis laborum tempor elit duis. Sint pariatur ea amet sint veniam consectetur. Incididunt dolore ut est veniam minim sunt mollit nostrud. Cillum enim aliquip qui magna amet dolor velit. Do labore velit laborum commodo nulla enim Lorem cillum duis commodo aliquip. Ut consectetur exercitation enim qui reprehenderit consectetur sit eiusmod do incididunt fugiat eu nisi magna. Cupidatat eu sint ullamco cillum aliqua irure.
                    </p>
                    <img src={"/images/usel3.jpg"} className="w-full m-auto lg:max-w-full" alt="" />
                </div>
                <div className="text-xl font-medium justify-center flex flex-col lg:flex-row items-center lg:justify-between px-10">
                    <div className="lg:w-1/2 space-y-6 py-5 lg:px-5">
                    <h5>Project Location</h5>
                    <h4>Address : Near Kolkata Airport</h4>
                    </div>
                    <div className="h-60 w-full lg:w-1/2 text-center bg-green-400">
                        {/* Live Location */}
                        <h1>Location by Google Maps</h1>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-[#e1d476] via-gray-600 to-[#153e8d] h-2"></div>
            <Footer />
        </div>
    )
}