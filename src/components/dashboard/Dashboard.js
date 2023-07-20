import { AiOutlineMenu, AiOutlineClockCircle, AiOutlineHome, AiOutlineCalendar, AiOutlineSetting } from 'react-icons/ai'
import { FaSearch, FaMicrophone } from 'react-icons/fa'
import { BiBell } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'


export default function Dashboard() {
    const navigate = useNavigate()

    return (
        <div>

            <div className='flex flex-nowrap align-middle items-center mt-6'>
                <a onClick={() => navigate("/")}>
                    <img src={Logo} className='text-black w-12 ml-10 inline-block' />
                </a>

                <h2 className='font-semibold text-2xl inline-block ml-6'>Dashboard</h2>

                <div class="relative w-[30rem] inline-block ml-10">
                    <FaSearch className="absolute text-black top-3 left-4" />
                    <input type="text" class="bg-white h-10 w-full px-12 rounded-3xl shadow-md focus:outline-none hover:cursor-pointer" placeholder="Search.." />
                    <span class="absolute top-3 right-5 border-l pl-4">
                        <FaMicrophone class="text-gray-500 hover:text-indigo-500 hover:cursor-pointer" />
                    </span>
                </div>

                <BiBell className='text-black text-[2rem] inline-block ml-[27.5rem] mr-2 cursor-pointer' />
                <h1 className='text-gray-500 inline-block -mt-[8px] scale-y-150 font-base opacity-80 text-3xl mr-3 '>|</h1>
                <img src="https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg" className="inline-block w-[2.5rem] h-[2.5rem] border-2 border-green-300 rounded-full mr-2"></img>
                <h3 className='inline-block mr-10 font-semibold text-2xl'>Archit W.</h3>
            </div>

            <div className='flex flex-nowrap mt-[3rem]'>
                <div className='mr-4 w-[3.5rem] items-center inline-block ml-10 mt-[2rem]'>
                    <AiOutlineHome className='text-[3rem] cursor-pointer bg-black mb-[2rem] text-white rounded-full p-2' />
                    <AiOutlineCalendar className='text-[3rem] cursor-pointer hover:bg-indigo-200 hover:text-white p-2 mb-[2rem] rounded-full' />
                    <AiOutlineClockCircle className='text-[3rem] cursor-pointer hover:bg-indigo-200 hover:text-white p-2 mb-[2rem] rounded-full' />
                    <AiOutlineSetting className='text-[3rem] cursor-pointer hover:bg-indigo-200  hover:text-white p-2 rounded-full' />
                </div>

                <div className='bg-white inlne-block w-[65%] h-[40rem] shadow-sm rounded-3xl'>
                    <div className='mt-6 ml-6'>
                        <h2 className='font-semibold text-3xl inline-block'>Lessons</h2>
                        <h2 className='font-semibold text-3xl inline-block ml-[40rem]'>July 19th</h2>
                    </div>

                    <div className='mt-6 ml-6'>
                        <h3 className='inline-block'>
                            <span className='font-semibold text-3xl'>10</span>
                            <br /> In Progress •
                        </h3>
                        <h3 className='inline-block ml-8'>
                            <span className='font-semibold text-3xl'>30</span>
                            <br /> Scheduled •
                        </h3>
                        <h3 className='inline-block ml-8'>
                            <span className='font-semibold text-3xl'>49</span>
                            <br /> Completed •
                        </h3>
                    </div>

                    <div className='classes overflow-y-scroll mt-8 h-[70%]'>

                        <div className='class w-[95%] mx-[2.5%] h-[6rem] items-center align-middle flex bg-cyan-200 rounded-2xl overflow-scroll'>
                            <div className='ml-4 inline-block w-[7.5rem]'>
                                <h3 className='inline-block font-bold text-xl'>
                                    Calculus 2
                                </h3>
                                <h4 className='text-lg'>
                                    Integrals
                                </h4>
                                <p className='text-sm text-gray-500'>August 15th, 2022</p>
                            </div>


                            <div className='ml-10'>
                                <h3 className='text-sm font-bold'>Progress</h3>
                                <div class="w-[35rem] rounded-full h-2 bg-white inline-block">
                                    <div class="bg-cyan-500 h-2 rounded-full w-[70%]" ></div>
                                </div>
                                <h3 className='text-sm font-bold justify-end ml-[33rem]'>70%</h3>
                            </div>


                            <span className='inline-block ml-6 bg-cyan-100 rounded-full px-2 text-sm font-semibold py-1 text-cyan-500'>2 months left</span>
                            <BsThreeDotsVertical className='text-[1.5rem] text-gray-500'/>
                        </div>

                        <div className='class w-[95%] mx-[2.5%] mt-2 h-[6rem] items-center align-middle flex bg-emerald-200 rounded-2xl overflow-scroll'>
                            <div className='ml-4 inline-block w-[7.5rem]'>
                                <h3 className='inline-block font-bold text-xl'>
                                    Literature
                                </h3>
                                <h4 className='text-lg'>
                                    Symbolism
                                </h4>
                                <p className='text-sm text-gray-500'>June 1st, 2023</p>
                            </div>


                            <div className='ml-10'>
                                <h3 className='text-sm font-bold'>Progress</h3>
                                <div class="w-[35rem] rounded-full h-2 bg-white inline-block">
                                    <div class="bg-emerald-500 h-2 rounded-full w-[20%]" ></div>
                                </div>
                                <h3 className='text-sm font-bold justify-end ml-[33rem]'>20%</h3>
                            </div>


                            <span className='inline-block ml-6 bg-emerald-100 rounded-full px-2 text-sm font-semibold py-1 text-emerald-500'>15 days left</span>
                            <BsThreeDotsVertical className='text-[1.5rem] text-gray-500'/>
                        </div>

                        <div className='class w-[95%] mx-[2.5%] mt-2 h-[6rem] items-center align-middle flex bg-red-200 rounded-2xl overflow-scroll'>
                            <div className='ml-4 inline-block w-[7.5rem]'>
                                <h3 className='inline-block font-bold text-xl'>
                                    Chemistry
                                </h3>
                                <h4 className='text-lg'>
                                    Solutions
                                </h4>
                                <p className='text-sm text-gray-500'>April 10th, 2023</p>
                            </div>


                            <div className='ml-10'>
                                <h3 className='text-sm font-bold'>Progress</h3>
                                <div class="w-[35rem] rounded-full h-2 bg-white inline-block">
                                    <div class="bg-red-500 h-2 rounded-full w-[90%]" ></div>
                                </div>
                                <h3 className='text-sm font-bold justify-end ml-[33rem]'>90%</h3>
                            </div>


                            <span className='inline-block ml-6 bg-red-100 rounded-full px-2 text-sm font-semibold py-1 text-red-500'>1 week left</span>
                            <BsThreeDotsVertical className='text-[1.5rem] text-gray-500'/>
                        </div>

                        <div className='class w-[95%] mx-[2.5%] mt-2 h-[6rem] items-center align-middle flex bg-orange-200 rounded-2xl overflow-scroll'>
                            <div className='ml-4 inline-block w-[7.5rem]'>
                                <h3 className='inline-block font-bold text-xl'>
                                    Physics
                                </h3>
                                <h4 className='text-lg'>
                                    Newtons Law
                                </h4>
                                <p className='text-sm text-gray-500'>Augist 23rd, 2022</p>
                            </div>


                            <div className='ml-10'>
                                <h3 className='text-sm font-bold'>Progress</h3>
                                <div class="w-[35rem] rounded-full h-2 bg-white inline-block">
                                    <div class="bg-orange-500 h-2 rounded-full w-[50%]" ></div>
                                </div>
                                <h3 className='text-sm font-bold justify-end ml-[33rem]'>50%</h3>
                            </div>


                            <span className='inline-block ml-6 bg-orange-100 rounded-full px-2 text-sm font-semibold py-1 text-orange-500'>2 weeks left</span>
                            <BsThreeDotsVertical className='text-[1.5rem] text-gray-500'/>
                        </div>

                        <div className='class w-[95%] mx-[2.5%] mt-2 h-[6rem] items-center align-middle flex bg-indigo-200 rounded-2xl overflow-scroll'>
                            <div className='ml-4 inline-block w-[7.5rem]'>
                                <h3 className='inline-block font-bold text-xl'>
                                    CS
                                </h3>
                                <h4 className='text-lg'>
                                    Loops
                                </h4>
                                <p className='text-sm text-gray-500'>May 30th, 2021</p>
                            </div>


                            <div className='ml-10'>
                                <h3 className='text-sm font-bold'>Progress</h3>
                                <div class="w-[35rem] rounded-full h-2 bg-white inline-block">
                                    <div class="bg-indigo-500 h-2 rounded-full w-[23%]" ></div>
                                </div>
                                <h3 className='text-sm font-bold justify-end ml-[33rem]'>23%</h3>
                            </div>


                            <span className='inline-block ml-6 bg-indigo-100 rounded-full px-2 text-sm font-semibold py-1 text-indigo-500'>1 year left</span>
                            <BsThreeDotsVertical className='text-[1.5rem] text-gray-500'/>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}