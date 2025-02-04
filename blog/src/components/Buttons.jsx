import React, { Children } from 'react'

const Buttons = ({
    children,
    type='button',
    bgColor='bg-blue-600',
    textColor='text-white',
    className='',
    ...props

}) => {
  return (
    <button className='px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}'{...props}> {/*passing color text  */}
       { children}{/*This is a placeholder for the children it will be used when we need button with different text*/},
        </button>
  )
}

export default Buttons
