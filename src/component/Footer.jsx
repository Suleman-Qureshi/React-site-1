import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
<>
<section className='w-screen px-44 max-2xl:px-40 max-md:px-2 py-20 flex max-lg:flex-col max-lg:items-center max-lg:text-center justify-between bg-gradient-to-r from-blue-700 to-cyan-700 text-white'>
  <h3 className='text-6xl max-lg:text-5xl max-sm:text-4xl font-bold tracking-wide'>Start Publishing Your Apps</h3>
  <div className='flex max-lg:mt-4 space-x-2'>
    <Link className='px-6 py-4 bg-black space-x-2 flex items-center rounded-md hover:text-white hover:no-underline'><i className="fa-brands fa-apple fa-lg"></i><p className='text-lg font-normal'>App Store</p></Link>
    <Link className='px-6 py-4 bg-black space-x-2 flex items-center rounded-md hover:text-white hover:no-underline'><i className="fa-brands fa-google-play fa-lg"></i><p className='text-lg font-normal'>App Store</p></Link>
  </div>
</section>
<footer>
    <section  className='w-screen px-44 max-2xl:px-40 max-md:px-2 py-12 flex max-lg:flex-col max-lg:space-y-6 justify-between'>
        <div className='flex flex-col  space-y-6 w-2/6 max-lg:w-full'>
        <h1 className='text-xl font-medium'>About SoftLand</h1>
        <div>
        <p className='text-gray-500 leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
        <div className='flex space-x-3 mt-2'>
        <i className="fa-brands fa-twitter bg-slate-50 w-14 h-14 flex justify-center items-center rounded-full hover:bg-sky-600 cursor-pointer duration-150 hover:text-white"></i>
        <i className="fa-brands fa-facebook bg-slate-50 w-14 h-14 flex justify-center items-center rounded-full hover:bg-sky-600 cursor-pointer duration-150 hover:text-white"></i>
        <i className="fa-brands fa-instagram bg-slate-50 w-14 h-14 flex justify-center items-center rounded-full hover:bg-sky-600 cursor-pointer duration-150 hover:text-white"></i>
        <i className="fa-brands fa-linkedin bg-slate-50 w-14 h-14 flex justify-center items-center rounded-full hover:bg-sky-600 cursor-pointer duration-150 hover:text-white"></i>
        </div>
        </div>
        </div>
        <div className='flex flex-col space-y-6'>
        <h1 className='text-xl font-medium'>Navigation</h1>
        <ul className=' flex flex-col space-y-4'>
        <Link className='hover:no-underline'>Pricing</Link>
        <Link className='hover:no-underline'>Feature</Link>
        <Link className='hover:no-underline'>Blog</Link>
        <Link className='hover:no-underline'>Contact</Link>
        </ul>
        </div>
        <div className='flex flex-col space-y-6'>
        <h1 className='text-xl font-medium'>Services</h1>
        <ul className=' flex flex-col space-y-4'>
        <Link className='hover:no-underline'>Team</Link>
        <Link className='hover:no-underline'>Collabration</Link>
        <Link className='hover:no-underline'>Todos</Link>
        <Link className='hover:no-underline'>Events</Link>
        </ul>
        </div>
        <div className='flex flex-col space-y-6'>
        <h1 className='text-xl font-medium'>Downloads</h1>
        <div className='flex flex-col space-y-4'>
        <p>Get from App Store</p>
        <p>Get from Play Store</p>
        </div>
        </div>
     </section>
</footer>
</>
  )
}

export default Footer