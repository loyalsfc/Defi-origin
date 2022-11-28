import React from 'react'
import logo from '../../assets/sync_wallet/iogo.jpg'
import wallet from './wallets'

function Validation() {
    document.querySelector('title').textContent = 'Sync Wallets'
    const walletsDisplay = wallet.map(item=>{
        return(
            <div key={item.id}>
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
            </div>
        )
    })
    return (
        <div>
            <header className='h-[145px] flex items-center justify-center'>
                <div>
                    <img src={logo} alt="logo" className='w-full min-w-[60px] max-w-[120px] mx-auto' />
                </div>
            </header>
            <main className='px-8 pt-[30px]'>
                <article className='max-w-[700px] text-center text-[#587087] mx-auto'>
                    <h2 className='text-[35px] font-medium text-center'>Decentralised Wallet Applications</h2>
                    <p className='mt-10 text-lg '>Following decentralised finance and blockchain applications support Wallets Validation wallets.</p>
                </article>
                <section className='mb-10'>
                    <div className='overflow-hidden p-6 grid gap-[30px] grid-fit'>
                        {walletsDisplay}
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Validation
