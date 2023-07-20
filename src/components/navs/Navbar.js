import { useState, useEffect } from "react";
import {
    Typography,
} from "@material-tailwind/react";
import Logo from '../../assets/logo.png'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';


export default function NewNav() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);



    const navigate = useNavigate();


    const navList = (
        <ul className="flex mb-0 -mt-2 flex-row items-center gap-10 mx-auto justify-center cursor-pointer">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 mt-3 animate-fadeInLeft animate-delay-[300ms]">
                <a href="#" onClick={() => navigate("/dashboard")} className=" relative items-center group ">
                    <span className="link link-underline link-underline-black text-gray-500 uppercase font-bold text-base hover:text-gray-900">Dashboard</span>
                </a>
            </Typography>
            <a href="">
                <img src={Logo} alt="Logo" onClick={() => navigate("")} className="w-[4rem] mb-2 mt-3  animate-fadeInDown animate-delay-[400ms] " />
            </a>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 mt-3 animate-fadeInRight animate-delay-[300ms]">
                <a href="#" onClick={() => navigate("/forum")} className="relative items-center group  ">
                    <span className="link link-underline link-underline-black text-gray-500 uppercase font-bold text-base hover:text-gray-900">Forum</span>
                </a>
            </Typography>
        </ul>
    );

    return (
        <div className=" z-50 overflow-hidden inset-x-0 rounded-b-3xl flex items-center justify-center ">

            <div className="animate-fadeInLeft">
                <h2 href="#" className=" relative items-center group before:absolute before:left-1 before:right-1 before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-indigo-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 font-extrabold text-3xl hover:text-gray-900 cursor-default">SmartEd AI</span>
                </h2>
            </div>



            <div className="container flex items-center px-[22rem] mr-[6rem] justify-between w-auto">
                <div className="block">{navList}</div>
            </div>

            <a href="#" onClick={() => navigate("/signup")} class="relative animate-fadeInRight inline-flex items-center justify-center py-2 px-6 overflow-hidden font-medium text-[#7E78AE] transition duration-300 ease-out border-2 border-amethyst-500 rounded-full shadow-sm group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-amethyst-400 group-hover:translate-x-0 ease">
                    <FaSignInAlt class="w-5 h-5" />
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-white transition-all text-md duration-300 transform group-hover:translate-x-full uppercase ease">Sign In</span>
                <span class="relative uppercase invisible">Sign In</span>
            </a>

        </div>
    );
}