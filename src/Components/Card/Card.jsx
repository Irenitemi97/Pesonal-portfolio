import React from 'react'
import CardList from '../CardList/CardList'
import './Card.css'
import { cardlist } from '../../data'

const Card = () => {
  return (
    <>
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Project</h1>
        <p className="pl-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi odio hic itaque fuga, voluptas impedit voluptatibus, modi nihil officia in saepe accusantium ratione ipsa repellat sequi earum. Sed, eveniet velit?</p>
      </div>
      <div className="pl-list">
        {cardlist.map((item) => (<CardList key={item.id} img={item.img} link={item.link}/>))}
        
      </div>
      
    </div>
    </>
  )
}

export default Card