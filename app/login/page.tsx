import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'


const page = () => {
  
  return (
    
  <div className='flex flex-col'>

<div className='flex  justify-center items-center mt-[100px]'>
                <Link href="/" className="hover:text-blue-500"><h1 className='flex text-[24px] font-medium'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1></Link>
                <h2 className='flex text-[24px] font-medium'>login</h2>
            </div>
       
            <div className='flex flex-col justify-center items-center md:flex-row gap-[40px] mt-[100px]'>
                {/* img div */}
                <div className="bg-[#CBE4E8]">
                  <Image className='w-auto md:w-[805px]' src={"/images/beatsnoop.svg"}alt="snoop"width={805}height={781}/>

                </div>
                {/* text div */}
                <div className='flex flex-col gap-[48px]'>
                  <h1 className='text-[36px] font-medium'>Log in to Exclusive</h1>
                  <h2>Enter your details below</h2>
                  
                  <h4 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Email Or PhoneNumber"></input></h4>
                  <h5 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Password"></input></h5>

                  <h6 className='flex gap-[30px]'>
                  <Button variant={"apnaStyle"} className='text-[#FFFFFF] bg-[#DB4444] w-[143px] h-[46px]'>Login</Button>

                  <Button variant={"apnaStyle"} className='text-[#DB4444]'>Forget Password?</Button></h6>
                  

                </div>
            </div>
        
        
             
        </div>
      
   
  )
}

export default page
