import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2';

const FormA2 = () => {
    const [formData, setFormData] = useState([]);
    const [historyData, setHistoryData] = useState([]);
    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const { id } = useParams();
    const DataUser = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate();
    
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
                const response = await axios.get(`${urlApiENV}/api/admin/form/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFormData(response.data.data);
            } catch (error) {
                console.error('Error fetching form data:', error);
                Swal.fire({
                    title: "Oops!",
                    text: `${error.response ? error.response.data.error : error.message}`,
                    icon: "error"
                });
            }
        };

        const fetchHistoryData = async () => {
            try {
                const response = await axios.get(`${urlApiENV}/api/history/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setHistoryData(response.data.data);
            } catch (error) {
                console.error('Error fetching history data:', error);
                Swal.fire({
                    title: "Oops!",
                    text: `${error.response ? error.response.data.error : error.msg }`,
                    icon: "error"
                });
            }
        };

        fetchFormData();
        fetchHistoryData();
    }, [urlApiENV, navigate, token, DataUser.role]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-0 mt-20 mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Form Request</h1>
                    </div>
                    <div className="mt-6">
                        <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                            <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                <div className="w-2">No</div>
                                <div className="w-12">First</div>
                                <div className="w-12">Last</div>
                                <div className="w-36">Email</div>
                                <div className="w-28">Phone Number</div>
                                <div className="w-48">Concept</div>
                            </div>
                        </div>
                        {formData.length > 0 ? (
                            formData.map((item, index) => (
                                <div className="bg-white border border-gray-200" key={index}>
                                    <div className="flex justify-between items-center p-4">
                                        <div className="w-2 text-gray-900">{index + 1}</div>
                                        <div className="w-12 text-gray-900">{item.Nama_Depan}</div>
                                        <div className="w-12 text-gray-900">{item.Nama_Belakang}</div>
                                        <div className="w-36 text-gray-900">{item.Email}</div>
                                        <div className="w-28 text-slate-800">{item.No_HP}</div>
                                        <div className="w-48 text-slate-800">{item.Konsep}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white border border-gray-200 p-4 text-center text-gray-500">
                                No form requests found.
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between items-center mb-6 mt-12">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Request Change</h1>
                    </div>
                    <div className="mt-6">
                        <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                            <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                <div className="w-8">No</div>
                                <div className="w-36">Tipe</div>
                                {/* <div className="w-36">id_form</div> */}
                                <div className="w-56">Keterangan</div>
                            </div>
                        </div>
                        {historyData.length > 0 ? (
                            historyData.map((item, index) => (
                                <div className="bg-white border border-gray-200" key={index}>
                                    <div className="flex justify-between items-center p-4">
                                        <div className="w-8 text-gray-900">{index + 1}</div>
                                        <div className="w-36 text-gray-900">{item.tipe}</div>
                                        {/* <div className="w-36 text-gray-900">{item.id_form}</div> */}
                                        <div className="w-56 text-slate-800">{item.text}</div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="bg-white border border-gray-200 p-4 text-center text-gray-500">
                                No history found.
                            </div>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default FormA2;
