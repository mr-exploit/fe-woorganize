import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddVendorButton = () => {
    const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        namaVendor: '',
        alamat: '',
        noTelp: '',
        harga: '',
        kategori: ''
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

    const PopUpForm = () => {
        return (
            <div className='z-30 fixed top-0 left-[-10px] right-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit} action="" className='bg-white p-12 rounded-xl w-[700px]'>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Nama Vendor</label>
                                <input name='namaVendor' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Alamat</label>
                                <input name='alamat' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>No Telp</label>
                                <input name='noTelp' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Harga</label>
                                <input name='harga' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Kategori</label>
                                <input name='kategori' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between mt-[40px] '>
                        <button type="button" className='bg-neutral2 px-7 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                        <button onClick={handlePopUp} className='px-7 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Tambah</button>
                    </div>
                </form>
            </div>
        );
    };

    return (
        <>
        <button onClick={() => setPopUp(true)} className="bg-neutral5 text-primary2 h-10 px-4 py-2 rounded-lg flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
        Tambah Vendor
        </button>
        {popUp && <PopUpForm />}
        </>
    );
};

export default AddVendorButton;