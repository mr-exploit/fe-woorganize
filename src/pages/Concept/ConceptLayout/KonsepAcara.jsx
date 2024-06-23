import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const KonsepAcara = () => {
    const [dataKonsep, setDataKonsep] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const dataUser = JSON.parse(localStorage.getItem('users'));

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        if(!dataUser || dataUser.role !== 'user'){
            navigate('/');
            return;
        }
        const fetchData = async () => {
            try {
                const idUser = dataUser.id;
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/concept/${idUser}`;
               
                
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check data", response.data.data);
                setDataKonsep(response.data.data[0]);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.msg : err.message);
                Swal.fire({
                    title: "Error!",
                    text: "Data konsep tidak ditemukan!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchData();
    }, [id, navigate, token]);

    if (!dataKonsep) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className='flex flex-col bg-neutral1 h-auto items-center px-[200px] pt-[100px] pb-[100px]'>
                <div className='bg-transparent flex m-auto'>
                    <div>
                        <div className='mt-[50px]'>
                            <a href="costplan" className="flex float-right text-[16px] font-switzer font-bold text-blue-500">Lihat Rincian Anggaran 
                                <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9L9 1m0 0H1m8 0V9"/>
                                </svg>
                            </a>
                            <h1 className='text-[60px] font-boska text-neutral4 font-bold'>Konsep Acara</h1>
                        </div>
                        <div>
                            <p className='font-switzer text-neutral3 text-[16px]'>
                                Adapun susunan konsep acara pra-pernikahan sesuai dengan gambaran awal anda yaitu sebagai berikut:
                            </p>
                        </div>
                        <div className='flex flex-row mt-10 justify-center'>
                            <div className='grid grid-cols-2 gap-6 mt-10'>
                                <div className='text-center w-[200px] p-15'>
                                    <h1 className='text-[63px] font-switzer text-primary1'>
                                        {dataKonsep.Tamu}
                                    </h1>
                                    <h2 className='font-bold text-[14px] font-switzer text-neutral4'>
                                        Tamu Undangan
                                    </h2>
                                    <p className='justify-center mt-3 font-switzer text-[12px] text-neutral3'>
                                        Mencakup undangan calon pengantin & pihak keluarga.
                                    </p>
                                </div>
                                <div className='text-center w-[200px] p-15'>
                                    <h1 className='text-[63px] font-switzer text-primary1'>
                                        {dataKonsep.Budget}
                                    </h1>
                                    <h2 className='font-bold text-[14px] font-switzer text-neutral4'>
                                        Perkiraan Budget
                                    </h2>
                                    <p className='justify-center mt-3 font-switzer text-[12px] text-neutral3'>
                                        Batas maksimum budget keseluruhan adalah {dataKonsep.Budget}.
                                    </p>
                                </div>
                                <div className='text-center w-[200px] p-15'>
                                    <h1 className='text-[63px] font-switzer text-primary1'>
                                        {dataKonsep.Hari_H}
                                    </h1>
                                    <h2 className='font-bold text-[14px] font-switzer text-neutral4'>
                                        Perkiraan Hari H
                                    </h2>
                                    <p className='justify-center mt-3 font-switzer text-[12px] text-neutral3'>
                                        Tanggal dapat berubah sewaktu-waktu.
                                    </p>
                                </div>
                                <div className='text-center w-[200px] p-15'>
                                    <h1 className='text-[63px] font-switzer text-primary1'>
                                        {dataKonsep.Tema}
                                    </h1>
                                    <h2 className='font-bold text-[14px] font-switzer text-neutral4'>
                                        Tema Acara
                                    </h2>
                                    <p className='justify-center mt-3 font-switzer text-[12px] text-neutral3'>
                                        We're proud of our 5-star rating with over 200 reviews.
                                    </p>
                                </div>
                            </div>
                            <div className='ml-[100px]'>
                                <img className='rounded-lg w-[500px] h-[500px]' src=".\src\assets\images\img-konsep.png" alt="Konsep"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default KonsepAcara;
