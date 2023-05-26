import React from 'react'
import ConnectWallet from '../components/ConnectWallet'

const Header = () => {
    return (
        <>
            <div className='h-16 w-full flex justify-between px-12 py-2 items-center'>
                <div className=' w-36'>
                    <img src="https://i.hizliresim.com/2h3gojs.png" alt="" />
                </div>
                <div>
                    <ConnectWallet/>
                </div>
            </div>
        </>
    )
}

export default Header