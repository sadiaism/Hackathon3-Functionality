"use client"
import {client} from "@/sanity/lib/client"
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
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
    const products = await client.fetch(`*[_type == 'products'][8..11]{_id,image,category,name,price,discountPercent,"slug":slug.current}`);
    setData(products)
    };
    fetchData();

  },[])
  return (
    <section id="On Sale">
    <div className="flex flex-col justify-center items-center mt-[100px]">
          <h1 className="font-extrabold text-[42px]">TOP SELLING</h1>
    
       <div className="grid grid-cols-1 md:grid-cols-4 mt-[44px]">
        {Data.map((product) =>(
           <div className="flex flex-col p-4 " key={product._id}>
             
             {product.image &&  (
           <Image src={urlFor(product.image).url()} alt={product.name} width={289} height={298} />)}
            <h2 className="font-semibold text-[20px]">{product.name}</h2>
            
            <div><h2 className="font-bold">${product.price}</h2><h3  className="bg-[#f1d2d2] w-[58px] h-[28px] rounded-full pl-[10px]">{product.discountPercent}%</h3></div>
            <h2 className='flex gap-[13px]'><Image src={"/images/star 1.svg"}alt="star"width={104} height={19}/>5.0/5</h2>
            <Link href={`product/${product.slug}`}>
            <div className="flex justify-center items-center w-[150px] h-[50px] border-[1px] border-[#000000] mt-[12px] rounded-3xl bg-[#000000] text-[#FFFFFF] hover:bg-[#f1d2d2]">View More</div></Link>
           
           
          </div>
          
        ))}
    
       </div>
       
    
        
        </div>
        </section>
  )
}

export default Page;
