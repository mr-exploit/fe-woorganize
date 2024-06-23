import React, { useEffect, useState } from 'react';
import AddDecorButton from './AddDecorButton';
import DecorCard from './DecorCard';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DecorMenu = () => {
    const [dataInterior, setDataInterior] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const urlApiENV = import.meta.env.VITE_API_URL;
    const url = `${urlApiENV}/api/interior`;

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
                console.log("Fetched data", response.data.data);
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
    }, [navigate, token, url]);

    const handleAddDecor = () => {
        // Logic untuk menambah dekorasi baru
    };

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <div className="p-6 bg-white border rounded-lg shadow-md m-3">
            <h1 className="text-[36px] font-switzer m-5">Interior & Decoration</h1>
            <div className="flex space-x-2 m-5">
                <AddDecorButton onAdd={handleAddDecor} />
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col mb-4">
                    <div className='grid grid-cols-2 gap-14'>
                        {dataInterior.slice(0, visibleCount).map((decor, index) => (
                            <DecorCard
                                key={index}
                                url={decor.image}  
                                name={decor.name}
                                konsep={decor.konsep}
                                vendor={decor.vendor}
                                phone={decor.phone}
                            />
                        ))}
                    </div>
                    {visibleCount < dataInterior.length && (
                        <div className="flex justify-center m-10">
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

export default DecorMenu;
