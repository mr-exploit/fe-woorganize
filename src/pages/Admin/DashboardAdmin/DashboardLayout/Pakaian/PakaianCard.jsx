import { Checkbox } from 'flowbite-react'
const PakaianCard = (props) => {
    const { name, harga, url, deskripsi, jenis, warna, size } = props
    return (
        <>
        <div className="bg-gray-100 w-[350px] h-[590px] border mt-5 hover:shadow-2xl cursor-pointer">
            <div className='flex w-full' style={{
                backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px',
            }}>
                
            </div>
            <div className="flex flex-row justify-between">
                    <h1 className='font-switzer font-bold m-3'>{name}</h1>
                    <h2 className="font-switzer font-bold m-3">{harga}</h2>
            </div>
            <div>
                <p className='font-switzer justify-stretch mx-3 mb-2 text-[14px]'>{deskripsi}</p>
                <p className='font-switzer mx-3 mb-2 text-[14px]'>Jenis : {jenis}</p>
                
                <div className="flex flex-row">
                    <p className='font-switzer mx-3 mb-2 text-[14px]'>Warna : {warna}</p>
                    <p className='font-switzer mx-3 mb-2 text-[14px]'>Ukuran : {size}</p>
                </div>
                <div className='flex justify-end mr-2'>
                <Checkbox className='bg-white border-black cursor-pointer' value=''></Checkbox>
                </div>
            </div>
        </div>
        </>
    )
}

export default PakaianCard