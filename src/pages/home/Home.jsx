import React, {useState, useEffect} from 'react'
import Header from '../../components/Header/Header'

import heroImg from '../../assets/hero-img.png'
import whatImage from '../../assets/whatImage.png'
import UseCase from '../../components/usecase/UseCase'
import Footer from '../../components/footer/Footer'

function Home() {

    const [playAnimation, setPlayAnimation] = useState(true);

    useEffect(() => {
        setTimeout(()=>{
            setPlayAnimation(false)
        },5000)
    }, []);

    return (
        <div className='bg-[#121212]'>
            {playAnimation && <div id="page-preloader">
                <div className="theme-loader">Defi Origin</div>
            </div>}
            <div className='relative'>
                <Header />
                <div className="container mx-auto z-10 font-Inter">
                    <section>
                        <div className='flex flex-col md:flex-row items-center md:h-screen justify-between text-center md:text-left'>
                            <article className='mb-10 md:mb-0'>
                                <h1 className='text-[2.25rem] md:text-[3.5rem] leading-[120%] font-[900] mb-5'>Decentralized App <br/> <span className='text-main-color'>Cloud Platform</span></h1>
                                <p className='text-xl text-[#B1ADAD] md:text-3xl text-main-color/[0.5] font-medium'>Open source web3 deep linking <br/> to blockchain Dapps.</p>
                            </article>
                            <div className='p-2.5'>
                                <img src={heroImg} alt="Hero Image" className='w-[34.81rem]'/>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <main className='p-2.5 mt-[50px] '>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center flex-col md:flex-row md:mb-[100px] font-Inter'>
                        <article className='text-center md:text-left'>
                            <h2 className='text-[2.75rem] md:text-[3.25rem] mb-5 leading-[120%] md:leading-[150%] font-bold'>What is <span className='text-main-color'>Defi</span> Origin ?</h2>
                            <p className='text-xl font-medium leading-[120%] my-[1.125rem] p-2.5'>Defi Origin is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Decentralized wallets a safer choice compared to desktop or browser extension wallets.</p>
                        </article>
                        <div className='shrink-0 hidden md:block'>
                            <img src={whatImage} alt="What is " />
                        </div>
                    </div>
                    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1 gap-y-8 md:gap-y-1 mb-[50px] text-center'>
                        <UseCase  
                            iconName = "network-wired"
                            title = "Connect to Dapps"
                            content = "Connect decentralized web applications to mobile wallets. Enable Dapps on mobile wallet or extension"
                        />
                        <UseCase 
                            iconName = "check"
                            title = "Validate"
                            content = "Synchronize wallet Dapps and server in a multichain node"
                        />
                        <UseCase 
                            iconName = "bridge"
                            title = "Bridge"
                            content = "Interaction eith EVODeFi Cross-Chain Token Bridge with Open source for auditability WEB3"
                        />
                        <UseCase 
                            iconName = "arrows-rotate"
                            title = "Migrate"
                            content = "Multichange token upgrade in the WEB3 open source"
                        />
                        <UseCase 
                            iconName = "wallet"
                            title = "Stake"
                            content = "Earn and claim rewards"
                        />
                        <UseCase 
                            iconName = "shuffle"
                            title = "Swap"
                            content = "Trade between ecosystems internally and externally"
                        />
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
