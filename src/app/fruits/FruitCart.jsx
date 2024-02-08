import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FruitCart({fruits}) {

    const fruitDisplay = fruits.map((fruit,index) => (
        <section key={index} className='hover:shadow-md mx-auto  w-60 border px-4 py-7 border-r-8 rounded-md mt-5 bg-sky-300 '>
            <Link href={`/fruits/${fruit.name.split('').join('-')}`}>
            <Image className='border-box' src={`https://robohash.org/Mubby${fruit.name}`} alt={fruit.name} width={120} height={120}/>
            <h2 className='font-bold capitalize'>{fruit.name}</h2>
            <p className=' font-serif'>${fruit.price}</p>
            </Link>
        </section>
    ))
  return (
    <div className='grid grid-cols-3'>{fruitDisplay}</div>
  )
}
