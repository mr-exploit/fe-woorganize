import React, { useEffect, useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Dashboard1 = () => {
    const [dataCon, setFormCon] = useState([]);
    const navigate = useNavigate();

    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const DataUser = JSON.parse(localStorage.getItem("users"));
  

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
    
        if (DataUser.role !== "admin") {
            navigate("/");
            return;
        }

        const fetchFormData = async () => {
            try {
                const response = await axios.get(`${urlApiENV}/api/admin/concept`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("check data response", response.data.data)
                setFormCon(response.data.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
                Swal.fire({
                    title: "Oops!",
                    text: `${error.response ? error.response.data.msg : error.message}`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchFormData();

    }, [urlApiENV, navigate, token, DataUser.role]);

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <NavbarAdmin />
                <div className="flex flex-1">
                    <SidebarAdmin />
                    <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']"> Concept</h1>
                        <p className="text-left text-zinc-800 text-base">Pilih Pelanggan</p>
                        <div className="mt-6 overflow-x-auto flex-1">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Nama Pelanggan</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Alamat</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">No. Telepon</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dataCon.map((data, index) => (
                                        <tr key={index} className="border-t">
                                            <td className="px-6 py-4 text-gray-900 text-base">{data.nama}</td>
                                            <td className="px-6 py-4 text-gray-800 text-base">{data.alamat}</td>
                                            <td className="px-6 py-4 text-gray-800 text-base">{data.no_hp}</td>
                                            <td className="px-6 py-4">
                                                <Link to={`/dashboard/concept2/${data.id_form}`} className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard1
