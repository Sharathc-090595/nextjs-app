import Image from "next/image";
import logo from "../../public/Images/logo.png";
import themebg from "../../public/Images/themebg.png";
import inscribink_tm from "../../public/Images/inscribink_tm.png";
import blank from "../../public/Images/blank.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone, FaLocationDot, FaCircleXmark } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Theme from './Theme';

const Backup = () => {
    return(
        <div className="container m-2 flex">
            <div>
                {/* below div is for mobile screen only */}
                <div className="flex justify-end">
                    <Image className="absolute z-0 w-40 sm:w-52 opacity-25 md:hidden" src={themebg} alt="themebg"/>
                    
                </div>
                {/* div for mobile screen ends */}
                <div className="flex">
                    <div>
                        <div>
                            <Image className="h-20 w-20 md:h-28 md:w-28"src={logo} alt="logo"/>
                        </div>
                        <div className="ml-2 w-44 md:w-64 md:h-20">
                            <Image src={inscribink_tm} alt="tm"/>
                        </div>
                        <div className="ml-2">
                            <h1 className="text-4xl sm:text-5xl -ml-1 md:text-7xl">Coming Soon!</h1>
                            <h5 className="mt-8 mb-2 text-sm md:text-base ml-2 xl:text-lg">Your One-Stop Print Shop!</h5>
                            <p className="pr-6 text-xs mb-4 sm:text-sm md:text-base xl:text-xl leading-relaxed text-left md:mr-24 xl:mr-44 ml-2">At Inscribink, we're passionate about turning your ideas into vibrant reality! We offer a vast selection of customizable printing options, from classic t-shirts and stylish water bottles to personalized notebooks and professional brochures. We use top-notch printing technology to ensure exceptional quality, and our dedicated team is here to make your experience seamless.</p>
                        </div>
                        <div className="lg:flex justify-center lg:mb-5 mt-12 lg:mt-5 xl:mt-10"> 
                            <h2 className="text-base sm:text-lg xl:text-xl font-medium ml-1 mt-5 sm:ml-20">We are open for orders though...</h2>
                        </div>
                            <div className="flex md:justify-center text-xs sm:text-sm md:text-base md:ml-10 xl:text-xl ml-5 mt-2">
                                <div className="flex flex-col lg:flex-row lg:justify-evenly space-y-2 mt-4">
                                    <div>
                                        <div className="flex space-x-6">
                                            <div> 
                                                <h3 className="text-yellow-400 -ml-3 md:-ml-8">Order through WhatsApp or Call :</h3>
                                            </div>
                                            <div>
                                                <a href="https://wa.me/9846655561">+919846655561</a><br></br>
                                                <a href="https://wa.me/9846655562">+919846655562</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex space-x-6 sm:mt-3 lg:-mt-2">
                                            <div>    
                                                <h3 className="text-yellow-400 ml-28 sm:ml-32 lg:ml-16">Mail us at :</h3>
                                            </div>
                                            <div className="space-y-3 md:ml-10">
                                                <a href="mailto:info@inscribink.com">info@inscribink.com</a><br></br>
                                                <a href="mailto:contact@inscribink.com">contact@inscribink.com</a>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div className="hidden md:flex justify-center mr-20 xl:mr-32">
                            <Image className="absolute -z-10 blur-2xl -mt-10" src={themebg} alt="themebg"/>
                        </div>
                        <div className="mr-10 2xl:mr-36">
                            <Theme />
                        </div> 
                    </div>   
                </div>
                <div className="flex justify-evenly relative inset-y-40 h-16 -mt-10 bg-yellow-500 border-dashed border-y-8 border-black -rotate-12 lg:-rotate-6">
                    <div className="p-3 text-sm sm:text-lg md:text-xl text-black font-bold text-center">Launching Soon</div>
                    <div className="p-3 text-sm sm:text-lg md:text-xl text-black font-bold text-center">Launching Soon</div>
                </div>
                <div className="m-5 sm:ml-20 sm:mr-20">
                       {/* This section is for extra small(xs) and small screen */}
                    <div className="bg-white md:hidden rounded-3xl space-y-4 p-5 z-0">
                        <div><Image className="rounded-xl h-72 sm:h-80 w-full" src={blank} alt="blank"/></div>
                        <div><Image className="rounded-xl h-48 sm:h-52 w-full" src={blank} alt="blank"/></div>
                        <div className="flex justify-evenly">
                            <div><Image className="rounded-xl h-60 sm:h-72 w-32 sm:w-40" src={blank} alt="blank"/></div>
                            <div><Image className="rounded-xl h-60 sm:h-72 w-32 sm:w-40" src={blank} alt="blank"/></div>
                        </div>
                    </div>
                        {/* This section is for medium screen and above */}
                    <div className="hidden md:flex justify-evenly bg-white rounded-3xl space-x-6 h-auto aspect-auto p-4 z-0">
                        <div><Image className="rounded-3xl h-96 w-80" src={blank} alt="blank"/></div>
                        <div className="block space-y-4"> 
                            <div><Image className="rounded-3xl h-44 w-80" src={blank} alt="blank"/></div>
                            <div><Image className="rounded-3xl h-44 w-80" src={blank} alt="blank"/></div>
                        </div>
                        <div><Image className="rounded-3xl h-96 w-80" src={blank} alt="blank"/></div>
                    </div>
                        {/* image section for medium screen and above ends here */}
                </div>
                <div className="flex flex-col items-center md:flex-row md:justify-evenly md:mt-12">
                    <div>
                        <div className="text-start text-xl sm:text-xl font-semibold tracking-tighter w-40 m-10 align-middle">
                            <h2>Let's discuss<br></br> on something <span className="text-yellow-500">cool</span> together</h2>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center">
                            <div className="mt-2 ml-2 sm:mt-3"><IoIosMail color="eab308" fontSize="1.5em"/></div>
                            <div className="text-sm sm:text-base xl:text-lg text-start ml-3">
                                <a href="mailto:contact@inscribink.com">contact@inscribink.com</a><br></br>
                                <a href="mailto:info@inscribink.com">info@inscribink.com</a>
                            </div>
                        </div>
                        <div className="border-4 border-yellow-600 rounded-lg w-48 sm:w-52 bg-yellow-300 mt-6 text-black text-sm text-center font-medium">
                            <div className="flex">
                                <div className="mt-2 ml-2 sm:mt-3">
                                    <FaPhone color="eab308" fontSize="1.5em"/>
                                </div>   
                                <div className="ml-4 text-sm sm:text-base xl:text-lg">                   
                                    <a href="https://wa.me/9846655561">+91-9846655561</a><br></br>
                                    <a href="https://wa.me/9846655562">+91-9846655562</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-6">
                            <div className="ml-3 sm:ml-0">
                                <FaLocationDot color="eab308" fontSize="1.5em"/>
                            </div>
                            <div className="text-sm sm:text-base xl:text-lg ml-4">
                                <a href="https://www.google.com/maps/place/Inscribink+Printing+and+Branding+solutions/@10.4964554,76.1404839,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7ed0e89db2ea5:0xe884a9abeeae08e2!8m2!3d10.4964554!4d76.1430642!16s%2Fg%2F11vzvmllcd?entry=ttu">Thrissur, Kerala 680620</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center space-x-10 mt-12 mb-10">
                    <div className="mt-3"><a href="https://www.facebook.com/inscribink/"><FaFacebookF color="white" fontSize="1.5em"/></a></div>    
                    <div className="bg-yellow-400 h-12 w-12 flex justify-center items-center rounded-full "><a href="https://www.instagram.com/inscribink/"><GrInstagram color="white" fontSize="1.7em"/></a></div>
                </div>
            </div> 
            {/* <div className="mr-10 2xl:mr-36">
                <Theme />
            </div>   */}
        </div>
    );
}

export default Backup;