import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteCardThunk, getAllCardThunk } from "../redux/card.slice";
import toast from "react-hot-toast";

const Card = () => {
  const dispatch = useDispatch()
  const result = useSelector((state)=>state.card.card) 


useEffect(()=>{
  dispatch(getAllCardThunk())
}, [])


let token = localStorage.getItem("token")
function showpdf(p){
  if (token){
  window.open(`http://localhost:8000/cards/${p}`)
  }else{
    toast.error("please login first to download course!")
  }
}

async function handledelete(id){
  if (token){
    await dispatch(deleteCardThunk(id)).unwrap();
    dispatch(getAllCardThunk())
  }else{
    toast.error("login first")
  }
 
}

  return (
    <>
    {
      result && result.length >0 ? result.map((res,index)=>(
        <div className="card lg:w-[250px] md:w-[250px] sm:w-[250px] xs:w-[350px] p-2 shadow-md shadow-white text-white flex flex-col gap-2" key={index}>
        <div className="img w-full rounded-xl">
          <Link
            to={`/update/${res._id}`}
            className="absolute text-3xl left-2 top-2 text-black rounded-full">
            <MdEdit />
          </Link>
          <Link className="absolute text-3xl right-2 top-2 text-black" onClick={()=>handledelete(res._id)}>
            <TiDeleteOutline />
          </Link>
          <img
            src="/teacher2.png"
            alt="coding image"
            className="rounded-xl"
          />
        </div>

        <div className="title capitalize lg:text-2xl md:text-lg">
          Course:{res.course}
        </div>

        <div className="about_course truncate">{res.content}</div>

        <div className="button text-end flex justify-around items-center">
          <div className="name capitalize text-[10px]">By: {res.owner}</div>

          <button className="btn btn-error md:btn-sm capitalize lg:text-sm md:text-[10px] sm:text-[10px]" onClick={()=>showpdf(res.coursePdf)}>
            Download PDF
          </button>
        </div>
      </div>
      )) : <h1>No cards available</h1>
    }
      
    </>
  );
};

export default Card;
