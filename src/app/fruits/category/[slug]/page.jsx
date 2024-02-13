import React from 'react'
import { fruits } from '../../page'
import Link from 'next/link'
import Image from 'next/image'

export default function Category({params}) {
    const fruitCard = fruits.filter(fruit => fruit.type.toLowerCase().split(' ').join('-') == params.slug)

    const fruitGrp = fruitCard.map((fruit,index) => (
        <section key={index} className='shadow-xl mx-auto w-60 border px-4 py-7 border-t-8 rounded-md mt-5 bg-white'>
            <Link href={`/fruits/${fruit.name.split(' ').join('-')}`}>
            
            <Image src={`/${fruit.name}.jpeg`} alt={fruit.name} height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
            <p className='border-solid w-[100px] rounded-md mt-2 px-1 font-light bg-stone-400 hover:bg-stone-200'>{fruit.store}</p>
            </Link>
            <h2 className='font-bold capitalize mt-1'>{fruit.name}</h2>
            <p className='text-slate-500 text-sm mt-1 line-through'>${fruit.oldPrice}</p>
            <p className='font-mono text-sm mt-1'>${fruit.price}</p>
            
        </section>
     ))

  return (
    <div className='grid grid-cols-3'>
        {fruitGrp}
    </div>
  )
}
