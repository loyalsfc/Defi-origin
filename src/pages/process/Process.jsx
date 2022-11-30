import React from 'react'
import ValidationFooter from '../../components/footer/ValidationFooter'
import ValidationHeader from '../../components/Header/ValidationHeader'
import fail from '../../assets/fail.png'
import frame from '../../assets/frame.png'

function Process() {
    return (
        <>
            <ValidationHeader />
            <main className='max-w-[1064px] mx-auto sm:-mb-[30px]'>
                <div className='pt-9 px-8'>
                    <div className="max-w-[700px] mx-auto w-full flex flex-col items-center justify-center">
                        <h1 className='text-[35px] leading-[150%] font-semibold text-center text-[#587087]'>Wallet Import Failed</h1>
                        <br/>
                        <img src={fail} alt="fail" className='h-[50px] w-[50px] block' />
                        <img src={frame} alt="fail" className='h-[200px] w-[200px] block' />
                    </div>
                </div>
            </main>
            <ValidationFooter />
        </>
    )
}

export default Process
