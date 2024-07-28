import React from 'react'
import parents from '../../Assets/Home/parents.png'

const SignParent = () => {
  return (
    <div className='font-body mt-10 grid grid-cols-5 auto-rows-auto grid-flow-row-dense mx-8 md:mx-6 lg:mx-16 mb-20 md:gap-x-4 lg:gap-x-8 gap-y-6 md:gap-y-0'>
    <div className='flex flex-col justify-center col-span-5 lg:col-span-3 row-span-1 order-first lg:order-none'>
        <p className='uppercase font-bold text-blue-primary'>Vous êtes parent ?</p>
        <p className='capitalize font-bold text-2xl md:text-5xl mt-2'>Vous êtes parent et vous cherchez une crèche pour votre enfant?</p>
    </div>
    <div className='flex justify-center content-center aspect-square row-span-1 lg:row-span-2 col-span-5 md:col-span-2 '>
        <img src={parents} alt="parents" className=''/>
    </div>
    <div className='flex flex-col md:items-start col-span-5 md:col-span-3  row-span-1 items-center justify-center'>    
        <p className='text-opacity-75 text-sm md:text-base capitalize'>Khatwa vous permet de consulter les differentes crèches partenaires afin de trouver celle qui vous correspond le mieux vous et votre enfant.  </p>
        <button className='uppercase bg-blue-primary font-semibold text-white text-xs md:text-sm lg:text-base w-72 h-12 md:w-96 md:h-16 rounded-full mt-6 md:mt-12 hover:bg-opacity-80 active:bg-orange-1 duration-150'>s’inscrire en tant que parent</button>
    </div>
</div>
  )
}

export default SignParent