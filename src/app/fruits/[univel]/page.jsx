import React from 'react'
import { fruits } from '../page'
import Image from 'next/image'
import Link from 'next/link'

export default function page({params}) {
    const fruitCard = fruits.find(fruit => fruit.name.split(' ').join('-') == params.univel)
    // const relatedFruits = fruits.filter(fruit => (fruit.type == fruitCard.type) && (fruits.name !== fruitCard.name)).sort((a,b) => b.price - a.price).slice(0,3)

    const relatedFruits = fruits.sort((a,b) => b.price - a.price).slice(0,3)


    const relatedCategory = relatedFruits.map((fruit,index) => (
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
    <div className='bg-zinc-200 px-5 pt-3'>
        
        <h2 className=' text-center border-b-2 border-stone-800 capitalize mx-20'>
            <span className='font-bold'>Name: </span>{fruitCard.name}
        </h2>
        <h2 className='mt-3'>
            {fruitCard.visual}
        </h2>
        <h2 className='mt-3'>
            <span className='font-bold font-serif'>Price: </span>${fruitCard.price}
        </h2>
        <h2>
            <span className='font-bold font-serif'>Type: </span>{fruitCard.type}
        </h2>
        <h2>
            <span className='font-serif font-bold'>Item Description: </span>{fruitCard.description}
        </h2>

        <div className='grid grid-cols-3'>
        {relatedCategory}
        </div>
    </div>
  )
}
