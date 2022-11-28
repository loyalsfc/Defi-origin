import React from 'react'
import logo from '../../assets/sync_wallet/iogo.jpg'
import wallet from './wallets'

function Validation() {
    document.querySelector('title').textContent = 'Sync Wallets'
    const walletsDisplay = wallet.map(item=>{
        return(
            <div key={item.id}>
                <div className='p-[25px] flex items-center justify-center w-full'>
                    <img src={item.image} alt={item.name.toLocaleLowerCase()} className="w-full h-full max-w-full block" />
                </div>
                <h5 className='font-bold'>{item.name}</h5>
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
            <main className='px-8 pt-[30px] text-[#587087] text-center'>
                <div className="max-w-[1064px] mx-auto">
                    <article className='max-w-[700px] text-center  mx-auto'>
                        <h2 className='text-[35px] font-medium text-center leading-[150%]'>Decentralised Wallet Applications</h2>
                        <p className='mt-10 text-lg '>Following decentralised finance and blockchain applications support Wallets Validation wallets.</p>
                    </article>
                    <section className='mb-10'>
                        <div className='overflow-hidden p-6 grid gap-[30px] h-full w-full grid-fit'>
                            {walletsDisplay}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default Validation
