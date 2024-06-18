import React, { useState } from 'react';
import Swal from 'sweetalert2';

    const AddDecorButton = () => {
        const [popUp, setPopUp] = useState(false);

        const [formData, setFormData] = useState({
            jenis: '',
            vendor: '',
            noTelp: '',
            harga: '',
            konsep: '',
            gambarDekorasi: ''
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
                                    <label htmlFor="" className='font-semibold text-gray-700'>Jenis</label>
                                    <input name='jenis' type="text" className='rounded-[8px] h-[50px]' />
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <label htmlFor="" className='font-semibold text-gray-700'>Vendor</label>
                                    <input name='vendor' type="text" className='rounded-[8px] h-[50px]' />
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
                                    <label htmlFor="" className='font-semibold text-gray-700'>Konsep</label>
                                    <input name='konsep' type="text" className='rounded-[8px] h-[50px]' />
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <label htmlFor="" className='font-semibold text-gray-700'>Tambah Gambar Dekorasi</label>
                                    <div className="relative border border-gray-500 p-3 rounded-lg">
                                        <div className='flex flex-col items-center justify-center'>
                                            <h1 className='text-gray-500'>Cari Gambar</h1>
                                            <input type="file" name="gambarDekorasi" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                            <button className="px-4 py-1 text-white items-center bg-neutral4 rounded">Upload</button>
                                        </div>
                                    </div>
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
            Tambahkan Dekorasi
            </button>
            {popUp && <PopUpForm />}
            </>
        );
    };

export default AddDecorButton;
