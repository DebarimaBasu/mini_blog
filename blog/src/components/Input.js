import React, { useId } from 'react'

const Input =React.forwardRef (
    function Input({
        label,

        type='text',
        placeholder='Enter your text',
        className='',
        ...props
    },ref)
    {
        //{/*useId is a custom hook that generates a unique id for the input field */}
        const id=useId() 
        return (
            <div className='w-full'>
               {label && <label className=' inline-block mb-1 pl-1'
               htmlFor={id}>
                {label}</label>}
                <input
                type={type}
                className={`${className}`}  //{/*for whatever user has started */}
                ref={ref}
                id={id}/> 
                </div>  
        )
    }

) 

export default Input
