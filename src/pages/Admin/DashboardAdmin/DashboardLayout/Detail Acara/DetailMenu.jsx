import React from 'react'
import DetailTabel from './DetailTabel';

const DetailMenu = () => {
    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <div>
                <h1 className="text-[36px] m-5">Detail Acara</h1>
            </div>
            <div className="flex justify-between mb-4">
                <DetailTabel />
            </div>
        </div>
    );
};

export default DetailMenu
