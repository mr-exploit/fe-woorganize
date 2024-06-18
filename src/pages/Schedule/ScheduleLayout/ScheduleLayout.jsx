import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import Swal from 'sweetalert2';

const Schedule = () => {
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
        <>
            <div className="relative">
                <section className='bg-neutral1 p-16'>
                    <div>
                        <h1 className='text-center text-[53px] font-boska font-bold text-neutral4'>
                            Schedule Planning
                        </h1>
                        <h2 className='text-center text-[24px] font-switzer text-neutral3 pb-4'>
                            Please see your pre-wedding schedule here.
                        </h2>
                        <div className='border-b-2 border-neutral3 w-[260px] mx-auto mt-1 mb-16'></div>
                    </div>
                    <div className='font-switzer text-neutral4 mb-20'>
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            headerToolbar={{
                                left: 'prev',
                                center: 'title',
                                right: 'next'
                            }}
                            initialView='dayGridMonth'
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            weekends={true}
                            height={1000}
                            contentHeight={600}
                        />
                    </div>
                </section>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
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
            {popUp && <PopUpForm />}
        </>
    );
}

export default Schedule
