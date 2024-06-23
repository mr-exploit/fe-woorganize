import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const RincianAdmin1 =  () => {
    const [dataRC, setDataRc] = useState([]);

    const navigate = useNavigate(); 
    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const userString = localStorage.getItem("users");
    const DataUser = JSON.parse(localStorage.getItem("users"));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${urlApiENV}/api/admin/rincian`;
                const user = JSON.parse(userString); 
     
                if (!token) {
                    navigate("/login");
                    return;
                }

                if (!user || user.role !== "admin") {
                    navigate("/");
                    return;
                }

                const dataResponse = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("check dataResponse", dataResponse.data);
                setDataRc(dataResponse.data.data);
 
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                Swal.fire({
                    title: "Oops!",
                    text: `${err.response ? err.response.data.msg : err.message}`,
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchData();
    }, [urlApiENV, navigate, token, DataUser.role]);

    return (
        <div className="min-h-screen flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                   
                    <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Rincian Anggaran</h1>
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
                                {dataRC.map((data, index) => (
                                    <tr key={data.id} className="border-t">
                                        <td className="px-6 py-4 text-gray-900 text-base">{data.nama}</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">{data.alamat}</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">{data.no_hp}</td>
                                        <td className="px-6 py-4">
                                            <Link to={`/ra2/${data.id_form}`} className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                        </td>
                                    </tr>
                                ))}

                                {/* <tr className="border-t">
                                    <td className="px-6 py-4 text-gray-900 text-base">John Doe</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">Perumahan X Blok A9 No.79</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">+62-365-7215-1749</td>
                                    <td className="px-6 py-4">
                                        <Link to="/ra2" className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                    </td>
                                </tr>

                                <tr className="border-t">
                                    <td className="px-6 py-4 text-gray-900 text-base">Jane Smith</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">Perumahan Y Blok B10 No.45</td>
                                    <td className="px-6 py-4 text-gray-800 text-base">+62-134-7215-5734</td>
                                    <td className="px-6 py-4">
                                        <Link to="/ra2" className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default RincianAdmin1;
