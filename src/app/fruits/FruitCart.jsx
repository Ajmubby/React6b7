import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FruitCart({fruits}) {

    const fruitDisplay = fruits.map((fruit,index) => (
        <section key={index} className='shadow-xl mx-auto w-60 border px-4 py-7 border-t-8 rounded-md mt-5 bg-white'>
            <Link href={`/fruits/${fruit.name.split('').join('-')}`}>
            {index == 0 &&(
              <Image src={'/Pears.jpeg' } alt='pears' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 1 &&(
              <Image src={'/Grapes.jpeg' } alt='grapes' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 2 &&(
              <Image src={'/guavas.jpeg' } alt='guavas' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 3 &&(
              <Image src={'/Limes.jpeg' } alt='limes' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 4 &&(
              <Image src={'/apricots.jpeg' } alt='apricots' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 5 &&(
              <Image src={'/Cantaloupe.jpeg' } alt='cantoloupe' height={400} width={300} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 6 &&(
              <Image src={'/watermelon.jpeg' } alt='watermelon' height={400} width={300} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 7 &&(
              <Image src={'/figs.jpeg' } alt='figs' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 8 &&(
              <Image src={'/dates.jpeg' } alt='dates' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>

            )}
            {index == 9 &&(
              <Image src={'/Mangos.jpeg' } alt='Mango' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 10 &&(
              <Image src={'/Blueberries.jpeg' } alt='blueberries' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 11 &&(
              <Image src={'/orange.jpeg' } alt='orange' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 12 &&(
              <Image src={'/Coconut.jpeg' } alt='coconut' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 13 &&(
              <Image src={'/Strawberry.jpeg' } alt='Strawberry' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 14 &&(
              <Image src={'/redraspberries.jpeg' } alt='redraspberries' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 15 &&(
              <Image src={'/bananas.jpeg' } alt='bananas' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 16 &&(
              <Image src={'/Apple.jpeg' } alt='apples' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            {index == 17 &&(
              <Image src={'/pineapple.jpeg' } alt='pineapple' height={300} width={400} className='w-50 h-40 hover:opacity-[0.9]'/>
              
            )}
            <p className='border-solid w-[100px] rounded-md mt-2 px-1 font-light bg-stone-400 hover:bg-stone-200'>{fruit.store}</p>
            <h2 className='font-bold capitalize mt-1'>{fruit.name}</h2>
            <p className='text-slate-500 text-sm mt-1'>${fruit.oldPrice}<span className='text-orange-300'>  -40%</span> </p>
            <p className='font-mono text-sm mt-1'>${fruit.price}</p>
            </Link>
            
        </section>
    ))
  return (
    <div className='grid grid-cols-3'>{fruitDisplay}</div>
  )
}
