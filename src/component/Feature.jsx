import React from 'react'
import img2 from '../recources/undraw_svg_2.svg'
import img3 from '../recources/undraw_svg_3.svg'
import img4 from '../recources/undraw_svg_4.svg'
import { Link } from 'react-router-dom'

function Feature() {
  return (
<>
<header className='w-screen h-screen px-44 max-2xl:px-40 max-md:px-2 py-28 bg-blend-lighten flex justify-center text-white'>
  <div className='flex flex-col space-y-8 text-center mt-14'>
    <h1 className='text-7xl max-lg:text-5xl font-bold'>SoftLand Feature</h1>
    <p className='text-lg max-lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</header>
<section className='w-screen px-44 py-20 flex justify-between items-center space-x-12 max-lg:flex-col  max-2xl:px-40 max-md:px-2 max-lg:space-x-0 max-lg:space-y-12'>
  <div className='flex flex-col space-y-8 w-2/5 max-lg:w-full p-6'>
  <h2 className='text-4xl tracking-wide font-medium'>Seamlessly<br/> Communicate</h2>
  <p className='text-gray-400 font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
  <Link to={'#'} className='hover:text-black hover:no-underline'>Read More</Link>
  </div>
  <div className='w-2/5 max-lg:w-full'>
  <img src={img2} alt="" />
  </div>
</section>
<section className='w-screen px-44 py-20 flex justify-between items-center space-x-12  max-lg:flex-col  max-2xl:px-40 max-md:px-2 max-lg:space-x-0 max-lg:space-y-12'>
  <div className='w-2/5 max-lg:w-full'>
    <img src={img3} alt="" />
  </div>
  <div className='flex flex-col space-y-8 w-2/5 max-lg:w-full p-6'>
  <h2 className='text-4xl tracking-wide font-medium'>Gather Feedback</h2>
  <p className='text-gray-400 font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
  <Link to='#' className='hover:text-black hover:no-underline'>Read More</Link>
  </div>
</section>
<section className='w-screen px-44 py-20 flex justify-between items-center space-x-12  max-lg:flex-col  max-2xl:px-40 max-md:px-2 max-lg:space-x-0 max-lg:space-y-12'>
  <div className='flex flex-col space-y-8 w-2/5 max-lg:w-full p-6'>
  <h2 className='text-4xl tracking-wide font-medium'>Present Designs<br/> Inspiration</h2>
  <p className='text-gray-400 font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
  <Link to={'#'} className='hover:text-black hover:no-underline'>Read More</Link>
  </div>
  <div className='w-2/5 max-lg:w-full'>
  <img src={img3} alt="" />
  </div>
</section>
<section className='w-screen px-44 py-20 flex justify-between items-center space-x-12  max-lg:flex-col  max-2xl:px-40 max-md:px-2 max-lg:space-x-0 max-lg:space-y-12'>
  <div className='w-2/5 max-lg:w-full'>
    <img src={img4} alt="" />
  </div>
  <div className='flex flex-col space-y-8 w-2/5 max-lg:w-full p-6'>
  <h2 className='text-4xl tracking-wide font-medium'>Powefull App Design</h2>
  <p className='text-gray-400 font-normal leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
  <Link to='#' className='hover:text-black hover:no-underline'>Read More</Link>
  </div>
</section>
</>)}
export default Feature