'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import {
  useAnchorWallet,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react'
import {
  buyTokensTx,
  getPoolReserves,
  getUserBalances,
  sellTokensTx,
} from '@/lib/utils'
import { lamportPerSol, presalePrice } from '@/lib/constants'

const TokenTradeComponent = () => {
  const WalletMultiButton = dynamic(
    async () =>
      (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  )
  const { sendTransaction } = useWallet()
  const { connection } = useConnection()
  const anchorWallet = useAnchorWallet()
  const [tokenAmount, setTokenAmount] = useState('')
  const [solAmount, setSolAmount] = useState('')
  const [userBalances, setUserBalances] = useState({
    solBalance: 0,
    tokenBalance: 0,
  })
  const [poolReserves, setPoolReserves] = useState({
    solReserve: 0,
    tokenReserve: 0,
  })
  const [isBuying, setIsBuying] = useState(true) // true for buying, false for selling

  // Fetch user balances and pool reserves
  const fetchData = async () => {
    const balances = await getUserBalances(connection, anchorWallet?.publicKey)
    const reserves = await getPoolReserves(connection, anchorWallet)
    setUserBalances(balances)
    setPoolReserves(reserves)
  }

  // Swap input values
  const handleSwap = () => {
    setIsBuying(!isBuying)
  }

  // Check if the action button should be disabled
  const isActionButtonDisabled = () => {
    if (!anchorWallet) return false
    if (isBuying) {
      return (
        parseFloat(solAmount) > userBalances.solBalance ||
        parseFloat(tokenAmount) > poolReserves.tokenReserve ||
        solAmount == '' ||
        tokenAmount == ''
      )
    } else {
      return (
        parseFloat(tokenAmount) > userBalances.tokenBalance ||
        parseFloat(solAmount) > poolReserves.solReserve ||
        solAmount == '' ||
        tokenAmount == ''
      )
    }
  }

  // Handle buy or sell action
  const handleAction = async () => {
    if (!anchorWallet) return
    try {
      if (isBuying) {
        const tx = await buyTokensTx(connection, anchorWallet, tokenAmount)
        // send transaction
        const [latestBlockhash, signature] = await Promise.all([
          connection.getLatestBlockhash(),
          await sendTransaction(tx, connection),
        ])
        const sigResult = await connection.confirmTransaction(
          { signature, ...latestBlockhash },
          'confirmed'
        )
        if (sigResult) {
          alert('Airdrop was confirmed!')
        }
      } else {
        const tx = await sellTokensTx(connection, anchorWallet, tokenAmount)
        // send transaction
        const [latestBlockhash, signature] = await Promise.all([
          connection.getLatestBlockhash(),
          await sendTransaction(tx, connection),
        ])
        const sigResult = await connection.confirmTransaction(
          { signature, ...latestBlockhash },
          'confirmed'
        )
        if (sigResult) {
          alert('Airdrop was confirmed!')
        }
      }
      fetchData() // Refresh balances and reserves
    } catch (error) {
      console.log(error)
      alert('Transaction failed!')
    }
  }

  const handleChangeTokenAmount = (amount: string) => {
    // check if amount is a number string
    if (!amount.match(/^\d*\.?\d*$/)) return
    setTokenAmount(amount)
    if (amount == '') {
      setSolAmount('')
      return
    }
    setSolAmount(
      ((parseFloat(amount) * presalePrice) / lamportPerSol).toString()
    )
  }

  const handleChangeSolAmount = (amount: string) => {
    // check if amount is a number string
    if (!amount.match(/^\d*\.?\d*$/)) return
    setSolAmount(amount)
    if (amount == '') {
      setTokenAmount('')
      return
    }
    setTokenAmount(
      ((parseFloat(amount) / presalePrice) * lamportPerSol).toString()
    )
  }

  useEffect(() => {
    if (anchorWallet) fetchData()
  }, [anchorWallet])

  return (
    <div className='p-4'>
      <div className='flex flex-col items-center gap-2 mb-4'>
        <div className='hover:border-slate-900 rounded-lg'>
          <WalletMultiButton style={{}} />
        </div>
        {!isBuying ? (
          <div className='flex items-center justify-between'>
            <span>Token Amount</span>
            <input
              type='text'
              placeholder='Token Amount'
              value={tokenAmount}
              onChange={(e) => handleChangeTokenAmount(e.target.value)}
              className='input input-bordered w-full max-w-xs text-black'
            />
          </div>
        ) : (
          <div className='flex items-center justify-between'>
            <span>SOL Amount</span>
            <input
              type='text'
              placeholder='SOL Amount'
              value={solAmount}
              onChange={(e) => handleChangeSolAmount(e.target.value)}
              className='input input-bordered w-full max-w-xs text-black'
            />
          </div>
        )}
        <button className='btn btn-square' onClick={handleSwap}>
          ⇅
        </button>
        {isBuying ? (
          <div className='flex items-center justify-between'>
            <span>Token Amount</span>
            <input
              type='text'
              placeholder='Token Amount'
              value={tokenAmount}
              onChange={(e) => handleChangeTokenAmount(e.target.value)}
              className='input input-bordered w-full max-w-xs text-black'
            />
          </div>
        ) : (
          <div className='flex items-center justify-between'>
            <span>SOL Amount</span>
            <input
              type='text'
              placeholder='SOL Amount'
              value={solAmount}
              onChange={(e) => handleChangeSolAmount(e.target.value)}
              className='input input-bordered w-full max-w-xs text-black'
            />
          </div>
        )}
      </div>
      <button
        className={`${
          isActionButtonDisabled() ? 'bg-slate-500' : 'bg-green-900'
        } border w-full rounded-lg gree`}
        onClick={handleAction}
        disabled={isActionButtonDisabled()}
      >
        {isBuying ? 'Buy' : 'Sell'}
      </button>
      {isActionButtonDisabled() && (
        <p className='text-red-500'>Input exceeds balance or pool reserve</p>
      )}
      <div className='mt-4'>
        <p>User Token Balance: {userBalances.tokenBalance}</p>
        <p>User SOL Balance: {userBalances.solBalance}</p>
        <p>Pool Token Reserve: {poolReserves.tokenReserve}</p>
        <p>Pool SOL Reserve: {poolReserves.solReserve}</p>
      </div>
    </div>
  )
}

export default TokenTradeComponent
