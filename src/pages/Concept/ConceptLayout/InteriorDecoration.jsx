import React from 'react'
import InteriorDecorationCard from './InteriorDecorationCard'
import altar1 from "../../../assets/images/altar-1.png"
import altar2 from "../../../assets/images/altar-2.png"
import mejaTamu from "../../../assets/images/meja-tamu.png"
import mejaKonsumsi from "../../../assets/images/meja-konsumsi.png"

const InteriorDecoration = () => {
  return (
    <>
    <section className='flex flex-col items-center px-[200px] pt-[100px] gap-[50px] mb-5'>
    <div className='text-left mb-4'>
      <h1 className='text-[60px] font-boska font-bold text-neutral4'>Interior & Decoration</h1>
      <div className='grid grid-cols-2 gap-10 w-[950px]'>
        <InteriorDecorationCard 
        name="Altar 1" url={altar1}
        />
        <InteriorDecorationCard 
        name="Altar 2" url={altar2}
        />
        <InteriorDecorationCard 
        name="Meja Tamu" url={mejaTamu}
        />
        <InteriorDecorationCard 
        name="Meja Konsumsi" url={mejaKonsumsi}
        />
      </div>
    </div>
    </section>
    </>
  )
}

export default InteriorDecoration
