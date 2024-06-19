import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";

const RincianAdmin2 = () => {
    const [popUp, setPopUp] = useState(false);
    const [editPopUp, setEditPopUp] = useState(false);
    const [dataRC, setDataRc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        Uraian: '',
        Vol: '',
        Harga_Awal: '',
        Jumlah: '',
        Keterangan: ''
    });
    const [editFormData, setEditFormData] = useState(null);
    const navigate = useNavigate(); // Initialize navigate
    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/rincian`;
                console.log("check url", url);

                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login"); // Redirect to login if no token found
                    return;
                }

                const dataResponse = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("check dataResponse", dataResponse.data.data);
                setDataRc(Array.isArray(dataResponse.data.data) ? dataResponse.data.data : []);
                setLoading(false);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate, setDataRc]);

    if (error) return <div>Error: {error.message}</div>;
    
    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Data has been successfully saved!",
            icon: "success"
        });
        setPopUp(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const urlApiENV = import.meta.env.VITE_API_URL;
            const url = `${urlApiENV}/api/rincian`;
            const token = localStorage.getItem("token");

            const response = await axios.post(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            setDataRc([...dataRC, response.data.data]);
            setFormData({ Uraian: '', Vol: '', Harga_Awal: '', Jumlah: '', Keterangan: '' });
            handlePopUp();
        } catch (err) {
           
            const error = `Error during submit: ${err.response[0].msg ? err.response.data : err.msg}`
            Swal.fire({
                title: "Oops...",
                text: error,
                icon: "error"
            });
        }
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        try {
            const urlApiENV = import.meta.env.VITE_API_URL;
            const url = `${urlApiENV}/api/rincian/${editFormData.id}`;
            const token = localStorage.getItem("token");

            const response = await axios.put(url, editFormData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const updatedData = dataRC.map(item => item.id === response.data.data.id ? response.data.data : item);
            setDataRc(updatedData);
            setEditFormData(null);
            handlePopUp();
        } catch (err) {
            console.error("Error during edit:", err.response ? err.response.data : err.msg);
            const error = `Error during edit: ${err.response ? err.response.data : err.msg}`
            Swal.fire({
                title: "Oops...",
                text: error,
                icon: "error"
            });
        }
    };

    const handlePopup = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const urlApiENV = import.meta.env.VITE_API_URL;
                    const url = `${urlApiENV}/api/rincian/${id}`;
                    const token = localStorage.getItem("token");

                    await axios.delete(url, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    setDataRc(dataRC.filter(item => item.id !== id));
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                } catch (err) {
                    console.error("Error during delete:", err.response ? err.response.data : err.msg);
                    const error = `Error during delete: ${err.response ? err.response.data : err.msg}`
                    Swal.fire({
                        title: "Oops...",
                        text: error,
                        icon: "error"
                    });
                }
            }
        });
    }

    const formatNumber = (number) => {
        return number.toLocaleString('id-ID');
    }

const PopUpForm = () => (
        <div className='z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-white p-12 rounded-xl w-[700px]'>
                <div className='flex flex-col gap-5'>
                    {Object.keys(formData).map((field) => (
                        <div className='flex flex-col gap-[10px]' key={field}>
                            <label htmlFor={field} className='font-semibold text-gray-700'>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <input
                                name={field}
                                type="text"
                                className='rounded-[8px] h-[50px]'
                                value={formData[field]}
                                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 mt-[50px]'>
                    <button type='submit' className='px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Simpan</button>
                    <button type="button" className='bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => setPopUp(false)}>Batal</button>
                </div>
            </form>
        </div>
    );

    const PopUpEdit = () => (
        <div className='z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
            <form onSubmit={handleEdit} className='bg-white p-12 rounded-xl w-[700px]'>
                <div className='flex flex-col gap-5'>
                    {Object.keys(editFormData || {}).map((field) => (
                        <div className='flex flex-col gap-[10px]' key={field}>
                            <label htmlFor={field} className='font-semibold text-gray-700'>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <input
                                name={field}
                                type="text"
                                className='rounded-[8px] h-[50px]'
                                value={editFormData[field]}
                                onChange={(e) => setEditFormData({ ...editFormData, [field]: e.target.value })}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 mt-[50px]'>
                    <button type='submit' className='px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Ubah</button>
                    <button type="button" className='bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => setEditPopUp(false)}>Batal</button>
                </div>
            </form>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
                    </div>
                    <div className="mt-6">
                        <button onClick={() => setPopUp(true)} className="bg-zinc-500 text-white px-4 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75 mb-6">
                            Tambah Data
                        </button>
                        <div className="mt-6 overflow-x-auto flex-1">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">No</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Uraian</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Vol</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Harga Awal</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Jumlah</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Keterangan</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.isArray(dataRC) && dataRC.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{index + 1}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{item.Uraian}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{item.Vol}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{formatNumber(Number(item.Harga_Awal))}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{formatNumber(Number(item.Jumlah))}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">{item.Keterangan}</td>
                                            <td className="px-6 py-4 text-left text-sm text-gray-500">
                                                <button onClick={() => { setEditPopUp(true); setEditFormData(item); }} className="text-blue-600 hover:text-blue-900 mr-4">Edit</button>
                                                <button onClick={() => handlePopup(item.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            {popUp && <PopUpForm />}
            {editPopUp && <PopUpEdit />}
        </div>
    );
};

export default RincianAdmin2;
