import Link from 'next/link'
import React from 'react'
import Home from "@/components/HeroSection"

function Footer() {
  return (
    <div className='h-full pb-20 bg-black '>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-10 gap-20'>
        <div>
          <h2 className='text-2xl mb-4 font-semibold'>About Us</h2>
          <p className='text-gray-300 '>Music School is a premier institution dedicated to learning the art and science of music. We nature talent from the ground up, fostering a vibrant community of musicians.</p>
        </div>
        <div>
          <h2 className='text-2xl mb-4 font-semibold'>Quick Links</h2>
          <ul>
            <Link href="/" className='text-gray-300'>
              <li>Home</li>
            </Link>
            <a href="#" className='text-gray-300'>
              <li>About</li>
            </a>
            <a href="#" className='text-gray-300'>
              <li>Cources</li>
            </a>
            <a href="#" className='text-gray-300'>
              <li>Contact</li>
            </a>

          </ul>
        </div>
        <div>
          <h2 className='text-2xl mb-4 font-semibold'>Follow Us</h2>
          <ul>
            <a href="#" className='text-gray-300'>
              <li>Facebook</li>
            </a>
            <a href="#" className='text-gray-300'>
              <li>Twitter</li>
            </a>
            <a href="#" className='text-gray-300'>
              <li>Instagram</li>
            </a>
          </ul>
        </div>
        <div>
          <h2 className='text-2xl mb-4 font-semibold'>Contact Us</h2>
          <p>New Delhi ,India Delhi 100001</p>
          <p>Email:info@musicschool.com</p>
        </div>
      </div>
      <p className='text-gray-300 text-center'>@ 2025 Music School. All Rights reserved</p>
    </div>
  )
}

export default Footer
