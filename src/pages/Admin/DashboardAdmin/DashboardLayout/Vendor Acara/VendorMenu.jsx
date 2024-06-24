import React, { useEffect, useState } from 'react';
import AddVendorButton from './AddVendorButton';
import PopUpEdit from './AddVendorButton';
import { Checkbox, Button } from 'flowbite-react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const VendorMenu = () => {
    const [popUp, setPopUp] = useState(false);
    const [dataVendor, setDataVendor] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${urlApiENV}/api/vendor`;

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check data", response.data.data);
                setDataVendor(response.data.data);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                Swal.fire({
                    title: "Error!",
                    text: "Data tidak ditemukan!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchData();
    }, [id, navigate, token]);

    const [formData, setFormData] = useState({
        vendor: '',
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

    const handlePopup = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const PopUpEdit = () => {
        return (
            <div className='z-30 fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
                <form onSubmit={handleSubmit} action="" className='bg-white p-12 rounded-xl w-[700px]'>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Vendor</label>
                                <input name='vendor' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>Lokasi</label>
                                <input name='alamat' type="text" className='rounded-[8px] h-[50px]' />
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <label htmlFor="" className='font-semibold text-gray-700'>No. Telepon</label>
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
                        <button onClick={handlePopUp} className='px-7 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Ubah</button>
                    </div>
                </form>
            </div>
        );
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const vendorsPerPage = 5;

    // Calculate the number of pages
    const totalPages = Math.ceil(dataVendor.length / vendorsPerPage);

    // Get the vendors for the current page
    const currentVendors = dataVendor.slice((currentPage - 1) * vendorsPerPage, currentPage * vendorsPerPage);

    const handleAddVendor = () => {
        // Logic to add a new vendor
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        if (!selectAll) {
            setSelectedVendors(currentVendors.map(vendor => vendor.id));
        } else {
            setSelectedVendors([]);
        }
    };

    const handleSelectVendor = (id) => {
        if (selectedVendors.includes(id)) {
            setSelectedVendors(selectedVendors.filter(vendorId => vendorId !== id));
        } else {
            setSelectedVendors([...selectedVendors, id]);
        }
    };

    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] m-5">Vendor Acara</h1>
            <div className="flex justify-between mb-4">
                <div className="flex space-x-2 mx-5">
                    <AddVendorButton onAdd={handleAddVendor} />
                </div>
            </div>
            <div className='m-5'>
                <table className="min-w-full rounded-lg">
                    <thead className="bg-gray-100 rounded-t-lg">
                        <tr className="bg-gray-50 border border-gray-200">
                            <th className="w-8 p-4 text-xs font-normal text-gray-400 text-center">
                                <Checkbox className='bg-white border-gray-500 cursor-pointer' value='' checked={selectAll} onChange={handleSelectAll} />
                            </th>
                            <th className="w-48 p-4 text-xs font-normal text-gray-400 text-left">Vendor</th>
                            <th className="w-36 p-4 text-xs font-normal text-gray-400 text-center">Lokasi</th>
                            <th className="w-36 p-4 text-xs font-normal text-gray-400 text-center">No. Telepon</th>
                            <th className="w-36 p-4 text-xs font-normal text-gray-400 text-center">Harga</th>
                            <th className="w-36 p-4 text-xs font-normal text-gray-400 text-center">Kategori</th>
                            <th className="w-24 p-4 text-xs font-normal text-gray-400 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentVendors.map((vendor) => (
                            <tr key={vendor.id} className='bg-white border border-gray-200'>
                                <td className="py-2 text-center">
                                    <Checkbox
                                        className='bg-white border-gray-500 cursor-pointer'
                                        value=''
                                        checked={selectedVendors.includes(vendor.id)}
                                        onChange={() => handleSelectVendor(vendor.id)}
                                    />
                                </td>
                                <td className="py-2 text-left">
                                    <div className="flex items-center">
                                        <img src={vendor.photo} alt="Vendor" className="w-12 h-12 rounded-full mr-4" />
                                        <div className="text-left">
                                            <div className="font-semibold">{vendor.nama_vendor}</div>
                                            <div className="text-gray-500">{vendor.alamat}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 text-center">{vendor.alamat}</td>
                                <td className="py-2 text-center">{vendor.no_telp}</td>
                                <td className="py-2 text-center">{vendor.harga}</td>
                                <td className="py-2 text-center">{vendor.kategori}</td>
                                <td className="py-2 text-center">
                                    <button onClick={handlePopup} className="p-2.5 rounded-lg bg-transparent hover:bg-gray-300">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button onClick={() => setPopUp(true)} className="p-2.5 rounded-lg bg-transparent hover:bg-gray-300">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center p-3 border border-gray-200 rounded-b-lg">
                    <Button
                        className="bg-white border border-gray-300 text-black hover:bg-gray-100"
                        disabled={currentPage === 1}
                        onClick={handlePreviousPage}>
                        Previous
                    </Button>
                    <span className="text-gray-600">
                        Page {currentPage} of {totalPages}
                    </span>
                    <Button
                        className="bg-white border border-gray-300 text-black hover:bg-gray-100"
                        disabled={currentPage === totalPages}
                        onClick={handleNextPage}>
                        Next
                    </Button>
                </div>
            </div>
            {popUp && <PopUpEdit />}
        </div>
    );
};

export default VendorMenu;
