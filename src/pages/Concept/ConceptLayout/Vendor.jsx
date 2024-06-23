import React, { useEffect, useState } from 'react';
import VendorCard from './VendorCard';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import ImageVendor from '../../../assets/images/vendor-1.png';

const Vendor = () => {
    const [dataVendor, setDataVendor] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const urlApiENV = import.meta.env.VITE_API_URL;
  
    const token = localStorage.getItem('token');
  
    useEffect(() => {
       
        const fetchData = async () => {
            try {
              const url = `${urlApiENV}/api/vendor`;

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log("check data", response.data.data);
                setDataVendor(response.data.data);
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

    return (
        <>
            <section className='flex flex-col bg-primary1 items-center px-[200px] pt-[100px] pb-[100px]'>
                <div className='text-center mb-4'>
                    <h1 className='text-[60px] font-boska font-bold text-primary4 mb-5'>Vendor Acara</h1>
                    <div className='grid grid-cols-3 gap-[60px] w-[1100px]'>
                        {dataVendor.map((vendor) => (
                            <VendorCard 
                                key={vendor.id}
                                // name={vendor.nama_vendor} 
                                url={ImageVendor} 
                                deskripsi={vendor.kategori}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Vendor;
