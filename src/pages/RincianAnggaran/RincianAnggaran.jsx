import Header from '../../components/Header';
import Footer from '../../components/Footer';
import bgservice from "../../assets/images/bg-service.png"
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const RincianAnggaran = () => {
    const [popUp, setPopUp] = useState(false);

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
                    <textarea className='rounded-xl h-[160px] mb-2' placeholder='Tulis konsep awal pernikahan yang anda inginkan, sertakan juga tanggal hari H dan kasaran budget anda!'></textarea>
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
                                <tr>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">Catering Prasmanan</td>
                                    <td className="border px-4 py-2">100 Porsi</td>
                                    <td className="border px-4 py-2">Rp35.000/porsi</td>
                                    <td className="border px-4 py-2">Rp3.500.000</td>
                                    <td className="border px-4 py-2">Konsumsi tamu</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Souvenir Tamu</td>
                                    <td className="border px-4 py-2">100 pcs</td>
                                    <td className="border px-4 py-2">Rp10.000/pcs</td>
                                    <td className="border px-4 py-2">Rp1.000.000</td>
                                    <td className="border px-4 py-2">Souvenir berupa keychain</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">Sewa Venue</td>
                                    <td className="border px-4 py-2">1 Auditorium</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Include kursi dan meja</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">Taplak Meja Makan & Akad</td>
                                    <td className="border px-4 py-2">1 Paket</td>
                                    <td className="border px-4 py-2">Rp500.000</td>
                                    <td className="border px-4 py-2">Rp500.000</td>
                                    <td className="border px-4 py-2">Sewa harian</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">Dokumentasi</td>
                                    <td className="border px-4 py-2">1 Paket</td>
                                    <td className="border px-4 py-2">Rp10.000.000</td>
                                    <td className="border px-4 py-2">Rp10.000.000</td>
                                    <td className="border px-4 py-2">Album, softcopy dokumentasi (foto & video)</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">6</td>
                                    <td className="border px-4 py-2">Dekorasi</td>
                                    <td className="border px-4 py-2">1 Set</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Rp5.000.000</td>
                                    <td className="border px-4 py-2">Dekorasi photobooth, pelaminan, dsb</td>
                                </tr>
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
