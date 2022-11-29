import React from 'react'
import { Link } from 'react-router-dom'

function UseCase({iconName, title, content}) {
  return (
        <article className='bg-[#021F31] py-9'>
            <div className='px-1 flex flex-col justify-between h-full'>
                    <div className="mb-5">
                        <div className='mb-4'>
                            <i className={`fas fa-${iconName} text-[3.125rem]`}></i>
                        </div>
                        <h3 className='font-bold text-[1.875rem] my-[1.875rem] leading-[120%]'>{title}</h3>
                        <p className='text-[#B1ADAD text-[15px]'>{content}</p>
                    </div>
                <Link to='syncwallet'><button className='py-3 px-6 rounded bg-button text-white text-[15px] w-fit mx-auto font-medium'>Click here</button></Link>
            </div>
        </article>
  )
}

export default UseCase
