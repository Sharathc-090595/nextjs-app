import Image from "next/image";
import book from "../../public/Images/book.png";
import hoodie from "../../public/Images/hoodie.png";
import tshirt from "../../public/Images/tshirt.png";
import mug from "../../public/Images/mug.png";
import Group from "../../public/Images/Group.png";
import pen from "../../public/Images/pen.png";
import bottle from "../../public/Images/bottle.png";

const Theme = () => {
    return(
            <div className="hidden md:flex flex-col md:gap-1 xl:gap-1">   
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-yellow-600 md:w-10 md:h-10 xl:w-12 xl:h-12 "></div>
                    <div className="absolute md:mt-1 md:-ml-7 md:w-36 xl:mt-0 xl:-ml-9 xl:w-44"><Image src={book} alt="book"/></div>
                    <div className="bg-yellow-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-transparent md:w-24 md:h-10 xl:w-28 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-green-500 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-green-500 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="absolute md:-mt-24 md:-ml-28 md:w-96 xl:-mt-24 xl:-ml-24 xl:w-96"><Image src={hoodie} alt="hoodie"/></div>
                </div>
                <div className="flex">
                    <div className="bg-transparent w-10 h-6"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-yellow-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="absolute md:w-24 md:-ml-12 md:-mt-1 xl:w-32 xl:-ml-16 xl:-mt-2"><Image src={mug} alt="mug"/></div>
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-700 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-red-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-500 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-red-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="absolute md:w-72 md:-ml-32 md:-mt-20 xl:w-80 xl:-ml-36 xl:-mt-24"><Image src={tshirt} alt="tshirt"/></div>
                    <div className="bg-green-500 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="absolute md:w-28 md:ml-28 md:-mt-6 xl:w-36 xl:ml-32 xl:-mt-10"><Image src={Group} alt="group"/></div>
                    <div className="absolute md:w-24 md:ml-36 md:-mt-8 xl:w-36 xl:ml-44 xl:-mt-10"><Image src={pen} alt="pen"/></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-500 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-red-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex">
                    <div className="bg-transparent w-10 h-9"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="flex md:gap-1 xl:gap-1">
                    <div className="bg-yellow-700 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-red-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="absolute md:w-52 md:ml-9 md:-mt-28 xl:w-52 xl:ml-16 xl:-mt-28"><Image src={bottle} alt="bottle"/></div>
                </div>
                <div className="lg:hidden flex">
                    <div className="bg-transparent w-10 h-8"></div>
                </div>
                <div className="lg:hidden flex md:gap-1 xl:gap-1">
                    <div className="bg-white md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-red-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-yellow-600 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
                <div className="lg:hidden flex md:gap-1 xl:gap-1">
                    <div className="bg-transparent md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                    <div className="bg-blue-400 md:w-10 md:h-10 xl:w-12 xl:h-12"></div>
                </div>
            </div> 
        );
    }

export default Theme;
