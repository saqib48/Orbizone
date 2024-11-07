import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import Container from '../atoms/Container'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#0C0C0C]'>
      <Container>

        <div className='mt-[50px]'>
          <hr />
          <div className='flex justify-between gap-[10%] pt-[5%]'>

            <div>
              <h3 className='text-white text-[26px] font-semibold'>Information</h3>
              <div className='grid gap-[10px] mt-[20px] text-white '>
                <Link href="/about" className='hover:text-[#6C757D]'>About Us</Link>
                <Link href="/courses" className='hover:text-[#6C757D]'>Courses</Link>
                <Link href="/ged" className='hover:text-[#6C757D]'>Privacy Policy</Link>
                <Link href="/blogs" className='hover:text-[#6C757D]'> Blogs</Link>
                <Link href="/team" className='hover:text-[#6C757D]'>Team</Link>
                <Link href="/contact" className='hover:text-[#6C757D]'>Contact</Link>
              </div>
            </div>
            <div>
              <h3 className='text-white text-[26px] font-semibold'>Contact Us</h3>
              <div className='text-white grid gap-[20px]  mt-[20px]'>
                <p>Address:Your address goes here.</p>
                <p>Phone: <AnchorTag> 01234567890</AnchorTag></p>
                <p>Email: demo@example.com</p>
              </div>
            </div>


            <div>
              <h3 className='text-white text-[26px] font-semibold'>Join Our Newsletter Now</h3>
              <div className='text-white grid gap-[10px] mt-[20px]'>
                <p>Exceptional quality. Ethical factories. Sign up to enjoy free <br /> U.S. shipping and returns on your first order.</p>
                <Input variant='five2' type='text' placeholder='Enter you email address here.....' />
                <Button variant="footer-button">Submit</Button>

              </div>
            </div>


          </div>
          <div className='mt-[50px]'>
            <hr />
            <div className='text-white flex justify-center py-[30px]'>
              <p>© 2024 Edify College of IT. All Rights Reserved. </p>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Footer