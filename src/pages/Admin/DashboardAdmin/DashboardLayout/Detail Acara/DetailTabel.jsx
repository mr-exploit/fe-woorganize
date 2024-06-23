import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DetailTabel = () => {
    const [popUp, setPopUp] = useState(false);
    const [dataKonsep, setDataKonsep] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const dataUser = JSON.parse(localStorage.getItem('users'));

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        if (!dataUser || dataUser.role !== 'admin') {
            navigate('/');
            return;
        }

        const fetchData = async () => {
            try {
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/admin/concept/${id}`;

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setDataKonsep(response.data.data[0]);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                Swal.fire({
                    title: "Error!",
                    text: "Data konsep tidak ditemukan!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        };

        fetchData();
    }, [id, navigate, token]);

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Perubahan akan segera diproses oleh kami!",
            icon: "success"
        });
        setPopUp(false);
    }

    const PopUpForm = () => {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">                <div className='bg-neutral1 p-8 rounded-[8px] w-[772px] flex flex-col gap-5'>
                <p className='font-medium text-neutral5'>Detail Acara</p>
                <textarea className='rounded-xl h-[160px] mb-2' placeholder='Tuliskan perubahan apa yang Anda inginkan!'></textarea>
                <div className='flex justify-end gap-2'>
                    <button className='bg-neutral2 px-[18px] py-[9px] rounded-md text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                    <button onClick={handlePopUp} className='bg-neutral5 px-[18px] py-[9px] rounded-md text-primary5 font-semibold'>Simpan</button>
                </div>
            </div>
            </div>
        )
    }

    return (
        <div className="overflow-hidden w-full mx-5 border rounded-lg shadow-md">
        <table className="min-w-full rounded-lg text-left">
            <thead className="bg-gray-100 text-gray-500 text-[12px]">
                <tr className='font-switzer'>
                    <th className="py-5 px-1"></th>
                    <th className="py-5">Isi</th>
                    <th className="py-5 text-center">Keterangan</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                <tr className='font-switzer'>
                    <td className="py-5 px-1"></td>
                    <td className="py-5">{dataKonsep.Detail_Acara}</td>
                    <td className="py-5 text-center">
                        <button onClick={() => {setPopUp(true);}}>
                            <img src="../src/assets/icons/edit-icon.svg" alt="edit" />
                        </button></td>
                </tr>
            </tbody>
        </table>
        {popUp && <PopUpForm />}
        </div>
    );
};

export default DetailTabel
