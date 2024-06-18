import React from 'react'

const ServiceCard = (props) => {
    return (
        <div className='w-[243px] h-[296px] flex flex-col justify-end items-center pb-2' style={{
            backgroundImage: `url(${props.url})`, backgroundSize: '100% auto'
        }}>
            <p className='font-boska text-[20px] font-medium text-white'>{props.name}</p>
        </div>
    )
}

export default ServiceCard
