import React, { useContext } from 'react'
import heroimg from "../../../assets/images/hero-img.png"
import arrow from "../../../assets/logo/arrow-bottom.svg"
import { Link } from 'react-router-dom'
import { Context } from '../LandingPage'
const Hero = () => {
    const { isLogin, setIslogin } = useContext(Context);
    return (
        <section className='h-[872px] bg-contain flex justify-center items-center' style={{
            backgroundImage: `url(${heroimg})`, backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='text-center flex flex-col gap-5 items-center'>
                <div>
                    <p className='font-boska font-bold text-[56px] text-primary2 w-[818px]'>Turning Your Wedding Dreams
                        Into Ultimate Reality</p>
                </div>
                <p className='font-switzer text-neutral-300 mb-10'>
                    Crafting every detail to shape your perfect wedding day
                </p>
                {
                    isLogin ? <Link to="/form" className='px-[26px] py-[13px] w-[199px] bg-neutral1 text-primary1 font-bold rounded-md'>Form Planning</Link> : <Link className='flex flex-col justify-center items-center gap-2'><img className='w-[24px]' src={arrow} alt="" /><p className='font-medium text-[#D1BB9E] opacity-[0.8]'>Swip Up!</p></Link>
                }
            </div>
        </section>
    )
}

export default Hero
