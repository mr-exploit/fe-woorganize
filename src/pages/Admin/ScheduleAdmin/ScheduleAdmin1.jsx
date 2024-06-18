import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';

const ScheduleAdmin1 = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <NavbarAdmin />
                <div className="flex flex-1">
                    <SidebarAdmin />
                    <main className="flex-1 p-12 ml-[0px] mt-[80px] mb-[64px]">
                        <h1 className="text-left text-zinc-800 text-4xl font-bold font-['Boska']"> Schedule</h1>
                        <p className="text-left text-zinc-800 text-base">Pilih Pelanggan</p>
                        <div className="mt-6 overflow-x-auto flex-1">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Nama Pelanggan</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Alamat</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">No. Telepon</th>
                                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-400">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t">
                                        <td className="px-6 py-4 text-gray-900 text-base">John Doe</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">Perumahan X Blok A9 No.79</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">+62-365-7215-1749</td>
                                        <td className="px-6 py-4">
                                            <Link to="/dashboard/schedule2" className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                        </td>
                                    </tr>
                                    <tr className="border-t">
                                        <td className="px-6 py-4 text-gray-900 text-base">Jane Smith</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">Perumahan Y Blok B10 No.45</td>
                                        <td className="px-6 py-4 text-gray-800 text-base">+62-134-7215-5734</td>
                                        <td className="px-6 py-4">
                                            <Link to="/dashboard/schedule2" className="bg-zinc-500 text-white px-5 py-2 rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-opacity-75">Details</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default ScheduleAdmin1
