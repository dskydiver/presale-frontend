'use client'

import TokenTradeComponent from '@/components/TokenTrade'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='border hover:border-slate-900 rounded'>
        <TokenTradeComponent />
      </div>
    </main>
  )
}
