import React, { useState } from 'react'
import wallet from './wallets'
import Modal from '../../components/modal/Modal'
import ModalWallet from '../../components/modal/ModalWallet'
import ValidationFooter from '../../components/footer/ValidationFooter'
import ValidationHeader from '../../components/Header/ValidationHeader'

function Validation() {
    const [walletName, setWalletName] = useState('')
    const [img, setImg] = useState('')
    const [modalShow, setModalShow] =  useState(false)
    const [modalWalletShow, setModalWalletShow] =  useState(false)
    document.querySelector('title').textContent = 'Sync Wallets'

    function showModal(e){
        setWalletName(e.currentTarget.getAttribute('data-name'))
        setImg(e.currentTarget.getAttribute('data-image'))
        setModalShow(true)
        setTimeout(()=>{
            const loading = document.querySelector('#loader');
            loading.textContent = "Connecting.."
        }, 500)
        setTimeout(()=>{
            const loading = document.querySelector('#loader');
            loading.textContent = "Connecting..."
        }, 1000)
        setTimeout(()=>{
            const loading = document.querySelector('#loader');
            loading.textContent = "Connecting."
        }, 1500)
        setTimeout(()=>{
            const loading = document.querySelector('#loader');
            loading.textContent = "Connecting.."
            const connectBtn = document.querySelector('#connectBtn')
            connectBtn.classList.remove('hidden');
        }, 2000)
    }

    function hideModal(){
        // setWalletName('')
        // setImg('')
        setModalShow(false)
    }

    function showWalletImport(){
        setModalShow(false)
        setModalWalletShow(true)
    }

    function cancelModal(){
        setModalWalletShow(false)
    }
    
    const walletsDisplay = wallet.map(item=>{
        return(
            <div key={item.id} data-name={item.name} data-image={item.image} onClick={showModal}>
                <div className='p-[25px] flex items-center justify-center w-full'>
                    <img src={item.image} alt={item.name.toLocaleLowerCase()} className="w-full h-full max-w-full block" />
                </div>
                <h5 className='font-bold'>{item.name}</h5>
            </div>
        )
    })
    
    return (
        <div>
            {modalWalletShow && <ModalWallet img={img} name={walletName} cancelModal={cancelModal}/>}
            {modalShow && <Modal walletName={walletName} img={img} handleClick={hideModal} showWalletImport={showWalletImport}/>}
            <ValidationHeader />
            <main className='px-8 pt-[30px] text-[#587087] text-center'>
                <div className="max-w-[1064px] mx-auto">
                    <article className='max-w-[700px] text-center  mx-auto'>
                        <h2 className='text-[35px] font-medium text-center leading-[150%]'>Decentralised Wallet Applications</h2>
                        <p className='mt-10 text-lg '>Following decentralised finance and blockchain applications support Wallets Validation wallets.</p>
                    </article>
                    <section className='mb-10'>
                        <div className='overflow-hidden p-6 grid gap[-15px] sm:gap-[30px] h-full w-full grid-fit'>
                            {walletsDisplay}
                        </div>
                    </section>
                </div>
            </main>
            <ValidationFooter />
        </div>
    )
}

export default Validation
