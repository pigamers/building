import {FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";
import {RiFacebookFill, RiLinkedinFill} from "react-icons/ri";
import {IoLogoJavascript} from "react-icons/io";


export default function Footer() {
    return( 
<footer className="px-16 py-8">
    <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="m-auto py-10 lg:m-0 lg:p-10">
            <IoLogoJavascript size={35} />
                <p class="text-md font-medium text-gray-600">Inside Architecture: Stories and Updates</p>
                    <ul className="flex flex-row space-x-7 pt-4">
                        <li>
                            <div className='border-2 border-[#8e0000] rounded-full w-8 h-8'>
                                <FaTwitter className='m-1.5 text-[#8e0000]' size={15}/>
                            </div>
                        </li>
                        <li>
                            <div className='border-2 border-[#8e0000] rounded-full w-8 h-8'>
                                <RiFacebookFill className='m-1.5 text-[#8e0000]' size={15}/>
                            </div>
                        </li>
                        <li>
                            <div className='border-2 border-[#8e0000] rounded-full w-8 h-8'>
                                <FiInstagram className='m-1.5 text-[#8e0000]' size={15}/>
                            </div>
                        </li>
                        <li>
                            <div className='border-2 border-[#8e0000] rounded-full w-8 h-8'>
                                <RiLinkedinFill className='m-1.5 text-[#8e0000]' size={15}/>
                            </div>
                        </li>
                    </ul>
        </div>
        <div className="flex m-auto lg:mx-10 flex-col lg:flex-row">
        <div className="flex flex-col p-5 lg:p-10">
            <h2 class="mb-6 text-lg font-bold text-[#8e0000]">About</h2>
                <ul class="text-gray-600 font-medium">
                    <li class="mb-4">
                        <a href="/">Company</a>
                    </li>
                    <li class="mb-4">
                        <a href="/">Featured</a>
                    </li>
                    <li class="mb-4">
                        <a href="/">Newsletter</a>
                    </li>
                </ul>
        </div>
        <div className="flex flex-col p-5 lg:p-10">
            <h2 class="mb-6 text-lg font-bold text-[#8e0000]">Help</h2>
                <ul class="text-gray-600 font-medium">
                    <li class="mb-4">
                        <a href="/">Contact Us</a>
                    </li>
                    <li class="mb-4">
                        <a href="/">FAQ</a>
                    </li>
                    <li class="mb-4">
                        <a href="/">Terms of Services</a>
                    </li>
                    <li class="mb-4">
                        <a href="/">Customer Service</a>
                    </li>
                </ul>
        </div>
        </div>
    </div>
    <p className="text-md font-semibold text-gray-600 text-center">ArchDaily © 2023. All Rights Reserved.</p>
</footer>

    )
}