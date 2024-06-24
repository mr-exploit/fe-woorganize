import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const WeddingDress = () => {
    const [dataDress, setDataDress] = useState([]);
    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const DataUser = JSON.parse(localStorage.getItem("users"));
    const navigate = useNavigate();

    useEffect(() => {

        const fetchFormData = async () => {
            try {
                const userId = DataUser.id;
                const url = `${urlApiENV}/api/relasimwd/${userId}`;
  
                const response = await axios.get(`${url}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log('check data dress', response.data.data);
                setDataDress(response.data.data);
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
    }, [token, navigate, urlApiENV]);

    const getImageUrl = (imgPath) => {
        if (imgPath) {
            return `${urlApiENV}/${imgPath.replace(/\\/g, '/')}`;
        } else {
            return './src/assets/images/default-image.png';
        }
    };

    const getDescriptionParts = (deskripsi) => {
        if (deskripsi) {
            const parts = deskripsi.split('\r\n\r\n');
            return {
                part1: parts[0] || '',
                part2: parts[1] || ''
            };
        }
        return { part1: '', part2: '' };
    };

    return (
        <>
            <section className='flex flex-col mt-[80px] bg-primary1 items-center p-auto'>
                <div className='flex flex-row m-[150px]'>
                    {dataDress.map((dress) => (
                        <div key={dress.id} className='flex flex-row mr-[50px] p-auto'>
                            <div className='w-[400px] h-[500px]'>
                                <div className='w-[400px] h-[500px]'>
                                    <img src={getImageUrl(dress.img)} alt={dress.nama_dress} style={{ width: "350px", height: "400px" }} />
                                </div>
                            </div>
                            <div>
                                <div className='flex flex-col text-left pr-7'>
                                    <h1 className='text-[32px] font-switzer font-bold text-neutral5'>{dress.nama_dress}</h1>
                                    <h2 className='text-[24px] font-switzer font-bold text-neutral5 mb-5'>Rp {dress.harga}</h2>
                                    <p className='text-neutral4 text-[16px]'>{getDescriptionParts(dress.deskripsi).part1}</p>
                                    <p className='text-neutral4 text-[16px]'>{getDescriptionParts(dress.deskripsi).part2}</p>
                                </div>
                                <div className='pr-7'>
                                    <div className='flex flex-col text-left'>
                                        <ul className='text-neutral4 text-[16px]'>
                                            <li className='border-b border-neutral1 py-2'>Ukuran : {dress.ukuran}</li>
                                            <li className='border-b border-neutral1 py-2'>Warna : {dress.warna}</li>
                                            <li className='py-2'>Komposisi : -</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default WeddingDress;
