import { Checkbox } from 'flowbite-react'
import React from 'react'
const DecorCard = (props) => {
    const { name, konsep, url, vendor, phone} = props
    return (
        <>
        <div className="bg-gray-100 w-[600px] h-[450px] border mt-5">
            <div className='flex w-full' style={{
                backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px',
            }}>
                
            </div>
            <div className="flex flex-row justify-between">
                <h1 className='font-switzer font-bold m-3'>{name}</h1>
            </div>
            <div>
                <p className='font-switzer mx-3 mb-1 text-[14px]'>Konsep : {konsep}</p>
                <p className='font-switzer mx-3 mb-1 text-[14px]'>Vendor {vendor}</p>
                <p className='font-switzer mx-3 mb-1 text-[14px]'>{phone}</p>
            </div>
            <div className='flex justify-end mr-2'>
                <Checkbox className='bg-white border-black cursor-pointer' value=''></Checkbox>
            </div>
        </div>
        </>
    )
}

export default DecorCard