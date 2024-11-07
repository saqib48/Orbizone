import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Teamtext from '@/Components/organisms/Teamtext'


function team() {
  return (
    <div className='overflow-hidden bg-[#161719]'>
      <Headermain />
      <Teamtext/>
      <Footer/>
    </div>
  )
}

export default team
