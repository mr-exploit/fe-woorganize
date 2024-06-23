import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";
import PopUpForm from "./PopUpAddForm";
import PopUpEdit from "./PopUpEditForm";

const RincianAdmin2 = () => {
    const [popUp, setPopUp] = useState(false);
    const [editPopUp, setEditPopUp] = useState(false);
    const [dataRC, setDataRc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editFormData, setEditFormData] = useState(null);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/rincian/${id}`;

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

                setDataRc(Array.isArray(dataResponse.data.data) ? dataResponse.data.data : []);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                Swal.fire({
                    title: "Oops!",
                    text: `${error.response ? error.response.data.msg : error.message}`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchData();
    }, [navigate]);

    const handleAddData = (newData) => {
        setDataRc([...dataRC, newData]);
        setPopUp(false);
    };

    const handleUpdateData = (updatedData) => {
    
        // Convert updatedData.id to a number
        const updatedDataWithNumberId = {
            ...updatedData,
            id: Number(updatedData.id),
        };

        const updatedList = dataRC.map(item => {
            if (item.id === updatedDataWithNumberId.id) {
                return updatedDataWithNumberId;
            }
            return item;
        });
    
        setDataRc(updatedList);
        setEditPopUp(false);
    };
    
    const handleDelete = (id) => {
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
                    Swal.fire({
                        title: "Oops...",
                        text: err.response ? err.response.data.msg : err.msg,
                        icon: "error"
                    });
                }
            }
        });
    };

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>Error: {error.message}</div>;

    const formatNumber = (number) => {
        return number.toLocaleString('id-ID');
    };

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
                                            <button onClick={() => handleDelete(item.id)}  className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button onClick={() => { setEditPopUp(true); setEditFormData(item);}} className="p-2 ms-2 rounded-lg bg-gray-200 hover:bg-gray-300">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.1665 2.49993C14.3854 2.28106 14.6452 2.10744 14.9312 1.98899C15.2171 1.87054 15.5236 1.80957 15.8332 1.80957C16.1427 1.80957 16.4492 1.87054 16.7352 1.98899C17.0211 2.10744 17.281 2.28106 17.4998 2.49993C17.7187 2.7188 17.8923 2.97863 18.0108 3.2646C18.1292 3.55057 18.1902 3.85706 18.1902 4.16659C18.1902 4.47612 18.1292 4.78262 18.0108 5.06859C17.8923 5.35455 17.7187 5.61439 17.4998 5.83326L6.24984 17.0833L1.6665 18.3333L2.9165 13.7499L14.1665 2.49993Z" stroke="#4A5568" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        
                                    </button>
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
            {popUp && <PopUpForm onClose={() => setPopUp(false)} onAddData={handleAddData} />}
            {editPopUp && <PopUpEdit onClose={() => setEditPopUp(false)} onUpdateData={handleUpdateData} formData={editFormData} />}
        </div>
    );
};

export default RincianAdmin2;
