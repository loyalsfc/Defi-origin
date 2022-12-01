import React from 'react'
import { Link } from 'react-router-dom'

function UseCase({iconName, title, content}) {
  return (
        <article className='py-9 card-bg font-Inter'>
            <div className='px-4 flex flex-col justify-between h-full'>
                    <div className="mb-5">
                        <div className='mb-4 md:hidden'>
                            <i className={`fas fa-${iconName} text-[3.125rem]`}></i>
                        </div>
                        <h3 className='font-bold text-[1.563rem] mb-[1.875rem] leading-[120%]'>{title}</h3>
                        <p className='text-white/[0.6] font-bold'>{content}</p>
                    </div>
                <Link to='syncwallet'><button className='py-3 px-6 rounded-[12.7273px] bg-[#EAB675] text-bold text-white text-[15px] w-fit mx-auto font-medium'>Click here</button></Link>
            </div>
        </article>
  )
}

export default UseCase
