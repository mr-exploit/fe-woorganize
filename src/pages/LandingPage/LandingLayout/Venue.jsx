import React from 'react'
import Location from './Location'
import location1 from "../../../assets/images/location1.png"
import location2 from "../../../assets/images/location2.png"
import location3 from "../../../assets/images/location3.png"
import location4 from "../../../assets/images/location4.png"
import location5 from "../../../assets/images/location5.png"
import location6 from "../../../assets/images/location6.png"
import location7 from "../../../assets/images/location7.png"
import location8 from "../../../assets/images/location8.png"
import bgcontent from "../../../assets/images/bg-content.png"
import featured from "../../../assets/images/featured-img.png"

const Venue = () => {
    return (
        <section className='h-full mt-[-100px] bg-transparent' style={{
            backgroundImage: `url(${bgcontent})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

        }}>
            <div className='flex flex-col items-center px-[200px] pt-[100px] gap-[47px]'>
                <div className='text-center mb-4'>
                    <h1 className='text-[32px] font-boska font-bold text-neutral4'>Venue Selection</h1>
                    <p className='text-neutral3 font-switzer'>Membuat Venue Anda Unik dan Sesuai Keinginan</p>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    <Location
                        name="Florence"
                        url={location1}
                    />
                    <Location
                        name="Florence"
                        url={location2}
                    />
                    <Location
                        name="Florence"
                        url={location3}
                    />
                    <Location
                        name="Florence"
                        url={location4}
                    />
                    <Location
                        name="Florence"
                        url={location5}
                    />
                    <Location
                        name="Florence"
                        url={location6}
                    />
                    <Location
                        name="Florence"
                        url={location7}
                    />
                    <Location
                        name="Florence"
                        url={location8}
                    />

                </div>
                <div>
                    <h1 className='font-semibold mb-3'>Featured venues</h1>
                    <div className='flex'>
                        <img src={featured} alt="" />
                        <div className='bg-neutral4 px-[48px] py-[32px] w-[679px] flex flex-col justify-center rounded-r-lg'>
                            <p className='font-boska font-bold text-[32px] text-primary2'>Villa Balbianello</p>
                            <p className='text-primary5 font-semibold text-[14px] mb-4'>Lake Como</p>
                            <div className='flex flex-col gap-4'>
                                <p className='text-neutral2'>Ahe whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.
                                </p>
                                <p className='text-neutral2'>Ahe whole complex consists of two residential buildings, a church, and a portico (known as Loggia Durini) that can host weddings and events in a truly unique setting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Venue
