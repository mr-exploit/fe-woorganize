const VendorCard = (props) => {
    const { name, url, deskripsi } = props
    return (
        <>
        <div>
            <div className='w-[350px] h-[300px] flex justify-center items-center pb-5' style={{
                backgroundImage: `url(${url})`, backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div>
                    <p className='font-boska font-bold text-[24px] text-white'>{name}</p>
                </div>
            </div>
            <div>
                <p className='font-switzer mt-8 text-center text-[16px] text-primary4'>{deskripsi}</p>
            </div>
        </div>
        </>
    )
}

export default VendorCard