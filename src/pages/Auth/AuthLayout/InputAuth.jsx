import React from 'react'

const InputAuth = (props) => {
    const { label, type = "text", value, onChange} = props

    return (
        <div className='flex flex-col gap-3'>
            <label htmlFor="">{label}</label>
            <input type={type} value={value} 
                onChange={onChange}  className='rounded-[8px] xl:h-[50px] lg:h-[30px]' required />
        </div>
    )
}

export default InputAuth
