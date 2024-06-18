import React, { useState } from 'react';
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';

const FormA2 = () => {
    const [formData, setFormData] = useState({
        tipe: '',
        keterangan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']">Form Request</h1>
                    </div>
                    <div className="mt-6">
                        <div className="mt-6">
                            <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                                <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                    <div className="w-8">No</div>
                                    <div className="w-16">First</div>
                                    <div className="w-16">Last</div>
                                    <div className="w-48">Email</div>
                                    <div className="w-36">Phone Number</div>
                                    <div className="w-64">Concept</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-200">
                            <div className="flex justify-between items-center p-4">
                                <div className="w-8 text-gray-900">1</div>
                                <div className="w-16 text-gray-900">John</div>
                                <div className="w-16 text-gray-900">Doe</div>
                                <div className="w-48 text-gray-900">john.doe@example.com</div>
                                <div className="w-36 text-slate-800">+1234567890</div>
                                <div className="w-64 text-slate-800">Wedding Ceremony and Reception</div>
                            </div>
                        </div>
                        {/* Tabel tambahan */}
                        
                        <main className="flex-1 p-0 ml-[0px] mt-[20px] mb-[15px]">
                            <div className="flex justify-between items-center mb-6">
                                <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']" style={{ marginTop: '20px' }}>Request Change</h1>
                            </div></main>
                        <div className="mt-6">
                        <div className="bg-gray-50 rounded-t-lg border border-gray-200">
                                    <div className="flex justify-between items-center p-4 text-xs font-normal text-gray-400">
                                        <div style={{ width: '8%', padding: '8px' }}>No</div>
                                        <div style={{ width: '36%', padding: '8px' }}>Tipe</div>
                                        <div style={{ width: '56%', padding: '8px' }}>Keterangan</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-gray-200">
                                <div className="flex justify-between items-center p-4">
                                    <div style={{ width: '8%', padding: '8px', color: '#000' }}>1</div>
                                    <div style={{ width: '36%', padding: '8px', color: '#000' }}>Rincian Anggaran</div>
                                    <div style={{ width: '56%', padding: '8px', color: '#000' }}>Saya ingin mengalokasikan dana dari A ke B sebanyak 15.000.000</div>
                                </div>
                        </div>
                    </div>
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default FormA2;
