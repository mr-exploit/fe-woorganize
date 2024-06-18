import React, { useState } from 'react';
import AddButton from './AddButton';
import PakaianCard from './PakaianCard';

const PakaianWanita = () => {
    const pakaianData = [
        {
            url: "../src/assets/images/wed-dress1.png",
            name: "Gaun V-neck",
            harga: "Rp. 2.500.000",
            deskripsi: "Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin...",
            jenis: "Gaun body-hugging",
            warna: "putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress3.png",
            name: "Gaun Kepala Tertutup",
            harga: "Rp. 3.000.000",
            deskripsi: "Gaun dengan pesona berbeda dan gaya yang unik. Menjadi gaya yang berbeda dan sangat...",
            jenis: "Gaun",
            warna: "Putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress2.png",
            name: "Gaun Slim-fit",
            harga: "Rp. 3.500.000",
            deskripsi: "Gaun dengan pesona yang lebih elegan serta sangat memukau...",
            jenis: "Gaun body-hugging",
            warna: "Putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress1.png",
            name: "Gaun V-neck",
            harga: "Rp. 2.500.000",
            deskripsi: "Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin...",
            jenis: "Gaun body-hugging",
            warna: "putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress3.png",
            name: "Gaun Kepala Tertutup",
            harga: "Rp. 3.000.000",
            deskripsi: "Gaun dengan pesona berbeda dan gaya yang unik. Menjadi gaya yang berbeda dan sangat...",
            jenis: "Gaun",
            warna: "Putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress2.png",
            name: "Gaun Slim-fit",
            harga: "Rp. 3.500.000",
            deskripsi: "Gaun dengan pesona yang lebih elegan serta sangat memukau...",
            jenis: "Gaun body-hugging",
            warna: "Putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress1.png",
            name: "Gaun V-neck",
            harga: "Rp. 2.500.000",
            deskripsi: "Tekstur mewah dan kilauan alami, menjadi pilihan populer untuk gaun pengantin...",
            jenis: "Gaun body-hugging",
            warna: "putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress3.png",
            name: "Gaun Kepala Tertutup",
            harga: "Rp. 3.000.000",
            deskripsi: "Gaun dengan pesona berbeda dan gaya yang unik. Menjadi gaya yang berbeda dan sangat...",
            jenis: "Gaun",
            warna: "Putih",
            size: "L"
        },
        {
            url: "../src/assets/images/wed-dress2.png",
            name: "Gaun Slim-fit",
            harga: "Rp. 3.500.000",
            deskripsi: "Gaun dengan pesona yang lebih elegan serta sangat memukau...",
            jenis: "Gaun body-hugging",
            warna: "Putih",
            size: "L"
        },
        // Add more data here...
    ];

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
            <h1 className="text-[36px] m-5">Pakaian Wanita</h1>
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

export default PakaianWanita