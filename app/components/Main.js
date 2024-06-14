import Image from "next/image";
import logo from "../../public/Images/logo.png";
import themebg from "../../public/Images/themebg.png";
import inscribink_tm from "../../public/Images/inscribink_tm.png";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaGrinBeamSweat } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Theme from './Theme';

const Main = () => {
    return(
        <div className="m-2">
            <div className="flex justify-evenly">
                <div>
                    <Image className="mt-6 ml-4" src={logo} width={100} height={100} alt="logo"/>
                    <div className="ml-8 mb-6">
                        <Image src={inscribink_tm} width={320} height={320} alt="tm"/>
                        <Image className="absolute -z-10 ml-96 -mt-48 md:hidden opacity-40" src={themebg} width={300} height={300} alt="themebg"/>
                        <h1 className="text-6xl font-medium">Coming Soon!</h1>
                        <h4 className="mt-5 mb-5 ml-1 text-xl">Your One-Stop Print Shop!</h4>
                        <p className="ml-1 mb-5 mt-3 pr-8 xl:text-xl leading-relaxed text-left mr-0 md:mr-12 xl:mr-80">At Inscribink, we're passionate about turning your ideas into vibrant reality! We offer a vast selection of customizable printing options, from classic t-shirts and stylish water bottles to personalized notebooks and professional brochures. We use top-notch printing technology to ensure exceptional quality, and our dedicated team is here to make your experience seamless.</p>
                    </div>
                    <div className="m-6 p-4 lg:flex flex-col space-y-4">
                        <div><h2 className="text-xl text-center lg:text-2xl mt-4 mb-5 font-medium tracking-wider">We are open for orders through...</h2></div>
                        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0">
                            <div className="flex ml-3 space-x-4 lg:space-x-2 xl:text-xl">
                                <div><h3 className="text-yellow-400">Order through WhatsApp or Call :</h3></div>
                                <div>
                                    <a href="https://wa.me/9846655561">+919846655561</a><br></br>
                                    <a href="https://wa.me/9846655562">+919846655562</a>
                                </div>
                            </div>
                            <div className="ml-44 md:ml-28 lg:ml-10 flex space-x-4 xl:text-xl">
                                <div><h3 className="text-yellow-400">Mail us at :</h3></div>
                                    <div>
                                        <a href="mailto:info@inscribink.com">info@inscribink.com</a><br></br>
                                        <a href="mailto:contact@inscribink.com">contact@inscribink.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mr-10">
                        <Theme />
                    </div>
                </div>
                <div className="m-8">
                    <div className="flex justify-center">
                        <div className="flex relative inset-y-36 w-full h-20 bg-yellow-500 box-border border-dashed border-y-8 border-black -rotate-12 lg:-rotate-6">
                            <div className="p-3 w-full text-2xl text-black font-bold text-center">Launching Soon</div>
                            <div className="p-3 w-full text-2xl text-black font-bold text-center">Launching Soon</div>
                        </div>
                    </div>
                    {/* for small screen */}  
                    <div className="bg-white md:hidden rounded-3xl space-y-6 p-4">
                        <div><img className="rounded-3xl h-80 w-full" src="blank.png" alt="blank"></img></div>
                        <div><img className="rounded-3xl h-44 w-full" src="blank.png" alt="blank"></img></div>
                        <div className="flex justify-evenly pt-4 pb-0">
                            <div><img className="rounded-3xl h-72 w-36" src="blank.png" alt="blank"></img></div>
                            <div><img className="rounded-3xl h-72 w-36" src="blank.png" alt="blank"></img></div>
                        </div>
                    </div>
                    {/* For medium screen and above */}
                    <div className="hidden md:flex justify-evenly bg-white rounded-3xl space-x-6 h-auto p-4">
                        <div><img className="rounded-3xl h-96 w-80" src="blank.png alt="blank""></img></div>
                            <div className="block space-y-4"> 
                                <div><img className="rounded-3xl h-44 w-80" src="blank.png alt="blank""></img></div>
                                <div><img className="rounded-3xl h-44 w-80" src="blank.png alt="blank""></img></div>
                            </div>
                        <div><img className="rounded-3xl h-96 w-80" src="blank.png" alt="blank"></img></div>
                    </div>
                    <div className="flex flex-col justify-center items-center md:flex-row md:justify-evenly m-10">
                        <div className="text-start text-3xl font-semibold tracking-wider w-64 m-10">
                            <h2>Let's discuss on something <span className="text-yellow-500">cool</span> together</h2>
                        </div>
                        <div>
                            <div className="flex">
                                <div className="mt-4 ml-4"><IoIosMail color="eab308" fontSize="2em"/></div>
                                <div className="text-xl text-start ml-4">
                                    <a href="mailto:contact@inscribink.com">contact@inscribink.com</a><br></br>
                                    <a href="mailto:info@inscribink.com">info@inscribink.com</a>
                                </div>
                            </div>
                                <div className="border-4 border-yellow-600 rounded-lg w-64 bg-yellow-300 mt-10 text-black text-xl text-center font-medium">
                                <div className="flex">
                                    <div className="mt-4 ml-4"><FaPhone color="eab308" fontSize="1.5em"/></div>   
                                    <div className="ml-5">                   
                                        <a href="https://wa.me/9846655561">+91-9846655561</a><br></br>
                                        <a href="https://wa.me/9846655562">+91-9846655562</a>
                                    </div>
                                    </div>
                                </div>   
                            <div className="flex">
                                <div className="mt-10 ml-4"><FaLocationDot color="eab308" fontSize="1.5em"/></div>
                                <div className="text-xl mt-10 ml-5">
                                    <a href="https://www.google.com/maps/place/Dr.Detailing+Car+Spa/@10.498299,76.1403174,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba7f3797de58165:0xa8b4dbf9bd03a6c8!8m2!3d10.498299!4d76.145183!16s%2Fg%2F11mvhqr2yx?entry=ttu">Arimbur, Thrissur, Kerala 680620</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-10 mt-10 mb-10">
                            <div className="mt-4"><a href="https://www.facebook.com/inscribink/"><FaFacebookF color="white" fontSize="1.5em"/></a></div>    
                            <div className="bg-yellow-400 h-16 w-16 flex justify-center items-center rounded-full "><a href="https://www.instagram.com/inscribink/"><GrInstagram color="white" fontSize="1.7em"/></a></div>
                    </div>
            </div>
        </div>
    );
}

export default Main;
