import { motion } from 'motion/react';

export default function Site4() { 
  return (
    <div className='w-full h-[5000px] bg-[#11011c] flex flex-col items-center justify-start text-white overflow-hidden p-10 font-sans'>
      {/* MOCK COMPONENT - Replaces the omitted Site4.tsx */}
      <h1 className='text-6xl font-bold mt-20 mb-10 text-purple-400'>X Trader</h1>
      <p className='text-xl text-purple-200 mb-20'>Design - Website</p>
      
      <div className='w-full max-w-4xl bg-purple-900/20 p-10 rounded-3xl border border-purple-500/30 mb-20'>
        <h2 className='text-4xl font-bold mb-6'>O Método X-Trader</h2>
        <p className='text-lg'>Não ensina atalhos. Ensina o caminho.</p>
      </div>
    </div>
  ) 
}