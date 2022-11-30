import React from 'react'
import logo from '../../assets/sync_wallet/iogo.jpg'

function ValidationHeader() {
        return (
            <header className=' h-[145px] flex items-center justify-center'>
                <div>
                    <img src={logo} alt="logo" className='w-full min-w-[60px] max-w-[120px] mx-auto' />
                </div>
            </header>
        )
}

export default ValidationHeader
