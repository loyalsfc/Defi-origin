import React from 'react'
import Header from '../../components/Header/Header'

import heroImg from '../../assets/hero-img.webp'
import UseCase from '../../components/usecase/UseCase'
import Footer from '../../components/footer/Footer'

function Home() {
    return (
        <>
            <div className='relative bg-gradient md:h-screen z-10'>
                <div className="max-w-[1140px] mx-auto z-10">
                    <Header />
                    <section>
                        <div className='flex flex-col md:flex-row items-center md:h-screen justify-between text-center md:text-left'>
                            <article>
                                <h1 className='text-[2.25rem] md:text-[3.5rem] leading-[120%] font-semibold mb-5'>Decentralized App <br/> Cloud Platform</h1>
                                <p className='text-sm text-[#B1ADAD] md:text-lg'>Open source web3 deep linking <br/> to blockchain Dapps.</p>
                            </article>
                            <div className='p-2.5'>
                                <img src={heroImg} alt="Hero Image" className='w-[32.75rem]'/>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="-scale-y-100 absolute -bottom-1 w-full -z-10" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="fill-white" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                        <path className="fill-white" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                        <path className="fill-white" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                    </svg>
                </div>
            </div>
            <main className='bg-white p-2.5 mt-[50px]'>
                <div className='text-center'>
                    <h2 className='text-[2.75rem] md:text-[3.25rem] text-[#2F4858] mb-5 leading-[150%] font-bold'>What is Defi Origin?</h2>
                    <p className='text-lg leading-[150%] my-[1.125rem] max-w-[37.1rem] mx-auto text-[#7A7A7A] p-2.5'>Defi Origin is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Decentralized wallets a safer choice compared to desktop or browser extension wallets.</p>
                    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1 mb-[50px] max-w-[1140px] mx-auto'>
                        <UseCase  
                            iconName = "network-wired"
                            title = "Connect to Dapps"
                            content = "Connect decentralized web applications to mobile wallets. Enable dAPP on mobile wallet or extension"
                        />
                        <UseCase 
                            iconName = "check"
                            title = "Validate"
                            content = "Synchronize wallet dapps and server in a multichain node"
                        />
                        <UseCase 
                            iconName = "bridge"
                            title = "Bridge"
                            content = "Interaction eith EVODeFi Cross-Chain Token Bridge with Open source for auditability WEB3"
                        />
                        <UseCase 
                            iconName = "dollar-sign"
                            title = "NFT/MINT"
                            content = "Multichain sign-in protocol in WEB3 open source"
                        />
                        <UseCase 
                            iconName = "wallet"
                            title = "Wallect Connect"
                            content = "Connect web applications deep linking to supported mobile wallets"
                        />
                        <UseCase 
                            iconName = "check"
                            title = "Airdrop"
                            content = "Synchronize wallet dapps and server in a multichain node"
                        />
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home
