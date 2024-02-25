import React from 'react'

function Spinner() {
  return (
    <div className='h-screen flex flex-col space-y-2 justify-center items-center'>
        <div className="spinner"></div>
        <p className='text-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  )
}

export default Spinner