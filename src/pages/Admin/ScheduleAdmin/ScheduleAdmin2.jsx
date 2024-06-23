import React from 'react'
import NavbarAdmin from '../components/NavbarAdmin'
import SidebarAdmin from '../components/SidebarAdmin'
import Footer from '../../../components/Footer'
import SALayout from './SALayout/SALayout'

const ScheduleAdmin2 = () => {
    return (
        <>
        <div className="flex flex-col">
            <NavbarAdmin />
            <div className="flex flex-1">
                <SidebarAdmin />
                <div className='w-flex flex-1 mt-[100px]'>
                    <SALayout />
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default ScheduleAdmin2
