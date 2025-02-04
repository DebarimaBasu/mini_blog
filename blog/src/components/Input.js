import React from 'react'

const Input =React.forwardRef (
    function Input({
        label,

        type='text',
        placeholder='Enter your text',
        className='',
        ...props
    },ref)
    {
        return <h1>
           <div>
                <label>{label}</label>
                <input
                type={type}
                placeholder={placeholder}
                className='border border-gray-400 px-4 py-2 rounded-lg w-full'
                ref={ref}
                {...props}
                />
           </div>
        </h1>
    }

) 

export default Input
