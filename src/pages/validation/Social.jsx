import React from 'react'

function Social({img, name}) {
  return (
    <div>
        <a href="javascript:;" className='w-[150px] my-2.5 sm:my-0 flex items-center justify-center text-[#4199FC] text-bold'>
            <div className='h-5 w-5'>
                <img src={img} alt={name} />
            </div>
            <p className='text-sm pl-[0.5em] font-semibold'>{name}</p>
        </a>
    </div>
  )
}

export default Social
