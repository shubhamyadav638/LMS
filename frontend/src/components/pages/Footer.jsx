import React, { memo } from 'react'

const Footer = () => {
  return (
  
    <footer className="p-6 bg-slate-950 text-white dark:text-gray-800 mt-4">
    <h1 className="text-white md:text-4xl capitalize text-center pb-4">
      these are our companies{"{"}" "{"}"}
    </h1>
    <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-white">Getting started</h2>
        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
          <a rel="noopener noreferrer" href="#">
            Installation
          </a>
          <a rel="noopener noreferrer" href="#">
            Release Notes
          </a>
          <a rel="noopener noreferrer" href="#">
            Upgrade Guide
          </a>
          <a rel="noopener noreferrer" href="#">
            Using with Preprocessors
          </a>
          <a rel="noopener noreferrer" href="#">
            Optimizing for Production
          </a>
          <a rel="noopener noreferrer" href="#">
            Browser Support
          </a>
          <a rel="noopener noreferrer" href="#">
            IntelliSense
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-white">Core Concepts</h2>
        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
          <a rel="noopener noreferrer" href="#">
            Utility-First
          </a>
          <a rel="noopener noreferrer" href="#">
            Responsive Design
          </a>
          <a rel="noopener noreferrer" href="#">
            Hover, Focus, &amp; Other States
          </a>
          <a rel="noopener noreferrer" href="#">
            Dark Mode
          </a>
          <a rel="noopener noreferrer" href="#">
            Adding Base Styles
          </a>
          <a rel="noopener noreferrer" href="#">
            Extracting Components
          </a>
          <a rel="noopener noreferrer" href="#">
            Adding New Utilities
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-white">Customization</h2>
        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
          <a rel="noopener noreferrer" href="#">
            Configuration
          </a>
          <a rel="noopener noreferrer" href="#">
            Theme Configuration
          </a>
          <a rel="noopener noreferrer" href="#">
            Breakpoints
          </a>
          <a rel="noopener noreferrer" href="#">
            Customizing Colors
          </a>
          <a rel="noopener noreferrer" href="#">
            Customizing Spacing
          </a>
          <a rel="noopener noreferrer" href="#">
            Configuring Variants
          </a>
          <a rel="noopener noreferrer" href="#">
            Plugins
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="font-medium text-white">Community</h2>
        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
          <a rel="noopener noreferrer" href="#">
            GitHub
          </a>
          <a rel="noopener noreferrer" href="#">
            Discord
          </a>
          <a rel="noopener noreferrer" href="#">
            Twitter
          </a>
          <a rel="noopener noreferrer" href="#">
            YouTube
          </a>
        </div>
      </div>
    </div>
    <div className="flex items-center flex-col text-yellow-300 justify-center px-6 pt-12 text-sm">
      <div className="flex gap-8 md:text-xl">
        <a
          href=""
          className="hover:text-red-700 hover:rotate-180 transition-all duration-75 ease-linear"
        >
          <i className="fa-brands fa-facebook" />
        </a>
        <a
          href=""
          className="hover:text-red-700 hover:rotate-180 transition-all duration-75 ease-linear"
        >
          <i className="fa-brands fa-whatsapp" />
        </a>
        <a
          href=""
          className="hover:text-red-700 hover:rotate-180 transition-all duration-75 ease-linear"
        >
          <i className="fa-brands fa-google" />
        </a>
        <a
          href=""
          className="hover:text-red-700 hover:rotate-180 transition-all duration-75 ease-linear"
        >
          <i className="fa-brands fa-twitter" />
        </a>
        <a
          href=""
          className="hover:text-red-700 hover:rotate-180 transition-all duration-75 ease-linear"
        >
          <i className="fa-brands fa-instagram" />
        </a>
      </div>
      <div>
        <span className="dark:text-gray-600">
          © Copyright 1986. All Rights Reserved.
        </span>
      </div>
    </div>
              </footer>
  )
}

export default memo(Footer) 