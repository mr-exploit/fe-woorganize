// src/components/VendorTable.jsx
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const KonsepTable = () => {
    const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        tamu: '',
        budget: '',
        hariH: '',
        tema: ''
    });

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Data has been successfully saved!",
            icon: "success"
        });
        setPopUp(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const PopUpEdit = () => {
        return (
            <div className='z-30 fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit} action="" className='bg-white p-12 rounded-xl w-[700px]'>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Tamu</label>
                                <input name='tamu' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Budget</label>
                                <input name='budget' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Hari-H</label>
                                <input name='hariH' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Tema</label>
                                <input name='tema' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[40px] '>
                        <button type="button" className='bg-neutral2 px-7 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                        <button onClick={handlePopUp} className='px-7 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Ubah</button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <div className="overflow-hidden w-full mx-5 border rounded-lg shadow-md">
        <table className="min-w-full rounded-lg text-left">
            <thead className="bg-gray-100 text-gray-500 text-[12px]">
                <tr className='font-switzer'>
                    <th className="py-5 text-center">Edit</th>
                    <th className="py-5 text-center">Tamu</th>
                    <th className="py-5 text-center">Budget</th>
                    <th className="py-5 text-center">Hari-H</th>
                    <th className="py-5 text-center">Tema</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-5 text-center">
                        <button onClick={() => setPopUp(true)} className="">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </td>
                    <td className="py-5 text-center">500</td>
                    <td className="py-5 text-center">Rp. 100.000.000</td>
                    <td className="py-5 text-center">10 November 2025</td>
                    <td className="py-5 text-center">Rustik</td>
                </tr>
            </tbody>
            {popUp && <PopUpEdit />}
        </table>
        
        </div>
    );
};

export default KonsepTable;
