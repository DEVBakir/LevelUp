import { useEffect } from 'react';
import logo from '../assets/Logo.png';
import google from '../assets/google.png';
import Btn from '../components/Btn';
import InputField from '../components/inputField';
import lottie from "lottie-web"
import animation from "../assets/animation.json"


export default function Login() {
    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: document.querySelector(".animation .cont-anim"),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animation
        }) 
        return () => instance.destroy();
    }, [])

    return (
        <div className="login-section grid grid-cols-2 bg-[#0095B2] h-[100vh]">
            <div className=" bg-white animation flex justify-center items-center">
                <div className=' border-black '>
                    <div className="cont-anim w-[520px] h-[530px]"></div>
                </div>
            </div>
            <div className="bg-[#0095B2] items-center flex flex-col align-top pt-[122px]">
                <img src={logo} alt="Logo"
                    className='w-[300px]'
                />

                <h3 className='font-medium text-4xl text-white mt-14'>
                Log in to Levelup
                </h3>
                <button className='mt-7 w-[25rem] px-14 py-3 bg-[#B2F2FF] rounded-xl text-[#006073] flex justify-center items-center'>
                    <div className='flex items-center gap-10'>
                        <img className='w-7 h-7' src={google} alt="Logo"/>
                        <span className='font-medium text-lg'>
                        Login With Google
                        </span>
                    </div>
                </button>
                <div className='flex items-center mt-7'>
                    <div className='w-[170px] h-1 bg-white'></div>
                    <span className='px-3 font-bold text-xl text-white'>Or</span>
                    <div className='w-[170px] h-1 bg-white'></div>
                </div>
                <form className='w-[400px] mt-7 flex flex-col'>
                    <InputField name="Email" type="email"  />
                    <InputField name="Password" type="password" />
                    <div className='mb-3'>
                        <a className='text-white font-medium text-lg ' href='#'>forget password ?</a>
                    </div>
                    <div className='flex justify-between text-white font-medium text-lg'>
                        {/* Remembre me setion */} 
                        <div className='flex justify-between items-center'>
                            <input type='checkbox' className='me-4 w-6 h-6 appearance-none rounded-[0.29rem] border-[3px]  checked:border-primary checked:bg-primary checked:after:absolute  checked:after:ms-[0.4rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:border-[#3b71ca] checked:after:bg-transparent checked:after:content-[""] hover:cursor-pointer checked:after:ml-[7px]  checked:bg-[#3b71ca] checked:after:mt-[2px] ' />
                            Remember me
                        </div>
                        <Btn text="Login" type="submit" />
                    </div>
                    <div className='w-[90%] h-1 bg-white ml-auto mr-auto mt-5'></div>
                    <div className='text-white font-medium text-lg ml-auto mr-auto mt-5'>
                        Don’t have an account ? <a className='font-bold text-[#FCEE65] relative' href='#'>Sign-Up .
                        <span className='absolute left-0 bottom-[-3px] w-full h-[2px] bg-[#FCEE65]'></span>

                        </a>
                        </div>
                </form>
            </div>
        </div>
    )
}