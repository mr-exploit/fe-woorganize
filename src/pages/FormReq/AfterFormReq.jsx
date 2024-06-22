import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PopUpForm from './PopUpForm';

const AfterFormReq = () => {
    const [popUp, setPopUp] = useState(false);
    const [dataForm, setDataForm] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/form/${id}`;
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check data", response.data.data[0])
                setDataForm(response.data.data[0]);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                Swal.fire({
                    title: "Error!",
                    text: "Data tidak ditemukan!",
                    icon: "error"
                });
            }
        };

        fetchData();
    }, [id, navigate]);

    const handlePopUpClose = () => {
        setPopUp(false);
    };
   
   
    return (
        <div className='relative'>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center mb-12 mt-12">
                    <div className="text-neutral-700 text-[55px] font-bold font-['Boska'] leading-normal tracking-widest mb-4">Form Planning</div>
                    <div className="text-neutral-400 text-2xl font-normal font-Switzer leading-normal tracking-wide mb-4">Thank you for filling out the form. Here is the information you provided:</div>
                    <div className="border-b border-neutral-400 w-2/3 mx-auto"></div>
                </div>
                <div className="w-full max-w-[1289px] px-4 mb-12">
                    <table className="w-full border-collapse rounded-t-lg overflow-hidden">
                        <tbody>
                            {dataForm ? (
                                <>
                                    <tr>
                                        <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">First Name</td>
                                        <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">{dataForm.Nama_Depan}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Last Name</td>
                                        <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">{dataForm.Nama_Belakang}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Email</td>
                                        <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">{dataForm.Email}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Phone Number</td>
                                        <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">{dataForm.No_HP}</td>
                                    </tr>
                                    <tr>
                                        <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Planning Concept</td>
                                        <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">{dataForm.Konsep}</td>
                                    </tr>
                                </>
                            ) : (
                                <tr>
                                    <td colSpan="2" className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400 text-center">Loading...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-[1289px] px-4 mb-12 flex justify-end">
                    <button
                        onClick={() => setPopUp(true)}
                        style={{ backgroundColor: '#A79277' }}
                        className="text-white text-[17px] font-medium font-Switzer leading-normal tracking-wide rounded-[8px] px-6 py-3"
                    >
                        Ajukan Perubahan
                    </button>
                </div>
            </div>
            {popUp && <PopUpForm handleClose={handlePopUpClose} />}
            <Footer />
        </div>
    );
};

export default AfterFormReq;
