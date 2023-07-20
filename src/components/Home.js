import Logo from './../assets/logo.png'
import EduHeroImg from './../assets/edu-hero-icon.png'
import Person from './../assets/person.png'
import Efficient from './../assets/efficient.png'
import Community from './../assets/community.png'
import { FaSignInAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    let navigate = useNavigate()
    return (

        <div className=''>
            <div className="w-[30rem] ml-[2rem] ">
                <a href="">
                    <img src={Logo} alt="Logo" className="w-[5rem] mr-2 mt-2 inline-block" />
                </a>

                <h2 href="#" className="relative inline-block mt-2 justify-center align-middle items-center group before:absolute before:left-1 before:right-1 before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-indigo-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                    <span className="relative text-gray-500 font-extrabold text-4xl hover:text-gray-900 cursor-default">SmartEd AI</span>
                </h2>
            </div>

            <div className='ml-[8rem] mt-[8rem]'>
                <div className="flex items-center justify-center w-[45rem] animate-fadeInLeft">
                    <h1 className='font-extrabold text-gray-500  text-7xl '>
                        The next
                        <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-delft-400'> AI-powered </span>
                        education platform
                    </h1>
                </div>

                <a onClick={() => navigate("/signup")} class="inline-flex cursor-pointer animate-fadeInLeft items-center justify-center px-8 py-4 mt-[1.5rem] text-lg font-bold leading-6 text-white bg-[#7E78AE] border border-transparent rounded-full w-auto hover:border-indigo-300 focus:outline-none">
                    Sign Up Today
                </a>


                <div className='absolute left-[50rem] top-[3rem] animate-fadeInRight'>
                    <img src={EduHeroImg} alt="EduHeroImg" className='w-[100rem]' />
                </div>
            </div>

            <svg xmlns='http://www.w3.org/2000/svg' fill="rgb(241 245 249)" className='absolute mt-[12rem] rotate-180' viewBox='0 0 1185 248'>
                <path d='M50.5 199.8c112.4 0 87.5-49 188.7-59.3s146.7 38.3 219.5 38.3 107.9-21.9 210.8-69.3c102.8-47.3 274-8.7 424.8 69.3 37.7 19.5 68 36.7 90.7 51.5V0H0v193C15 197.2 31.6 199.8 50.5 199.8zM1109 106.9c11 0 20 9 20 20 0 11-9 20-20 20s-20-9-20-20C1089 115.9 1098 106.9 1109 106.9zM370.5 57.9c13.5 0 24.5 11 24.5 24.5 0 13.5-11 24.5-24.5 24.5S346 95.9 346 82.4C346 68.9 357 57.9 370.5 57.9zM315 35.9c6.1 0 11 4.9 11 11s-4.9 11-11 11 -11-4.9-11-11S308.9 35.9 315 35.9z' />
            </svg>

            <div className='bg-slate-100 w-full h-[80rem] mt-[30rem] border-t border-t-rosequartz-300'>

                <h2 href="#" className="flex mx-auto mt-[3rem] justify-center align-middle items-center ">
                    <span className="text-gray-700 font-extrabold text-5xl cursor-default">Why SmartEd AI?</span>
                </h2>

                <div classname='relative '>
                    <div className='absolute left-[12rem] top-[72rem] animate-fadeInLeft animate-'>
                        <img src={Person} alt="Person" className='w-[25rem]' />
                    </div>


                    <div href="#" class=" mt-[6rem] cursor-pointer">
                        <span class="link link-underline link-underline-black text-4xl font-bold ml-[45rem]">Personalized Learning</span>
                    </div>

                    <h2 className='w-[30rem] text-lg mt-4 mb-6 ml-[45rem]'>SmartEd AI offers a highly personalized learning experience. The system can analyze users'
                        learning patterns to recommend relevant courses, lessons, and specifically tailored learning materials.
                    </h2>

                    <a className="btns ml-[45rem]" onClick={() => navigate("/dashboard")}>Try Demo</a>
                </div>

                <div classname='flex'>
                    <div href="#" class=" mt-[12rem] cursor-pointer">
                        <span class="link link-underline link-underline-black text-4xl font-bold ml-[15rem]">Efficient and Effective</span>
                    </div>

                    <h2 className='w-[30rem] text-lg mt-4 mb-6 ml-[15rem]'>The learning tools integrated into the platform can enhance the efficiency and effectiveness
                        of the learning process, ensuring that the individual is challenged at the right level to maximize retention.
                    </h2>

                    <div className='absolute left-[50rem] top-[94rem]'>
                        <img src={Efficient} alt="Person" className='w-[20rem]' />
                    </div>

                    <a className="btns ml-[15rem]" href={process.env.PUBLIC_URL + "chat.html"}>Try Chatting</a>
                </div>

                <div classname='relative '>
                    <div className='absolute left-[15rem] top-[117rem] animate-fadeInLeft animate-'>
                        <img src={Community} alt="Community" className='w-[22rem]' />
                    </div>

                    <div href="#" class=" mt-[12rem] cursor-pointer">
                        <span class="link link-underline link-underline-black text-4xl font-bold ml-[45rem]">Community and Collaboration</span>
                    </div>

                    <h2 className='w-[30rem] text-lg mt-4 mb-6 ml-[45rem]'>The platform fosters a sense of community and collaboration among learners. Users can interact
                        with others who are studying the same subject, engage in discussions, and share knowledge and insights.
                    </h2>

                    <a onClick={() => navigate("/forum")} className="btns ml-[45rem] hover:animate-pulse">View Forum</a>
                </div>
            </div>

            <footer
                class="text-center bg-delft-600">
                <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
                    © 2023 Copyright:
                    <a class="text-neutral-400">SmartEd AI</a>
                </div>
            </footer>
        </div>
    )
}
