import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/rincian`;

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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                                                <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-900">
                                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1.5 4.99984H3.16667M3.16667 4.99984H16.5M3.16667 4.99984V16.6665C3.16667 17.1085 3.34226 17.5325 3.65482 17.845C3.96738 18.1576 4.39131 18.3332 4.83333 18.3332H13.1667C13.6087 18.3332 14.0326 18.1576 14.3452 17.845C14.6577 17.5325 14.8333 17.1085 14.8333 16.6665V4.99984H3.16667ZM5.66667 4.99984V3.33317C5.66667 2.89114 5.84226 2.46722 6.15482 2.15466C6.46738 1.8421 6.89131 1.6665 7.33333 1.6665H10.6667C11.1087 1.6665 11.5326 1.8421 11.8452 2.15466C12.1577 2.46722 12.3333 2.89114 12.3333 3.33317V4.99984M7.33333 9.1665V14.1665M10.6667 9.1665V14.1665" stroke="#4A5568" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            <button onClick={() => { setEditPopUp(true); setEditFormData(item); }} className="text-blue-600 hover:text-blue-900 mr-4"> 
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.834 0.83301C15.3895 0.388537 14.7848 0.144043 14.1487 0.144043C13.5126 0.144043 12.908 0.388537 12.4635 0.83301L1.66602 11.6305V15.833H5.86852L16.666 5.03551C17.1105 4.59104 17.355 3.98642 17.355 3.3503C17.355 2.71418 17.1105 2.10956 16.666 1.66509L15.834 0.83301ZM12.6673 2.63052L15.355 5.31802L13.4623 7.21076L10.7748 4.52326L12.6673 2.63052ZM2.49935 13.9645V12.0718L9.11135 5.45977L11.799 8.14727L5.18697 14.7593H3.29435H2.49935ZM1.66602 18.333H18.3327V19.9997H1.66602V18.333Z" fill="#4A5568" />
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
