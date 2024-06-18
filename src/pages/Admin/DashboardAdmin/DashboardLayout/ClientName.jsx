import React from 'react'

const ClientName = () => {
    return (
        <section className='p-2 bg-white border rounded-lg shadow-md m-3'>
        <div className="flex items-center p-4 ml-5">
            <img src="../src/assets/images/testi1.png" alt="Client" className="rounded-full w-12 h-12" />
            <div className="text-left ml-4">
                <div className="font-semibold">Lil Daniels</div>
                <div className="text-gray-500">lil.daniels@gmail.com</div>
            </div>
            {/* <div className='ml-10'>
                <button className='bg-neutral5 text-primary2 px-4 py-2 rounded-lg'>
                    Save
                </button>
            </div> */}
        </div>
        </section>
    )
}

export default ClientName