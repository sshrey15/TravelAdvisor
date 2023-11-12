"use client"
import React from 'react';
import  Link  from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-2 mt-0 w-full fixed"> 
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a href="#">
           
            <span className="text-xl pl-2">TravelAdvisor</span>
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-3">
              <Link href="/results">
              <p className="inline-block py-2 px-4 text-white no-underline" >Active</p>
              </Link>
             
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;