import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
    
  return (
    <div>
    
        {/* main work */}
        <div className='flex flex-col justify-center items-center'>

            <div className='flex mt-[100px]'>
                <Link href="./" className="hover:text-blue-500"><h1 className='flex'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1></Link>
                <h2 className='flex'>Shop<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
                <h2 className='flex'>Men<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
                <h2 className='flex'>T-shirt<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
            </div>

            {/* 2nd work */}
            <div className='flex flex-col md:flex-row justify-center items-center mt-[50px]'>
                {/* left side */}

                <div className='flex flex-col md:flex-row gap-[10px]'>
                    {/* div */}
                    
                      
                    <div className='flex flex-col gap-[10px]'>
                        <Image src={"/images/onelifeshirt.svg"}alt="sign"width={152} height={168}/><Image src={"/images/onelifeshirt.svg"}alt="sign"width={152} height={168}/><Image src={"/images/onelifefaceshirt.svg"}alt="sign"width={152} height={167}/>
                    </div>


                    <div className='w-[152px] md:w-[444px]'><Image src={"/images/onelifeshirt.svg"}alt="sign"width={444} height={520}/></div>
                       
                     </div>
                     
                    
                    
               {/* right side */}
                <div className='flex flex-col justify-center items-center gap-[20px]'>
                    <h1 className='font-medium md:font-semibold text-[20px] md:text-[40px] text-center'>ONE LIFE GRAPHIC T-SHIRT</h1>
                    <h2 className='flex gap-[12px]'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/>4.5/5</h2>
                    <h3 className='flex justify-center text-center'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</h3>
                    <h4>Select Colors</h4>
                    <h5><Image src={"/images/threebuttons.svg"}alt="sign"width={143} height={37}/></h5>
                    <h6 className='border-[1px] border-[#cac7c7] w-auto'></h6>
                    <h1>Choose Size</h1>
                    <h2 className='flex flex-col md:flex-row gap-[12px]'>
                        <Button variant={'apnaStyle'} className='bg-[#e4e3e3] rounded-full'>Small</Button>
                        <Button variant={'apnaStyle'} className='bg-[#e9e7e7] rounded-full'>Medium</Button>
                        <Button variant={'apnaStyle'} className='bg-[#000000] rounded-full text-[#FFFFFF]'>Large</Button>
                        <Button variant={'apnaStyle'} className='bg-[#eaeaea] rounded-full'>x-Large</Button>
                    </h2>
                    <h3 className='flex flex-col md:flex-row gap-[12px] mt-[32px]'><Button variant={'apnaStyle'} className='w-[170px] h-[52px] bg-[#e4e3e3] rounded-full'>+  1  -</Button><Button variant={'apnaStyle'} className='bg-[#000000] rounded-full text-[#FFFFFF] w-[170px] md:w-[350px] h-[52px]'>Add to Cart</Button></h3>
                
                </div>
            
            </div>
            {/* 2nd work end */}


            {/* 3rd work */}
            <div className='flex justify-evenly'>
                <h1>Product Details</h1>
                <h2>Rating & Reviews</h2>
                <h3>FAQs</h3>
            </div>

            <div className='flex justify-center items-center border-[1px] border-[#000000] md:ml-[560px] mt-[12px]' ></div>


            <div className='flex flex-col md:flex-row justify-between items-center md:gap-[700px] mt-[50px]'>

                <div className='font-bold text-[24px]'>All Reviews</div>
                <div className='flex flex-col md:flex-row rounded-full'><Button variant={'apnaStyle'}><Image src={"/images/frame.svg"}alt="sign"width={24} height={24}/></Button>
                <Button variant={'apnaStyle'} className='w-[120px] h-[48px] rounded-full'>Latest</Button>
                <Button variant={'apnaStyle'} className='w-[166px] h-[48px] bg-[#000000] text-[#FFFFFF] rounded-full'>Write a Review</Button>
                </div>
            </div>


             {/* col div */}
            <div className='grid grid-cols-1 md:grid-cols-2 mt-[50px] gap-[12px] '>

             {/* 1st col */}
                <div className='border-[#cdcbcb] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Samantha D <Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`}</h3>
                    <h4>Posted on August 14, 2023</h4>

                </div>
                </div>
                {/* 1st col end */}

                 {/* 2nd col */}
                 <div className='border-[#d6d4d4] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Alex M. <Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`}</h3>
                    <h4>Posted on August 15, 2023</h4>

                </div>
                </div>
                {/* 2nd col end */}

                 {/* 3rd col */}
                 <div className='border-[#d1d0d0] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px] mobile:mt-[12px] mobile:gap-[7px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Ethan R.<Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`}</h3>
                    <h4>Posted on August 16, 2023</h4>

                </div>
                </div>
                {/* 3rd col end */}

                 {/* 4th col */}
                 <div className='border-[#c8c8c8] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px] mobile:mt-[12px] mobile:gap-[7px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Olivia P. <Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`}</h3>
                    <h4>Posted on August 17, 2023</h4>

                </div>
                </div>
                {/* 4th col end */}

                 {/* 5th col */}
                 <div className='border-[#d3d2d2] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px] mobile:mt-[12px] mobile:gap-[7px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Liam K. <Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`}</h3>
                    <h4>Posted on August 18, 2023</h4>

                </div>
                </div>
                {/* 5th col end */}

                 {/* 6th col */}
                 <div className='border-[#c4c2c2] border-[1px] rounded-2xl'>
                    <div className='flex flex-col mt-[32px] ml-[32px] gap-[12px] mobile:mt-[12px] mobile:gap-[7px]'>
                    <h1 className='flex justify-between'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/><Image src={"/images/three dots.svg"}alt="dots"width={24} height={24}/></h1>
                    <h2 className='flex gap-[12px]'>Ava H. <Image src={"/images/green tick.svg"}alt="sign"width={24} height={24}/></h2>
                    <h3>{`"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."`}</h3>
                    <h4>Posted on August 19, 2023</h4>

                </div>
                </div>
                {/* 6th col end */}
             </div>

             <Button variant={'apnaStyle'} className='flex justify-center items-center mt-[50px] w-[230px] h-[52px] border-[1px] border-[#d2d0d0] rounded-full'>Load More Reviews</Button>
            {/* col div end */}







            <div className='flex flex-col justify-center items-center'>

                <div className='font-extrabold text-[24px] md:text-[48px]'>YOU MIGHT ALSO LIKE</div>
         {/* col div */}
                <div className='grid grid-cols-1 md:grid-cols-4 gap-[12px]'>
                    {/* 1st col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/Contrast shirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Polo with Contrast Trims</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.0/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$212</h1><h2>$242</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-20%</Button></div>
            </div>
            </div>
            {/* 1st col end */}


            {/* 2nd col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/GradientT-shirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Gradient Graphic T-shirt</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>3.5/5</h2>
                <h3 className='font-bold text-[24px]'>$145</h3>
                
            </div>
            </div>
           {/* 2nd col end */}
            
            {/* 3rd col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/Tippingshirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Polo with Tipping Details</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>4.5/5</h2>
                <h3 className='font-bold text-[24px]'>$180</h3>
                
            </div>
            </div>
            {/* 3rd col end */}

            {/* 4th col */}
            <div className='flex flex-col gap-[20px]'> 
            {/* img div */}
            <div className='mt-[32px]'>
            <Image src={"/images/Blackshirt.svg"}alt="shirt"width={295} height={298}/>
            </div>
            {/* text div */}
            <div className='gap-[20px]'> 
                <h1 className='font-bold'>Black Striped T-shirt</h1>
                <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
                <div className='flex font-bold text-[24px] gap-[16px]'><h1>$120</h1><h2>$150</h2>
                <Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>-30%</Button></div>
            </div>
            </div>
            {/* 4th col end */}




                    
                </div>
                {/* col end */}
                

</div>
            

        
        

        
        </div>
        {/* main work end */}
  
    
        </div>
  )
}

export default Page