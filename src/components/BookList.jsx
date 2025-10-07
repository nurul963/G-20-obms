import React from 'react'
import { books } from '../util/constant.js'
import BookCard from './BookCard.jsx';

const BookList = () => {
    const booklist = books;
    return (
        <div className="container">
            <div className="row">
                {/* <div className="col-lg-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Author</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booklist.map((book) => {
                                    return (
                                        <tr key={book.id}>
                                            <th scope="row">{book.id}</th>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>${book.price}</td>
                                            <td>
                                                <button className='btn btn-primary'>View</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div> */}
                {
                    booklist.map((book)=>{
                        return (
                            <BookCard key={book.id} book={book}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookList