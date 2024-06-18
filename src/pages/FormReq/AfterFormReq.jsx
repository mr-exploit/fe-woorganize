import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Swal from 'sweetalert2';

const AfterFormReq = () => {
    const [popUp, setPopUp] = useState(false);

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Perubahan akan segera diproses oleh kami!",
            icon: "success"
        });
        setPopUp(false)
    }

    const PopUpForm = () => {
        return (
            <div className='absolute left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
                <div className='bg-neutral1 p-8 rounded-[8px] w-[772px] flex flex-col gap-5'>
                    <p className='font-medium text-neutral5'>Apa yang ingin anda ubah?</p>
                    <textarea className='rounded-xl h-[160px] mb-2' name="" id="" placeholder='Tuliskan perubahan apa yang Anda inginkan!'></textarea>
                    <div className='flex justify-end gap-2'>
                        <button className='bg-neutral2 px-[18px] py-[9px] rounded-md text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                        <button onClick={handlePopUp} className='bg-primary1 px-[18px] py-[9px] rounded-md text-primary5 font-semibold'>Simpan</button>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='relative'>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="text-center mb-12 mt-12">
                    <div className="text-neutral-700 text-[55px] font-bold font-['Boska'] leading-normal tracking-widest mb-4">Form Planning</div>
                    <div className="text-neutral-400 text-2xl font-normal font-Switzer leading-normal tracking-wide mb-4">Thank you for filling out the form. Here is the information you provided:</div>
                    <div className="border-b border-neutral-400 w-2/3 mx-auto"></div>
                </div>
                <div className="w-full max-w-[1289px] px-4 mb-12">
                    <table className="w-full border-collapse rounded-t-lg overflow-hidden">
                        <tbody>
                            <tr>
                                <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">First Name</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">John</td> {/* hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Last Name</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Doe</td> {/* hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Email</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">john.doe@example.com</td> {/* hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Phone Number</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">0812-3456-7890</td> {/* hasil input dari pengguna */}
                            </tr>
                            <tr>
                                <td className="text-neutral-700 text-[21px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Planning Concept</td>
                                <td className="text-neutral-700 text-[18px] font-medium font-Switzer leading-normal tracking-wide p-4 border border-neutral-400">Saya ingin konsep acara seperti disney, dengan budget 1.5M dan hari-H sekitar bulan agustus akhir. Dengan tamu kisaran 500 tamu</td> {/* hasil input dari pengguna */}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-full max-w-[1289px] px-4 mb-12 flex justify-end">
                    <button
                        onClick={() => {
                            setPopUp(true)
                        }}
                        style={{ backgroundColor: '#A79277' }}
                        className="text-white text-[17px] font-medium font-Switzer leading-normal tracking-wide rounded-[8px] px-6 py-3"
                    >
                        Ajukan Perubahan
                    </button>
                </div>
            </div>
            {
                popUp && <PopUpForm />
            }
            <Footer />
        </div>
    );
};

export default AfterFormReq;
