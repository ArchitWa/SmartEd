import { FaFacebook, FaGooglePlus, FaLinkedinIn } from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Logo from './../assets/logo.png'

export default function SignUp() {
    const [isSignUp, setIsSignUp] = useState(false)

    const handleSignUp = (flag) => {
        setIsSignUp(flag)
    }

    let navigate = useNavigate()

    return (
        <div>
            <div className="flex justify-center items-center mt-10 mx-auto animate-zoomIn">
                <div className="w-[30rem] ml-[2rem] ">
                    <a href="">
                        <img src={Logo} alt="Logo" className="w-[6rem] mr-3 inline-block" />
                    </a>

                    <h2 href="#" className="relative inline-block mt-2 justify-center align-middle items-center group before:absolute before:left-1 before:right-1 before:bottom-0 before:h-1.5 before:origin-right before:scale-x-0 before:bg-indigo-200 before:transition before:duration-200 hover:before:origin-left hover:before:scale-x-100">
                        <span className="relative text-gray-500 font-extrabold text-5xl hover:text-gray-900 cursor-default">SmartEd AI</span>
                    </h2>
                </div>
            </div>

            <div className="flex justify-center items-center mt-16 mx-auto animate-fadeIn">
                <div class={`s-container ${!isSignUp ? "right-panel-active" : ""}`} id="container">
                    <div class="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div class="social-container">
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaFacebook className="social w-6" /> </a>
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaGooglePlus className="social w-6" /> </a>
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaLinkedinIn className="social" /> </a>
                            </div>
                            <span className="text-[12px]">or use your email for registration</span>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a className="btns cursor-pointer" onClick={() => navigate("/dashboard")}>Sign Up</a>
                        </form>
                    </div>

                    <div class="form-container sign-in-container">
                        <form action="#">
                            <h1 className="font-bold m-0">Sign in</h1>
                            <div class="social-container">
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaFacebook className="social" /> </a>
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaGooglePlus className="social" /> </a>
                                <a className="text-black text-[14px] [text-decoration:none] my-[15px]"> <FaLinkedinIn className="social" /> </a>
                            </div>
                            <span className="text-[12px]">or use your account</span>
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                            <a className="text-black text-[14px] [text-decoration:none] my-[15px]" href="#">Forgot your password?</a>
                            <a className="btns cursor-pointer" onClick={() => navigate("/dashboard")}>Sign In</a>
                        </form>
                    </div>

                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1 className="font-bold m-0 text-lg">Welcome Back!</h1>
                                <p className="text-[14px] font-[200] tracking-wider mt-[20px] mb-[30px]">If you have an account already, please enter your login details</p>
                                <button className="ghost" id="signIn" onClick={() => handleSignUp(true)}>Sign In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1 className="font-bold m-0 text-lg">Hello!</h1>
                                <p className="text-[14px] font-[200] tracking-wider mt-[20px] mb-[30px]">Start your education journey with us by signing up!</p>
                                <button className="ghost" id="signUp" onClick={() => handleSignUp(false)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}