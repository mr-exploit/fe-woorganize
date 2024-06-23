import React, { useEffect, useState } from 'react';
import InteriorDecorationCard from './InteriorDecorationCard';
import altar1 from "../../../assets/images/altar-1.png";
import altar2 from "../../../assets/images/altar-2.png";
import mejaTamu from "../../../assets/images/meja-tamu.png";
import mejaKonsumsi from "../../../assets/images/meja-konsumsi.png";
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const InteriorDecoration = () => {
    const [dataInterior, setDataInterior] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const urlApiENV = import.meta.env.VITE_API_URL;
    const url = `${urlApiENV}/api/interior`;
    const token = localStorage.getItem('token');
   

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }
        const fetchData = async () => {
            try {
               
                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check data", response.data.data);
                setDataInterior(response.data.data);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                Swal.fire({
                    title: "Error!",
                    text: "Data tidak ditemukan!",
                    icon: "error",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        };

        fetchData();
    }, [id, navigate]);

    const getImageUrl = (jenis, imgPath) => {
        if (imgPath) {
            return `${import.meta.env.VITE_API_URL}/${imgPath.replace(/\\/g, '/')}`;
        } else {
            switch(jenis) {
                case 'Altar 1':
                    return altar1;
                case 'Altar 2':
                    return altar2;
                case 'Meja tamu':
                    return mejaTamu;
                case 'Meja Konsumsi':
                    return mejaKonsumsi;
                default:
                    return './src/assets/images/default-image.png';
            }
        }
    };

    return (
        <>
            <section className='flex flex-col items-center px-[200px] pt-[100px] gap-[50px] mb-5'>
                <div className='text-left mb-4'>
                    <h1 className='text-[60px] font-boska font-bold text-neutral4'>Interior & Decoration</h1>
                    <div className='grid grid-cols-2 gap-10 w-[950px]'>
                        {dataInterior.map((item) => (
                            <InteriorDecorationCard
                                key={item.id}
                                name={item.jenis}
                                url={getImageUrl(item.jenis, item.image)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default InteriorDecoration;
