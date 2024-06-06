import {
  TOKEN_PROGRAM_ID,
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddressSync,
} from '@solana/spl-token'
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
} from '@solana/web3.js'
import { counter, feePool, lamportPerSol, owner, programId } from '../constants'
import { getProgram } from './getProgram'
import { AnchorWallet } from '@solana/wallet-adapter-react'
import { BN } from '@coral-xyz/anchor'

export const getUserBalances = async (
  connection: Connection,
  user?: PublicKey
) => {
  if (!user)
    return {
      solBalance: 0,
      tokenBalance: 0,
    }
  let counterBuffer = Buffer.alloc(8)
  counterBuffer.writeBigUInt64LE(BigInt(counter), 0)

  const [mint] = PublicKey.findProgramAddressSync(
    [Buffer.from('mint'), new PublicKey(owner).toBuffer(), counterBuffer],
    new PublicKey(programId)
  )

  const solBalance = await connection.getBalance(user)
  const ata = getAssociatedTokenAddressSync(new PublicKey(mint), user, false)
  const info = await connection.getAccountInfo(ata)
  let tokenBalance = '0'
  if (info != null) {
    tokenBalance = (await connection.getTokenAccountBalance(ata)).value.amount
  }
  return {
    solBalance: solBalance / lamportPerSol,
    tokenBalance: parseFloat(tokenBalance) / lamportPerSol,
  }
} // Mock user balance
export const getPoolReserves = async (
  connection: Connection,
  wallet?: AnchorWallet
) => {
  if (!wallet) {
    return {
      solReserve: 0,
      tokenReserve: 0,
    }
  }
  // convert u64 0 to LE Butter
  let counterBuffer = Buffer.alloc(8)
  counterBuffer.writeBigUInt64LE(BigInt(counter), 0)

  const [mint] = PublicKey.findProgramAddressSync(
    [Buffer.from('mint'), new PublicKey(owner).toBuffer(), counterBuffer],
    new PublicKey(programId)
  )

  const [launchpad] = PublicKey.findProgramAddressSync(
    [Buffer.from('launchpad'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTreasury] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale_treasury'), launchpad.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTokenAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const tokenReserve = (
    await connection.getTokenAccountBalance(presaleTokenAccount)
  ).value.amount

  const solReserve = await connection.getBalance(presaleTreasury)

  return {
    solReserve: solReserve / lamportPerSol,
    tokenReserve: parseFloat(tokenReserve) / lamportPerSol,
  }
} // Mock pool reserve
export const buyTokensTx = async (
  connection: Connection,
  wallet: AnchorWallet,
  tokenAmount: string
) => {
  /* Buy token logic */
  const program = getProgram(connection, wallet)

  // convert u64 0 to LE Butter
  let counterBuffer = Buffer.alloc(8)
  counterBuffer.writeBigUInt64LE(BigInt(counter), 0)

  const [mint] = PublicKey.findProgramAddressSync(
    [Buffer.from('mint'), new PublicKey(owner).toBuffer(), counterBuffer],
    new PublicKey(programId)
  )

  const [launcher] = PublicKey.findProgramAddressSync(
    [Buffer.from('launcher')],
    program.programId
  )

  const [launchpad] = PublicKey.findProgramAddressSync(
    [Buffer.from('launchpad'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTreasury] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale_treasury'), launchpad.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTokenAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const ata = getAssociatedTokenAddressSync(
    new PublicKey(mint),
    wallet.publicKey,
    false
  )
  const tx = new Transaction()

  if (!(await connection.getAccountInfo(ata))) {
    const ix = createAssociatedTokenAccountInstruction(
      wallet.publicKey,
      ata,
      wallet.publicKey,
      mint
    )
    tx.add(ix)
  }

  const ix = await program.methods
    .purchase({
      counter: new BN(counter),
      amount: new BN(tokenAmount).mul(new BN(lamportPerSol)),
    })
    .accounts({
      signer: wallet.publicKey,
      launchpad,
      launcher,
      protoolFeePool: feePool,
      mint,
      presaleTreasury,
      presaleTokenAccount,
      userTokenAccount: ata,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .instruction()

  tx.add(ix)
  return tx
}
export const sellTokensTx = async (
  connection: Connection,
  wallet: AnchorWallet,
  tokenAmount: string
) => {
  /* Sell token logic */
  const program = getProgram(connection, wallet)

  // convert u64 0 to LE Butter
  let counterBuffer = Buffer.alloc(8)
  counterBuffer.writeBigUInt64LE(BigInt(counter), 0)

  const [mint] = PublicKey.findProgramAddressSync(
    [Buffer.from('mint'), new PublicKey(owner).toBuffer(), counterBuffer],
    new PublicKey(programId)
  )

  const [launcher] = PublicKey.findProgramAddressSync(
    [Buffer.from('launcher')],
    program.programId
  )

  const [launchpad] = PublicKey.findProgramAddressSync(
    [Buffer.from('launchpad'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTreasury] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale_treasury'), launchpad.toBuffer()],
    new PublicKey(programId)
  )

  const [presaleTokenAccount] = PublicKey.findProgramAddressSync(
    [Buffer.from('presale'), mint.toBuffer()],
    new PublicKey(programId)
  )

  const ata = getAssociatedTokenAddressSync(
    new PublicKey(mint),
    wallet.publicKey,
    false
  )
  const tx = new Transaction()

  if (await connection.getAccountInfo(ata)) {
    const ix = createAssociatedTokenAccountInstruction(
      wallet.publicKey,
      ata,
      wallet.publicKey,
      mint
    )
    tx.add(ix)
  }

  const ix = await program.methods
    .sell({
      counter: new BN(counter),
      amount: new BN(tokenAmount) * lamportPerSol,
    })
    .accounts({
      signer: wallet.publicKey,
      launchpad,
      launcher,
      protoolFeePool: feePool,
      mint,
      presaleTreasury,
      presaleTokenAccount,
      userTokenAccount: ata,
      systemProgram: SystemProgram.programId,
      tokenProgram: TOKEN_PROGRAM_ID,
    })
    .instruction()

  tx.add(ix)
  return tx
}
