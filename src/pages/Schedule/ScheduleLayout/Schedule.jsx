import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Schedule = () => {
    return (
        <>
        <div>
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
                <div className='font-switzer text-neutral4'>
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
        </div>
        </>
    )
}

export default Schedule