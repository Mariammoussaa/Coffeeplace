import React from 'react'
import style from './Menu.module.css'

export const Menu = () => {
    const products = [
        {
            id: 1,
            title: "Cappuccino",
            description: "Usage of the Internet is becoming more common due to rapid advance",
            price: '$49'
        },
        {
            id: 2,
            title: "Americano",
            description: "Usage of the Internet is becoming more common due to rapid advance.",
            price: '$55'
        },
        {
            id: 3,
            title:"Espresso" ,
            description:"Usage of the Internet is becoming more common due to rapid advance.",
            price: '$40'
        },
        {
            id: 4,
            title:"Macchiato" ,
            description:"Usage of the Internet is becoming more common due to rapid advance." ,
            price: '$50'
        },
        {
            id: 5,
            title: "Mocha",
            description:"Usage of the Internet is becoming more common due to rapid advance." ,
            price: '$60'
        },
        {
            id: 6,
            title:"Coffee Latte" ,
            description:"Usage of the Internet is becoming more common due to rapid advance." ,
            price:'$60'
        }

    ]
  return (
    <div className={style.parent}>
        <div className={style.container}> 
            <div className={style.txt}>    
                <h1> What kind of Coffee we serve for you </h1>
                <p > Who are in extremely love with eco friendly system. </p>
            </div>
            {products?.map((e)=>(
            <div className={style.card} key={e.id}>
                <div className={style.details}>
                    <h3> {e.title }</h3> 
                    <h3> {e.price}</h3>
                </div>
                <p> {e.description}</p>
            </div>
            ))}
        </div>
    </div>
  )
}
