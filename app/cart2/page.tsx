"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'




// interface Products{
//   _id:string,
//   name:string,
//   description:string,
//   price:number,
//   image:string,
//   size:string,
//   discountPercent:number,
//   colors:[],
//   isNew:boolean,
//   category:string,
//   slug:string
// }

const page = () =>{

 

 

  return (
    <div className='flex flex-col justify-center items-center'>

      

        {/* main work */}
        <div className='flex flex-col justify-center items-center'>

            <div className='flex gap-[12px] mt-[50px]'><Link href="/" className="hover:text-blue-500"><h1 className='flex gap-[12px]'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1></Link><Link href="./cart" className='hover:text-blue-500'><h2>Cart</h2></Link></div>


            <div className='mt-[100px] font-extrabold text-[40px]'>Your Cart</div>


            <div className='flex flex-col md:flex-row justify-center items-center'>
            
             
                {/* left side */}
                <div className='flex flex-col border-[1px] border-[#e8e7e7] rounded-lg gap-[20px]'>
                  
                
                  
                    {/* 1st col */}
                  <div className='flex h-[150px] w-[310px] md:w-[667px] md:h-[124px]  gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/GradientT-shirt.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[217px] md:w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Polo with slim Trims<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Large</h2>
                        <h3>Color:White </h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$180<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                    
                        
                      
                    </div>

                  
                  {/* 1st end */}

                  {/* 2nd col */}
                  <div className='flex w-[310px] md:w-[667px] h-[124px] gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/checkshirt.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[217px] md:w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Checkered Shirt<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Medium</h2>
                        <h3>Color: Red</h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$180<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                  </div>
                  {/* 2nd end */}

                  {/* 3rd col */}
                  <div className='flex w-[310px] md:w-[667px] h-[124px] gap-[16px] border-[1px] border-[#e8e7e7] rounded-lg'>
                    
                    {/* img */}
                    <div className='flex'><Image src={"/images/Fitjeans.svg"}alt="shirt"width={124} height={124}/></div>
                    {/* text */}
                    <div className='flex flex-col w-[217px] md:w-[527px] h-[124px]'>
                        <h1 className='flex justify-between text-[20px] font-bold'>Skinny Fit Jeans<Image src={"/images/orange frame.svg"}alt="shirt"width={24} height={24}/></h1>
                        <h2>Size: Large</h2>
                        <h3>Color: Blue</h3>
                        <h4 className='flex justify-between text-[24px] font-extrabold'>$240<Button variant={'apnaStyle'} className='w-[126px] h-[44px] border-[#e6e4e4] border-[1px] rounded-full'>- 1 +</Button></h4>
                        
                    </div>

                  </div>
                  {/* 3rd end */}






                 
                
                </div>
        
            {/* right side */}
            <div className='flex flex-col w-[310px] md:w-[505px] gap-[24px] ml-[50px]'>
                <h1 className='text-[24px] font-extrabold'>Order Summary</h1>
                <h2 className='flex flex-col w-[290px] md:w-[457px] h-[193px] gap-[20px]'>
                    <div className='flex justify-between'><h2>Subtotal</h2><h3 className='font-bold'>$565</h3></div>
                    <div className='flex justify-between'><h2>Discount (-20%)</h2><h3 className='text-[#DB4444]'>-$113</h3></div>
                    <div className='flex justify-between'><h2>Delivery Fee</h2><h3 className='font-bold'>$15</h3></div>
                    <div className='flex justify-between'><h2 className='font-bold'>Total</h2><h3 className='text-[24px] font-bold'>$467</h3></div>
                </h2>

                <div className='flex w-[290px] md:w-[457px] h-[48px] gap-[24px]'>
                    <Button className='w-[326px] h-[48px] bg-[#b7b6b6] rounded-full gap-[12px] text-[#818181] mobile:w-[200px]'><Image src={"/images/promocode.svg"}alt="shirt"width={24} height={24}/>Add promo code</Button>
                    <Button className='w-[119px] h-[48px] bg-[#000000] rounded-full text-[#FFFFFF]'>Apply</Button>
                </div>

                <Button className='w-[200px] md:w-[457px] h-[48px] bg-[#000000] rounded-full text-[#FFFFFF]'>Go to Checkout<Image className='bg-white' src={"/images/arrow-right.svg"}alt="shirt"width={24} height={24}/></Button>




                
                

            
            
            </div>

            
            
            
            </div>       
        
        
        
        
        
        
        </div>
{/* work end */}


      
    </div>
  )
}

export default page
