import React from 'react'
import VendorCard from './VendorCard'
// import decoration from "../../../assets/images/decoration-1.png"
import ImageVendor from '../../../assets/images/vendor-1.png'


const Vendor = () => {
    return (
      <>
      <section className='flex flex-col bg-primary1 items-center px-[200px] pt-[100px] pb-[100px]'>
      <div className='text-center mb-4'>
        <h1 className='text-[60px] font-boska font-bold text-primary4 mb-5'>Vendor Acara</h1>
        <div className='grid grid-cols-3 gap-[60px] w-[1100px]'>
          <VendorCard 
          name="" url={ImageVendor} deskripsi="Catering paket A dengan benefit free refill nasi"
          />
          <VendorCard 
          name="" url={ImageVendor} deskripsi="Wedding desain dengan konsep Rustik + Dekorasi photobooth"
          />
          <VendorCard 
          name="" url={ImageVendor} deskripsi="MUA yang melingkupi make up pengantin dan pagar ayu"
          />
        </div>
      </div>
      </section>
      </>
    )
}
export default Vendor