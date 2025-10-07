import React, { useEffect, useState } from 'react'
import { API_URL } from '../../util/constant'

const Product = () => {
    const [products,setProducts]=useState([]);
    const getAllProduct=async()=>{
        try {
            const data=await fetch(`${API_URL}/products?limit=0`);
            const resp=await data.json();
            setProducts(resp.products)
            // console.log(resp);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(()=>{
        getAllProduct();
    },[])
  return (
    <div className="container">
        <div className="row">
            {
                products && 
                products.map((product)=>{
                    return (
                        <div className="col-lg-4 my-3" key={product.id}>
                            <div className="card shadow-lg">
                                <div className="card-header">
                                    <h3 className='text-center'>{product.title}</h3>
                                </div>
                                <div className="card-body">
                                    <img src={product.thumbnail} alt={product.title} />
                                    <p>{product.description}</p>
                                    <strong className='text-success'>${product.price}</strong>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product