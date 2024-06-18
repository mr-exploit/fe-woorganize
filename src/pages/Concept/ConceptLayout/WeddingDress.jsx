import React from 'react'
import { Carousel } from 'flowbite-react'

const WeddingDress = () => {
    return (
        <>
            <section className='flex flex-col mt-[80px] bg-primary1 items-center p-auto'>
                <div className='flex flex-row m-[150px]'>
                    <div className='flex flex-row mr-[50px] p-auto'>
                        <div className='w-[400px] h-[500px]'>
                            <img src="./src/assets/images/wed-jas1.png" alt="Wedding Jas" />
                            {/* <img src="./src/assets/images/wed-dress2.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress2.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress2.png" alt="Wedding Dress" /> */}
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col text-left pr-7'>
                            <h1 className='text-[32px] font-switzer font-bold text-neutral5'>Wedding Jas</h1>
                            <h2 className='text-[24px] font-switzer font-bold text-neutral5 mb-5'>Rp 4.000.000</h2>
                            <p className='text-neutral4 text-[16px]'>Jas pria</p>
                            <p className='text-neutral4 text-[16px]'></p>
                            <p className='text-neutral4 text-[16px]'>Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan yang sempurna dengan dasi kupu-kupu membuat tampilan yang lebih menawan.</p>
                        </div>
                        <div className='pr-7'>
                            <div className='flex flex-col text-left'>
                                <ul className='text-neutral4 text-[16px]'>
                                    <li className='border-b border-neutral1 py-2'>Ukuran : XL</li>
                                    <li className='border-b border-neutral1 py-2'>Warna : Hitam</li>
                                    <li className=' py-2'>Komposisi : -</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mr-[50px] p-auto'>
                        <div className='w-[400px] h-[500px]'>
                            <img src="./src/assets/images/wed-dress1.png" alt="Wedding Dress" />
                            {/* <img src="./src/assets/images/wed-dress1.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress1.png" alt="Wedding Dress" />
                            <img src="./src/assets/images/wed-dress1.png" alt="Wedding Dress" /> */}
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col text-left pr-7'>
                            <h1 className='text-[32px] font-switzer font-bold text-neutral5'>Wedding Dress</h1>
                            <h2 className='text-[24px] font-switzer font-bold text-neutral5 mb-5'>Rp 2.000.000</h2>
                            <p className='text-neutral4 text-[16px]'>Gaun V-neck</p>
                            <p className='text-neutral4 text-[16px]'>Jenis gaun Body-hugging</p>
                            <p className='text-neutral4 text-[16px]'>Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin karena keanggunannya dan alirannya.</p>
                        </div>
                        <div className='pr-7'>
                            <div className='flex flex-col text-left'>
                                <ul className='text-neutral4 text-[16px]'>
                                    <li className='border-b border-neutral1 py-2'>Ukuran : L</li>
                                    <li className='border-b border-neutral1 py-2'>Warna : Putih</li>
                                    <li className=' py-2'>Komposisi : -</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeddingDress
