"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex justify-center items-center mt-[100px]'>
                <Link href="/" className="hover:text-blue-500"><h1 className='flex text-[24px] font-medium'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={20} height={16}/></h1></Link>
                <h2 className='flex text-[24px] font-medium'>sign-up</h2>
            </div>
        

            <div className='flex flex-col justify-evenly items-center md:flex-row mt-[100px] gap-[40px]'>

                {/* img div */}
                <div className="w-auto md:w-[805px] bg-[#CBE4E8]"><Image src={"/images/beatsnoop.svg"}alt="snoop"width={805}height={781}/>

                </div>
                {/* text div */}
                <div className='flex flex-col gap-[48px] '>
                  <h1 className='text-[36px] font-medium'>Create An Account</h1>
                  <h2>Enter your details below</h2>
                  <h3 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Name"></input></h3>
                  <h4 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Email Or PhoneNumber"></input></h4>
                  <h5 className='border-b-[1px] border-b-[#000000]'><input type="text" placeholder="Password"></input></h5>
                  <Button variant={'apnaStyle'} className="bg-[#DB4444] h-[56px] text-[#FFFFFF]">Create Account</Button>
                  <Button variant={'apnaStyle'} className='border-[1px] border-[#000000] h-[56px]'><Image src={"/images/Icon-Google.svg"}alt="google"width={24}height={24}/>Sign Up with Google</Button>
                  <h6 className='text-center'>Already have account?<Link href="./login"><Button variant={'apnaStyle'} className='underline'>Login</Button></Link></h6>

                </div>
            </div>
        
        
        
        
        
        
        
        
        
        
        
        
        </div>
      
    
    
    
    
    
    

    
  )
}

export default page
