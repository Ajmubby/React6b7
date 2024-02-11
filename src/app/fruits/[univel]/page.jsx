import React from 'react'
import { fruits } from '../page'

export default function page({params}) {
    const fruitCard = fruits.find(fruit => fruit.name.split('').join('-') == params.univel)

  return (
    <div className='bg-zinc-200 h-[100vh] px-5'>
        
        <h2 className=' text-center border-b-2 border-stone-800 capitalize mx-20'>
            <span className='font-bold'>Name: </span>{fruitCard.name}
        </h2>
        <h2>
            <span className='font-bold font-serif'>Price: </span>${fruitCard.price}
        </h2>
        <h2>
            <span className='font-bold font-serif'>Type: </span>{fruitCard.type}
        </h2>
        <h2>
            <span className='font-serif font-bold'>Item Description: </span>{fruitCard.description}
        </h2>
    </div>
  )
}
