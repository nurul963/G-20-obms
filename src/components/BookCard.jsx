import React from 'react'
import { bookImg } from '../util/constant.js'

const BookCard = ({book}) => { 
    return (
        <div className="card shadow-lg" style={{
            width: "18rem",
            marginLeft:"10px",
            marginTop:"10px"

            }}>
            <img className="card-img-top" src={bookImg} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <strong className='text-success'>$ {book.price}</strong>      
            </div>
        </div>
    )
}

export default BookCard