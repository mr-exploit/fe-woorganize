import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PopUpEditSA = ({ onClose, onSuccess, formData }) => {
    const [kegiatan, setKegiatan] = useState("");
    const [tanggal, setTanggal] = useState("");

    useEffect(() => {
        if (formData) {
            setKegiatan(formData.kegiatan);
            setTanggal(formData.tanggal);
        }
    }, [formData]);

    const token = localStorage.getItem("token");
    const urlApiENV = import.meta.env.VITE_API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = `${urlApiENV}/api/schedule/${formData.id}`;
            const response = await axios.put(
                url,
                { keterangan : kegiatan, tanggal },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            Swal.fire({
                title: "Success!",
                text: response.data.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
            });

            onSuccess();
            onClose();
        } catch (err) {
            console.error("Error during edit:", err.response ? err.response.data : err.message);
            Swal.fire({
                title: "Oops!",
                text: `${err.response ? err.response.data.msg : err.message}`,
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Edit Schedule</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Kegiatan</label>
                        <input
                            type="text"
                            value={kegiatan}
                            onChange={(e) => setKegiatan(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Tanggal</label>
                        <input
                            type="date"
                            value={tanggal}
                            onChange={(e) => setTanggal(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="mr-2 bg-gray-300 px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpEditSA;
