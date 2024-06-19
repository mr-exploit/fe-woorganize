import Header from '../../components/Header';
import Footer from '../../components/Footer';
import bgservice from "../../assets/images/bg-service.png"
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect,  } from "react";
import Swal from 'sweetalert2';
import axios from "axios";

const RincianAnggaran = () => {
    const [popUp, setPopUp] = useState(false);
    const [dataRC, setDataRc] = useState([]);
    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Perubahan akan segera diproses oleh kami!",
            icon: "success"
        });
        setPopUp(false);
    }
    const navigate = useNavigate(); // Initialize navigate
    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlApiENV = import.meta.env.VITE_API_URL;
                const url = `${urlApiENV}/api/rincian`;
                console.log("check url", url);

                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login"); // Redirect to login if no token found
                    return;
                }

                const dataResponse = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                console.log("check dataResponse", dataResponse.data.data);
                setDataRc(Array.isArray(dataResponse.data.data) ? dataResponse.data.data : []);
                // setLoading(false);
            } catch (err) {
                console.error("Error during fetch:", err.response ? err.response.data : err.message);
                setError(err);
                // setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const PopUpForm = () => {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                <div className='bg-neutral1 p-8 rounded-[8px] w-[772px] flex flex-col gap-5'>
                    <p className='font-medium text-neutral5'>Apa yang ingin anda ubah?</p>
                    <textarea className='rounded-xl h-[160px] mb-2' placeholder='Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!'></textarea>
                    <div className='flex justify-end gap-2'>
                        <button className='bg-neutral2 px-[18px] py-[9px] rounded-md text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                        <button onClick={handlePopUp} className='bg-primary1 px-[18px] py-[9px] rounded-md text-primary5 font-semibold'>Simpan</button>
                    </div>
                </div>
            </div>
        )
    }

    const formatNumber = (number) => {
        return number.toLocaleString('id-ID');
    }

    return (
        <>
            <Header />
            <div className="anggaran w-full bg-white p-0 pt-16 pb-16">
                <div className="relative bg-primary1 p-20 w-full">
                    <div className="RincianAnggaran text-center text-neutral5 text-6xl font-bold font-['Boska'] leading-100 tracking-widest">
                        Rincian Anggaran
                    </div>
                    <div className="mt-6 overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-100">
                            <thead>
                                <tr className="bg-neutral-400 text-orange-50 text-base font-bold">
                                    <th className="px-4 py-2">No</th>
                                    <th className="px-4 py-2">Uraian</th>
                                    <th className="px-4 py-2">Vol</th>
                                    <th className="px-4 py-2">Harga Awal</th>
                                    <th className="px-4 py-2">Jumlah</th>
                                    <th className="px-4 py-2">Keterangan</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800 text-base">
                                {Array.isArray(dataRC) && dataRC.map((item, index) => (
                                        <tr key={item.id}>
                                            <td className="border px-4 py-2">{index + 1}</td>
                                            <td className="border px-4 py-2">{item.Uraian}</td>
                                            <td className="border px-4 py-2">{item.Vol}</td>
                                            <td className="border px-4 py-2">{formatNumber(Number(item.Harga_Awal))}</td>
                                            <td className="border px-4 py-2">{formatNumber(Number(item.Jumlah))}</td>
                                            <td className="border px-4 py-2">{item.Keterangan}</td>
                                          
                                        </tr>
                                    ))}
                          
                            </tbody>
                        </table>
                    </div>
                    <div className="icon rotate-45">
                        <div className="w-4 h-4 flex justify-center items-center">
                            <div className="icon-outline-arrow-right"></div>
                        </div>
                    </div>
                </div>
                <section className='h-[547px] flex justify-center items-center mt-20' style={{
                    backgroundImage: `url(${bgservice})`, backgroundSize: 'cover'
                }}>
                    <div className='w-[1000px] bg-neutral1 shadow-inner py-3 flex m-auto'>
                        <div className="px-10 py-8">
                            <h2 className='text-[42px] font-boska text-neutral4 font-bold'>Catatan:</h2>
                            <div>
                                <p className='font-switzer text-neutral3 text-[16px]'>
                                    Anggaran dapat dilakukan perubahan dengan mengajukan permohonan melalui platform yang tersedia. Sertakan dengan jelas alokasi dana yang diinginkan dan berikan alasan perubahan. Jawaban terkait pertanyaan rincian anggaran yang kurang dipahami akan kami tambahkan pada tabel yang tersedia.
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
            </div>
            <Footer />
        </>
    );
};

export default RincianAnggaran;
