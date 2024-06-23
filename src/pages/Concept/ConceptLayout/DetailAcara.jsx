import React, { useEffect, useState } from 'react';
import bgservice from "../../../assets/images/bg-service.png";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DetailAcara = () => {
    const [popUp, setPopUp] = useState(false);
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

        if(dataUser.role !== 'user') {
            navigate('/');
            return;
        }
        const idUser = dataUser.id;
        console.log("check idUser", idUser);
        const fetchData = async () => {
            try {
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
    }, [id, navigate, token,]);

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
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                <div className='bg-neutral1 p-8 rounded-[8px] w-[772px] flex flex-col gap-5'>
                    <p className='font-medium text-neutral5'>Apa yang ingin anda ubah?</p>
                    <textarea className='rounded-xl h-[160px] mb-2' placeholder='Tuliskan perubahan apa yang Anda inginkan!'></textarea>
                    <div className='flex justify-end gap-2'>
                        <button className='bg-neutral2 px-[18px] py-[9px] rounded-md text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                        <button onClick={handlePopUp} className='bg-primary1 px-[18px] py-[9px] rounded-md text-primary5 font-semibold'>Simpan</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <section className='h-[547px] flex justify-center items-center' style={{
                backgroundImage: `url(${bgservice})`, backgroundSize: 'cover'
            }}>
                <div className='w-[1000px] bg-neutral1 shadow-inner py-3 rounded-lg flex m-auto relative'>
                    <div className="px-10 py-8">
                        <h1 className='text-[42px] font-boska text-neutral4 font-bold'>Detail Acara:</h1>
                        <div>
                            <p className='font-switzer text-neutral3 text-[16px]'>
                                {dataKonsep ? dataKonsep.Detail_Acara : 'Memuat...'}
                            </p>
                        </div>
                        <div>
                            <br />
                            <button
                                onClick={() => {
                                    setPopUp(true);
                                }}
                                className="flex float-right text-[16px] font-switzer font-bold text-blue-500"
                            >
                                Ajukan Perubahan
                                <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9L9 1m0 0H1m8 0V9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {popUp && <PopUpForm />}
                </div>
            </section>
        </>
    )
}

export default DetailAcara;
