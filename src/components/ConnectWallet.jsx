import React, { useState } from 'react'
import { useStorken } from '../data/storken'
const ConnectWallet = () => {
   const [accountAdress, AccountAdress] = useStorken("accountAdress")

  async function connectToWallet() {
    if(window.ethereum){
      //console.log("Metamask var")
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })
        AccountAdress.set(accounts[0])
        console.log(accountAdress)
      } catch (error) {
        console.log(`Hesaba bağlanırken hata oluştu {error}`)
      }
    }
    else{
      alert("Metamask tarayıcıda yüklü değil!")
      return
    }

  }

  return (
    <div>
      <button onClick={connectToWallet} className='px-3 py-2 rounded-full font-semibold hover:bg-sky-900 transition-all text-white border-sky-600 border-2 :'>
         {accountAdress !== "" ? "Disconnect" : "Connect Wallet"}
         </button>
    </div>
  )
}

export default ConnectWallet