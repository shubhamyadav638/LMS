import React, { memo } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Navbar />
    <br /><br /> <br />
    <section className="py-6 bg-slate-600 dark:text-slate-900 ">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x text-white items-center">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Fake address, 9999 City</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 "
        >
          <label className="block">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Leroy Jenkins"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black"
            />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="leroy@jenkins.com"
              className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black"
            />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea
              rows={3}
              className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100 text-black"
              defaultValue={""}
            />
          </label>
          <button
            type="button"
            className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"
          >
            Submit
          </button>
        </form>
        <hr />
      </div>
      <br />
    </section>
    <hr color="green" width="100%" size={5} />
    
    <div className="map">
    <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.7684880164477!2d77.3130491385752!3d28.583663549224745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce45fa267c455%3A0x20e02d4622605a21!2sCETPA%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1720025095979!5m2!1sen!2sin"
  width='100%'
  height='300px'
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

    </div>
    <Footer />
  </>
  
  )
}

export default memo(Contact)