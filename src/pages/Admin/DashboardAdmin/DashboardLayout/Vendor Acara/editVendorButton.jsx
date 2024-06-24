const PopUpEdit = () => {

     const [popUp, setPopUp] = useState(false);

    const [formData, setFormData] = useState({
        namaVendor: '',
        alamat: '',
        noTelp: '',
        harga: '',
        kategori: ''
    });

    const handlePopUp = () => {
        Swal.fire({
            title: "Success!",
            text: "Data has been successfully saved!",
            icon: "success"
        });
        setPopUp(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    
    return (
        <div className='z-30 fixed left-0 right-0 top-0 bottom-0 bg-black bg-opacity-70 h-full flex justify-center items-center'>
            <form onSubmit={handleSubmit} action="" className='bg-white p-12 rounded-xl w-[700px]'>
                <div>
                    <div className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Vendor</label>
                            <input name='vendor' type="text" className='rounded-[8px] h-[50px]' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Lokasi</label>
                            <input name='alamat' type="text" className='rounded-[8px] h-[50px]' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor="" className='font-semibold text-gray-700'>No. Telepon</label>
                            <input name='noTelp' type="text" className='rounded-[8px] h-[50px]' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Harga</label>
                            <input name='harga' type="text" className='rounded-[8px] h-[50px]' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <label htmlFor="" className='font-semibold text-gray-700'>Kategori</label>
                            <input name='kategori' type="text" className='rounded-[8px] h-[50px]' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between mt-[40px] '>
                    <button type="button" className='bg-neutral2 px-7 py-3 rounded-[8px] text-neutral5 font-semibold' onClick={() => { setPopUp(false) }}>Batal</button>
                    <button onClick={handlePopUp} className='px-7 py-3 bg-neutral4 text-white rounded-[8px] cursor-pointer items-center'>Ubah</button>
                </div>
            </form>
        </div>
    );
};


export default PopUpEdit;