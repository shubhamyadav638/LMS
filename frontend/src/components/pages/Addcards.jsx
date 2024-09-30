import Navbar from "./Navbar";
import Profile from "./Profile";
import Footer from "./Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { createCardThunk } from "../redux/card.slice";
import { useNavigate } from "react-router-dom";


const Addcards = () => {
  
let  navigate = useNavigate()

  const dispatch = useDispatch();
  
  const [owner, setOwner] = useState("")
  const [course, setCourse] = useState("")
  const [content, setContent] = useState("")
  const [pdf, setPdf] = useState("")

async function handlecardsubmit(e){
  e.preventDefault()

  if (owner && course && content && pdf ){
    const formData = new FormData()
    formData.append('owner', owner)
    formData.append('course', course)
    formData.append('content', content)
    formData.append('pdf', pdf)


    try {
await dispatch(createCardThunk(formData)).unwrap()
navigate("/dashboard")
    }catch (e){
      console.log(e,"nsknkn")
    }


  } else{
    toast.error('all fields are required')
  }
  // console.log(owner, content, course,pdf)

}

function handlepdf(e){
let file = e.target.files[0];
let val = e.target

  if(file.type !== "application/pdf"){
    toast.error('Only pdf files are allowed')
    val.value = ""
  } else{
    setPdf(file)
  }}


  return (
    <div className="bg-slate-950 w-full">
      <Navbar />
      <br />
      <br /> <br />
      <div className=" p-6 flex lg:flex-row lg:justify-between lg:gap-4 md:flex-row md:justify-between md:gap-2 sm:flex-col sm:justify-center  sm:gap-4 xs:flex-col xs:gap-4 w-full bg-green-300">
        <div className="box1">
          <Profile />
        </div>

        <form
        onSubmit={handlecardsubmit}
          encType="multipart/form-data"
          noValidate=""
          action=""
          className="container grid grid-cols-1 mx-auto space-y-1 ">
          <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 text-black capitalize">
              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="lastname"
                  className="text-sm">
                  your name
                </label>
                <input
                onChange={(e)=>setOwner(e.target.value)}
                  id="lastname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label
                  htmlFor="firstname"
                  className="text-sm">
                  course name
                </label>
                <input
                onChange={(e)=>setCourse(e.target.value)}
                  id="firstname"
                  type="text"
                  placeholder="course name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-6">
                <label
                  htmlFor="lastname"
                  className="text-sm">
                  about course
                </label>
                <input
                onChange={(e)=>setContent(e.target.value)}
                  id="lastname"
                  type="text"
                  placeholder="content here..."
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  required
                />
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  htmlFor="zip"
                  className="text-sm capitalize font-bold">
                  upload course pdf
                </label>
                <input
                onChange={(e)=>handlepdf(e)}
                  id="zip"
                  type="file"
                  name="pdf"
                  required
                  accept=".pdf"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-900 focus:dark:ring-violet-600 border border-red-600"
                />
              </div>

              <div className="col-span-full sm:col-span-6 ">
                <button className="btn btn-info w-full md:text-xl capitalize tracking-widest font-serif">
                  submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Addcards;
