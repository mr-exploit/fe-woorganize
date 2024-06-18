const InteriorDecorationCard = (props) => {
    const { name, url } = props
    return (
        <div className='w-[450px] h-[300px] rounded-[20px] flex justify-center items-end pb-5' style={{
            backgroundImage: `url(${url})`, backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <p className='font-boska font-bold text-[24px] text-white'>{name}</p>
            </div>
        </div>
    )
}

export default InteriorDecorationCard