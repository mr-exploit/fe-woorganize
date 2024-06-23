import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";

const PopUpForm = ({ onClose, onAddData }) => {

    const {id} = useParams();

    const [formData, setFormData] = useState({
        id_form: id,
        Uraian: '',
        Vol: '',
        Harga_Awal: '',
        Jumlah: '',
        Keterangan: ''
    });

    // const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const urlApiENV = import.meta.env.VITE_API_URL;
            const url = `${urlApiENV}/api/rincian`;
            const token = localStorage.getItem("token");

            const response = await axios.post(url, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            onAddData(response.data.data);
            setFormData({id_form: id, Uraian: '', Vol: '', Harga_Awal: '', Jumlah: '', Keterangan: '' });
            Swal.fire({
                title: "Success!",
                text: "Data has been successfully saved!",
                icon: "success"
            });
        } catch (err) {
            const error = ` ${err.response ? err.response.data.msg : err.message}`
            Swal.fire({
                title: "Oops...",
                text: error,
                icon: "error"
            });
        }
    };

    return(
        <div className='z-30 absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
            <form onSubmit={handleSubmit} className='bg-white p-12 rounded-xl w-[700px]'>
                <div className='flex flex-col gap-5'>
                    {Object.keys(formData).map((field) => (
                        <div className='flex flex-col gap-[10px]' key={field}>
                            <label htmlFor={field} className='font-semibold text-gray-700'>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            <input
                                name={field}
                                type="text"
                                className='rounded-[8px] h-[50px]'
                                value={formData[field]}
                                onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                                readOnly={field === 'id_form'}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 mt-[50px]'>
                    <button type='submit' className='px-5 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Simpan</button>
                    <button type="button" className='bg-neutral2 px-5 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={onClose}>Batal</button>
                </div>
            </form>
        </div>
    );
}

export default PopUpForm;
