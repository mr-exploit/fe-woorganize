import React, { useState } from 'react';
import AddDecorButton from './AddDecorButton';
import DecorCard from './DecorCard';

const DecorMenu = () => {
    const handleAddDecor = () => {
        // Logic untuk menambah vendor baru
    };

    const cards = [
        {
            url: "../src/assets/images/altar-1.png",
            name: "Altar 1",
            konsep: "Elegant",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        {
            url: "../src/assets/images/altar-2.png",
            name: "Altar 2",
            konsep: "Aesthetic",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        {
            url: "../src/assets/images/meja-tamu.png",
            name: "Meja Tamu",
            konsep: "Elegant",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        {
            url: "../src/assets/images/meja-konsumsi.png",
            name: "Meja Konsumsi",
            konsep: "Rustik",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        {
            url: "../src/assets/images/meja-tamu.png",
            name: "Meja Tamu",
            konsep: "Elegant",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        {
            url: "../src/assets/images/meja-konsumsi.png",
            name: "Meja Konsumsi",
            konsep: "Rustik",
            vendor: "xxxxx",
            phone: "088xxxxx"
        },
        // Add more cards here as needed
    ];
    
    const [visibleCount, setVisibleCount] = useState(4);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <>
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] font-switzer m-5">Interior & Decoration</h1>
            <div className="flex space-x-2 m-5">
                <AddDecorButton onAdd={handleAddDecor} />
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col mb-4">
                    <div className='grid grid-cols-2 gap-14'>
                    {cards.slice(0, visibleCount).map((card, index) => (
                            <DecorCard
                                key={index}
                                url={card.url}
                                name={card.name}
                                konsep={card.konsep}
                                vendor={card.vendor}
                                phone={card.phone}
                            />
                        ))}
                    </div>
                    {visibleCount < cards.length && (
                        <div className="flex justify-center m-10">
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

export default DecorMenu;
