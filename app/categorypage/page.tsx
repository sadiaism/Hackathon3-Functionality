"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect,useState } from 'react'
import {client} from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'


interface Products{
  _id:string,
  name:string,
  description:string,
  price:number,
  image:string,
  size:string,
  discountPercent:number,
  colors:[],
  isNew:boolean,
  category:string
}

const Page = () => {

  const [Data,setData] = useState<Products[]>([]);

  useEffect(()=>{
    const fetchData= async ()=>{
    const products = await client.fetch(`*[_type == 'products'][0..8]`);
    setData(products)
    };
    fetchData();

  },[])
  return (
    <div>

        <div className='flex flex-col justify-center items-center mt-[100px] '>

{/* main work */}
        <div className='flex gap-[12px]'>
        <Link href="./" className='hover:text-blue-500'><h1 className='flex'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1></Link>
        <Link href="./categorypage" className='hover:text-blue-500'><h2>Casual</h2></Link>
        </div>

{/* 2nd */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-[12px]'>
            {/* left side */}
            <div className='flex mt-[100px] border-[1px] border-[#9e9e9e] rounded-xl p-[12px]'>

            <div className='flex flex-col gap-[44px] mt-[24px]'>
                
            <div className='flex flex-col gap-[12px] p-[12px]'>
            <h1 className='flex justify-between'>Frame<Image src={"/images/frame.svg"}alt="sign"width={24} height={24}/></h1>
            <h2 className='flex justify-between'>Shorts<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
            <h3 className='flex justify-between'>Shirts<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h3>
            <h4 className='flex justify-between'>Hoodie<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h4>
            <h3 className='flex justify-between'>Jeans<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h3></div>

            <div><Image src={"/images/Priceline.svg"}alt="sign"width={200} height={90}/></div>

            <div><Image src={"/images/colorsMulti.svg"}alt="sign"width={220} height={137}/></div>

            <div><Image src={"/images/buttonsMulti.svg"}alt="sign"width={247} height={274}/></div>

            <div className='flex flex-col gap-[12px] p-[12px]'>
                <h1>Dress Style</h1>
                <h2 className='flex justify-between'>Casual<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Formal<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Party<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
                <h2 className='flex justify-between'>Gym<Image src={"/images/rightArrow.svg"}alt="sign"width={24} height={24}/></h2>
            </div>
            <Button variant={'apnaStyle'} className='w-[200px] md:w-[247px] h-[48px] bg-black text-[#FFFFFF] rounded-full'>Apply Now</Button>
            
            
            
            </div>
            </div>



    {/* right side */}
            <div className='flex flex-col mt-[100px]'>
                <div className='flex flex-col md:flex-row justify-between '>
                    <h1 className='text-[32px] font-extrabold'>Casual</h1>
                    <h2 className='flex'>Showing 1-10 of 100 Products.Sort By.MostPopular<Image src={"/images/downArrow.svg"}alt="sign"width={16} height={16}/></h2>
                </div>

                {/* col div */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[12px]'>
                   {Data.map((product) =>(
                              <div className="flex flex-col gap-[12px] p-4 " key={product._id}>
                              <Image src={urlFor(product.image).url()} alt={product.name} width={289} height={298} />
                              <h4>{product.category}</h4>
                               <h2>{product.name}</h2>
                               
                               <h2>${product.price}</h2>
                               <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
                               <div><Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>{product.discountPercent}%</Button></div>
                              
                              
                             </div>
                             
                           ))}
                 </div>
        {/* 2nd */}
        <div className='flex gap-[32px] md:gap-[500px] mt-[24px]'>
            <h1 className='flex'><Image src={"/images/arrow-left.svg"}alt="star"width={20} height={20}/>Previous</h1>
            <h2 className='flex'>Next<Image src={"/images/arrow-right.svg"}alt="star"width={20} height={20}/></h2>
        </div>




      
        </div></div>
        {/* main work */}





</div>
    </div>
  )
}

export default Page;
