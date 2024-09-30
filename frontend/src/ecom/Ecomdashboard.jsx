import React from 'react'
import Navbar from '../components/pages/Navbar'
import Footer from '../components/pages/Footer'
import Product from './Product'

function Ecomdashboard() {
  return (
    <div>
     <Navbar/>
     <div className='pt-20 pb-10 pl-10 pr-10 flex flex-wrap justify-center gap-10 bg-slate-600'><Product/></div>
     <Footer/>
    </div>
  )
}

export default Ecomdashboard
