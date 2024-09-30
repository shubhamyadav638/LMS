import React, { useEffect } from 'react'
import {useDispatch,useSelector  } from "react-redux";
import { addToCart, productThunk } from '../components/redux/product.slice';

function Product() {
    
const dispatch = useDispatch()
const result = useSelector(state=>state.product.products)




useEffect(()=>{
  dispatch(productThunk())
},[])

function handleAddcart(e){
dispatch(addToCart(e))
}


  return (
    <>
    {
    result && result.length >0 ? result.map((res, index)=>(
      <div className="card bg-slate-600 w-[320px] shadow-xl  shadow-white" key={index}>
      <figure>
        <img
          src={`${res.thumbnail}`}
          alt="Shoes" 
          style={{height: "150px" }}
          />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">
          {res.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p style={{height: "100px",overflow:"hidden"}}>{res.description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Rating:{res.rating}</div>
          <div className="badge badge-outline">Price:${res.price}</div>
        </div>
    
        <div className='btn btn-info mt-4'> <button onClick={()=>handleAddcart(res)}>add to cart</button></div>
      </div>
    </div>
    )) : <div>No product available</div>
  }
  </>
  )
}

export default Product
