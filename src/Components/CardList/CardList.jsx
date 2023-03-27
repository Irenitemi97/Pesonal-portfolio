import React from 'react'
// import { Link } from 'react-router-dom'
import './CardList.css'

const CardList = ({ img, link }) => {
    return (
        <>
        <div className="p">
            <div className="p-browser">
                <div className="p-circle red"></div>
                <div className="p-circle yellow"></div>
                <div className="p-circle green"></div>
                
                
            </div>
            <a href={link}>
                <img src={img} alt="" className='p-img' />
            </a>
            
            
        </div>

       
        </>
        
    )
}

export default CardList