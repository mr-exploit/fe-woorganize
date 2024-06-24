import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddButton from './AddButton';
import PakaianCard from './PakaianCard';
import axios from 'axios';
import Swal from 'sweetalert2';
import profile from '../../../../../assets/images/profile-medium.png';

const PakaianWanita = () => {

    const [dataCon, setFormCon] = useState([]);
    const navigate = useNavigate();

    const urlApiENV = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token");
    const DataUser = JSON.parse(localStorage.getItem("users"));
    const { id } = useParams();
    const dressSex = 'Male';

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        if (!DataUser || DataUser.role !== "admin") {
            navigate("/");
            return;
        }

        const fetchFormData = async () => {
            try {
                const response = await axios.get(`${urlApiENV}/api/dress/${dressSex}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("check data response", response.data.data);
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

    }, [urlApiENV, navigate, token, DataUser.role, id]);

    const getImageUrl = () => {
        if (dataCon.length > 0 && dataCon[0].image) {
            return `${urlApiENV}/${dataCon[0].image.replace(/\\/g, '/')}`;
        } else {
            return profile;
        }
    };

    const handleAddPakaian = () => {
        // Logic untuk menambah vendor baru
    };

    const [visibleCount, setVisibleCount] = useState(6);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 6);
    };

    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] m-5">Pakaian Pria</h1>
            <div className="flex space-x-2 m-5">
                <AddButton onAdd={handleAddPakaian} />
            </div>
            <div className="flex justify-center m-5">
                <div className="flex flex-col justify-center">
                    <div className='grid grid-cols-3 gap-14'>
                        {dataCon.slice(0, visibleCount).map((pakaian, index) => (
                            <PakaianCard
                                key={index}
                                url={getImageUrl()}
                                name={pakaian.name}
                                harga={pakaian.harga}
                                deskripsi={pakaian.deskripsi}
                                jenis={pakaian.jenis}
                                warna={pakaian.warna}
                                size={pakaian.size}
                            />
                        ))}
                    </div>
                    {visibleCount < dataCon.length && (
                        <div className='flex justify-center m-10'>
                            <button
                                onClick={handleShowMore}
                                className='bg-transparent hover:bg-gray-100 text-primary1 font-semibold py-2 px-[100px] border border-primary1'
                            >
                                Show More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PakaianWanita;
