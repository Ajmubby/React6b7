import React from 'react'
import { fruits } from '../page'

export default function page({params}) {
    const fruitCard = fruits.find(fruit => fruit.name.split('').join('-') == params.univel)

  return (
    <div>
        <h2 className=' text-center border-b-2 border-stone-800 capitalize'>
            <span className='font-bold'>Name: </span>{fruitCard.name}
        </h2>
        <h2>
            <span className='font-bold'>Price: </span>${fruitCard.price}
        </h2>
        <h2>
            <span className='font-bold'>Type: </span>{fruitCard.type}
        </h2>
        <h2>
            <span className='font-bold'>Des: </span>{fruitCard.description}
        </h2>
    </div>
  )
}
