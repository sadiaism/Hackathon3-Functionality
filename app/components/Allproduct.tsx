"use client"
import {client} from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  category:string,
  slug:string
}

const Page = () => {

  const [Data,setData] = useState<Products[]>([]);

  useEffect(()=>{
    const fetchData= async ()=>{
    const products = await client.fetch(`*[_type == 'products']`);
    setData(products)
    };
    fetchData();

  },[])
  return (
    <div className="flex flex-col justify-center items-center mt-[100px]">
          <h1 className="font-extrabold text-[42px]">All Products</h1>
    
       <div className="grid grid-cols-1 md:grid-cols-4 mt-[44px]">
        {Data.map((product) =>(
           <div className="flex flex-col gap-[12px] p-4 " key={product._id}>
            <Link href={`product/${product.slug}`}>
           <Image src={urlFor(product.image).url()} alt={product.name} width={289} height={298} /></Link>
           <h4>{product.category}</h4>
            <h2>{product.name}</h2>
            
            <h2>${product.price}</h2>
            <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
            <div><Button variant={'apnaStyle'} className='bg-[#f1d2d2] w-[58px] h-[28px] rounded-full'>{product.discountPercent}%</Button></div>
           
           
          </div>
          
        ))}
    
       </div>
       
    
        
        </div>
  )
}

export default Page;
