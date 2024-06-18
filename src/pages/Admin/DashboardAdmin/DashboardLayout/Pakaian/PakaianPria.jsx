import React, { useState } from 'react';
import AddButton from './AddButton';
import PakaianCard from './PakaianCard';

const PakaianPria = () => {
    const pakaianData = [
        {
            url:"../src/assets/images/wed-jas3.png",
            name:"Jas Biru",
            harga:"Rp. 3.000.000",
            deskripsi:"Pesona jas unik dengan kain biru dan dasi bisu. Memiliki kesan yang elegan dan...",
            jenis:"Jas Pria",
            warna:"Biru",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas2.png",
            name:"Jas Katun Hitam",
            harga:"Rp. 4.500.000",
            deskripsi:"Jas pria berkain katun sehingga lembut dan sangat nyaman dipakai...",
            jenis:"Jas Pria",
            warna:"Hitam",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas1.png",
            name:"Jas Hitam",
            harga:"Rp. 4.000.000",
            deskripsi:"Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan...",
            jenis:"Jas",
            warna:"Hitam",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas3.png",
            name:"Jas Biru",
            harga:"Rp. 3.000.000",
            deskripsi:"Pesona jas unik dengan kain biru dan dasi bisu. Memiliki kesan yang elegan dan...",
            jenis:"Jas Pria",
            warna:"Biru",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas2.png",
            name:"Jas Katun Hitam",
            harga:"Rp. 4.500.000",
            deskripsi:"Jas pria berkain katun sehingga lembut dan sangat nyaman dipakai...",
            jenis:"Jas Pria",
            warna:"Hitam",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas1.png",
            name:"Jas Hitam",
            harga:"Rp. 4.000.000",
            deskripsi:"Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan...",
            jenis:"Jas",
            warna:"Hitam",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas3.png",
            name:"Jas Biru",
            harga:"Rp. 3.000.000",
            deskripsi:"Pesona jas unik dengan kain biru dan dasi bisu. Memiliki kesan yang elegan dan...",
            jenis:"Jas Pria",
            warna:"Biru",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas2.png",
            name:"Jas Katun Hitam",
            harga:"Rp. 4.500.000",
            deskripsi:"Jas pria berkain katun sehingga lembut dan sangat nyaman dipakai...",
            jenis:"Jas Pria",
            warna:"Hitam",
            size:"L"
        },
        {
            url:"../src/assets/images/wed-jas1.png",
            name:"Jas Hitam",
            harga:"Rp. 4.000.000",
            deskripsi:"Jas dengan pesona yang sangat gagah membuat calon pengantin dengan tampilan...",
            jenis:"Jas",
            warna:"Hitam",
            size:"L"
        },
    ]
    const handleAddPakaian = () => {
        // Logic untuk menambah vendor baru
    };

    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };
    
    return (
        <>
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] m-5">Pakaian Pria</h1>
            <div className="flex space-x-2 m-5">
                <AddButton onAdd={handleAddPakaian} />
            </div>
            <div className="flex justify-center m-5">
                <div className="flex flex-col justify-center">
                    <div className='grid grid-cols-3 gap-14'>
                        {pakaianData.slice(0, visibleCount).map((pakaian, index) => (
                            <PakaianCard
                                key={index}
                                url={pakaian.url}
                                name={pakaian.name}
                                harga={pakaian.harga}
                                deskripsi={pakaian.deskripsi}
                                jenis={pakaian.jenis}
                                warna={pakaian.warna}
                                size={pakaian.size}
                            />
                        ))}
                    </div>
                    {visibleCount < pakaianData.length && (
                        <div className='flex justify-center m-10'>
                            <button
                                onClick={handleShowMore}
                                className='bg-transparent hover:bg-gray-100 text-primary1 font-semibold py-2 px-[100px] border border-primary1'
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default PakaianPria