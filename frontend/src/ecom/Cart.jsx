import React from "react";
import Navbar from "../components/pages/Navbar";
import Footer from "../components/pages/Footer";
import { useSelector, useDispatch } from "react-redux";
import { removeitem } from "../components/redux/product.slice";

function Cart() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.product.cart);

  function handleremove(id) {
    dispatch(removeitem(id));
  }

 
  const totalPrice = result.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <Navbar />
      <div className="pt-20 pb-10 pl-10 pr-10 flex flex-wrap justify-center gap-10 bg-slate-600">
        <>
          {result && result.length > 0 ? (
            result.map((res, index) => (
              <div
                className="card bg-slate-600 w-[320px] shadow-xl  shadow-white"
                key={index}
              >
                <figure>
                  <img
                    src={`${res.thumbnail}`}
                    alt="Product"
                    style={{ height: "150px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-sm">
                    {res.title}
                    <div className="badge badge-secondary ml-2">NEW</div>
                  </h2>
                  <p style={{ height: "100px", overflow: "hidden" }}>
                    {res.description}
                  </p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      Rating: {res.rating}
                    </div>
                    <div className="badge badge-outline">
                      Price: ${res.price}
                    </div>
                  </div>

                  <button
                    className="btn btn-info mt-4"
                    onClick={() => handleremove(res.id)}
                  >
                    Remove item
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-xl">No product available</div>
          )}
        </>
      </div>

      
      {result.length > 0 && (
        <div className="bg-slate-600 text-white text-2xl text-center py-4">
          Total Price: ${totalPrice}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Cart;
