import React from 'react'
import Footer from '../../../components/Footer';
import ClientName from './DashboardLayout/ClientName'
import KonsepMenu from './DashboardLayout/Konsep Acara/KonsepMenu'
import VendorMenu from './DashboardLayout/Vendor Acara/VendorMenu'
import DetailMenu from './DashboardLayout/Detail Acara/DetailMenu'
import DecorMenu from './DashboardLayout/Decoration/DecorMenu'
import Pakaian1 from './DashboardLayout/Pakaian/PakaianWanita'
import Pakaian2 from './DashboardLayout/Pakaian/PakaianPria'
import NavbarAdmin from '../components/NavbarAdmin';
import SidebarAdmin from '../components/SidebarAdmin';
import Swal from 'sweetalert2';


const Dashboard2 = () => {

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Perubahan telah berhasil!",
            icon: "success"
        });
    }

    return (
        <>
        <div className="flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <div className='w-flex flex-1 mt-[100px]'>
                    <ClientName />
                    <VendorMenu />
                    <Pakaian1 />
                    <Pakaian2 />
                    <DecorMenu />
                    <KonsepMenu />
                    <DetailMenu />
                    <div className='flex justify-end'>
                    <input onClick={(e) => {
                            e.preventDefault()
                            handlePopUp()
                        }} type="submit" value="Simpan Konsep" className='px-5 py-3 m-10 bg-neutral4 text-primary2 rounded-[8px] mt-[50px] cursor-pointer' />
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Dashboard2
