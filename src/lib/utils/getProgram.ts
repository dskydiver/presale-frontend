import { IDL, Presale } from '@/lib/idl/presale'
import { AnchorProvider, Program } from '@coral-xyz/anchor'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { Connection } from '@solana/web3.js'
import { programId } from '../constants'

export const getProgram = (connection: Connection, wallet: AnchorWallet) => {
  const provider = new AnchorProvider(connection, wallet, {
    commitment: 'confirmed',
  })
  const program = new Program<Presale>(IDL, programId, provider)
  return program
}
