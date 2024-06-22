import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PopUpForm = ({ handleClose }) => {
    const [tipe, setTipe] = useState('Form Planning');
    const [text, setText] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const urlApiENV = import.meta.env.VITE_API_URL;
        const token = localStorage.getItem('token');

        if (!token) {
            navigate('/login');
            return;
        }
        console.log("check type")
        try {
            const response = await axios.post(`${urlApiENV}/api/history`, {
                tipe,
                id_form: id,
                text,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.data.msg) {
                handlePopUp();
            }
        } catch (error) {
            Swal.fire({
                title: "Submit Failed!",
                text: `${error.response ? error.response.data.msg : error.message}`,
                icon: "error"
            });
        }
    };

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Perubahan akan segera diproses oleh kami!",
            icon: "success"
        });
        handleClose();
    }

    return (
        <div className='absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
            <div className='bg-neutral1 p-8 rounded-[8px] w-[772px] flex flex-col gap-5'>
                <p className='font-medium text-neutral5'>Apa yang ingin anda ubah?</p>
                <textarea
                    className='rounded-xl h-[160px] mb-2'
                    placeholder='Tuliskan perubahan apa yang Anda inginkan!'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <div className='flex justify-end gap-2'>
                    <button className='bg-neutral2 px-[18px] py-[9px] rounded-md text-neutral5 font-semibold' onClick={handleClose}>Batal</button>
                    <button onClick={handleSubmit} className='bg-primary1 px-[18px] py-[9px] rounded-md text-primary5 font-semibold'>Simpan</button>
                </div>
            </div>
        </div>
    );
}

export default PopUpForm;
