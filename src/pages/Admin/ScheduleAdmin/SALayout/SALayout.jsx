import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SALayout = () => {
    const [formData, setFormData] = useState({
        Kegiatan: '',
        Tanggal: '',
    });

    const [showPopUp, setShowPopUp] = useState(false);
    const [showEditPopUp, setShowEditPopUp] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        handlePopUp();
    };

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Data has been successfully saved!",
            icon: "success",
        });
        setShowPopUp(false);
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const PopUpForm = () => (
        <div className="z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-xl w-[700px]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="kegiatan" className="font-semibold text-gray-700">Kegiatan</label>
                        <input
                            name="Kegiatan"
                            type="text"
                            className="rounded-[8px] h-[50px]"
                            value={formData.Kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="tanggal" className="font-semibold text-gray-700">Tanggal</label>
                        <input
                            name="Tanggal"
                            type="date"
                            className="rounded-[8px] h-[50px]"
                            value={formData.Tanggal}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-[50px]">
                    <button type="submit" className="px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center">Simpan</button>
                    <button type="button" className="bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold" onClick={() => setShowPopUp(false)}>Batal</button>
                </div>
            </form>
        </div>
    );

    const PopUpEdit = () => (
        <div className="z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white p-12 rounded-xl w-[700px]">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="kegiatan" className="font-semibold text-gray-700">Kegiatan</label>
                        <input
                            name="Kegiatan"
                            type="text"
                            className="rounded-[8px] h-[50px]"
                            value={formData.Kegiatan}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <label htmlFor="tanggal" className="font-semibold text-gray-700">Tanggal</label>
                        <input
                            name="Tanggal"
                            type="date"
                            className="rounded-[8px] h-[50px]"
                            value={formData.Tanggal}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-4 mt-[50px]">
                    <button type="submit" className="px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center">Ubah</button>
                    <button type="button" className="bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold" onClick={() => setShowEditPopUp(false)}>Batal</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 p-10">
                <div className="mb-4">
                    <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
                    <div className="flex justify-start mt-6">
                        <button onClick={() => setShowPopUp(true)} className="bg-zinc-500 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75 mb-2 md:mb-6">
                            Add Schedule
                        </button>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-4 text-gray-600 text-xs font-normal">Kegiatan</th>
                                <th className="p-4 text-gray-600 text-xs font-normal">Customer</th>
                                <th className="p-4 text-gray-600 text-xs font-normal">Tanggal</th>
                                <th className="p-4 text-gray-600 text-xs font-normal">Jam</th>
                                <th className="p-4 text-gray-600 text-xs font-normal">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="p-4 text-stone-500 text-sm font-medium">Foto Prewed</td>
                                <td className="p-4 text-stone-500 text-sm font-medium">John Dae</td>
                                <td className="p-4 text-stone-500 text-sm font-medium">13/06/2022</td>
                                <td className="p-4 text-stone-500 text-sm font-medium">08:00 WIB</td>
                                <td className="p-4 text-stone-500 text-sm font-medium flex gap-2">
                                    <button onClick={() => setShowEditPopUp(true)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        
                                    </button>
                                    <button onClick={handleDelete} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {showPopUp && <PopUpForm />}
            {showEditPopUp && <PopUpEdit />}
        </div>
    );
}

export default SALayout;
