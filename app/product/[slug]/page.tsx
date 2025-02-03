"use client"
import { client } from '@/sanity/lib/client'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { useState,useEffect } from 'react'
import Select from "@/app/components/Select"



interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  discountPercent: number;
  colors: string[];
  isNew: boolean;
  category: string;
  slug: string;
  quantity?: number;
}


export default function Page({params:{slug}}:{params:{slug:string}}){
const [product, setProduct] = useState<Product | null>(null); // Initialize state to store product
const {addToCart}  = useCart(); 
 const [selectedSize, setSelectedSize] = useState('');
 const [selectedColor, setSelectedColor] = useState('');




 

useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await client.fetch(`*[_type == "products" && slug.current == $slug][0]{
            name,
            description,
            image,
            colors,
            size,
            price,
            "slug":slug.current
        }`,
    {slug});
    setProduct(fetchedProduct)
      }

      fetchProduct();
    }, [slug]); // Only run when slug changes

    if (!product) {
        return <div>Product not found</div>; // Handle missing product gracefully
      }
    console.log(product)
    
      const handleAddToCart = () => {
        addToCart(product, selectedColor, selectedSize); // Add product to cart with selected options
        // Optional: Show a success message or redirect after adding to cart
        // Navigate to cart page (optional)
      };
      
     const handleSizeSelect =(size:string) => {
      setSelectedSize(size);
      alert(`you selected:${size}`);
     }

     
      
        
return(
    <div>

        {/* main work */}
        <div className='flex flex-col justify-center items-center'>

            <div className='flex mt-[100px]'>
                <Link href="/" className="hover:text-blue-500"><h1 className='flex'>Home<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h1></Link>
                <h2 className='flex'>Shop<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
                <h2 className='flex'>Men<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
                <h2 className='flex'>T-shirt<Image src={"/images/rightArrow.svg"}alt="sign"width={16} height={16}/></h2>
            </div>

            {/* 2nd work */}
            <div className='flex flex-col md:flex-row justify-center items-center mt-[50px] px-[44px]'>
                {/* left side */}

                <div className='flex flex-col md:flex-row gap-[10px]'>
                    {/* div */}
                    
                      
                    <div className='flex flex-col gap-[10px]'>
                         <Image className='rounded-xl' src={urlFor(product.image).url()} alt={product.name} width={152} height={168} /> <Image className='rounded-xl' src={urlFor(product.image).url()} alt={product.name} width={152} height={168} /> <Image className='rounded-xl' src={urlFor(product.image).url()} alt={product.name} width={152} height={167} />
                    </div>


                    <div className='w-[152px] md:w-[600px]'> <Image className='rounded-2xl border-[#000000] border-[1px]' src={urlFor(product.image).url()} alt={product.name} width={444} height={520} /></div>
                       
                     </div>
                     
                    
                    
               {/* right side */}
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-medium md:font-semibold text-[20px] md:text-[40px] text-center'>{product.name}</h1>
                    <h2 className='flex gap-[12px]'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/>4.5/5</h2>
                    <h4 className='font-bold text-[32px]'>${product.price}</h4>
                    <h3 className='flex justify-center items-center text-center p-[50px]'>{product.description}</h3>
                    
                    <h4 className='font-bold text-[24px]'>Select Colors</h4>
                    <div className="flex gap-4 mt-2">
                    {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-black' : 'border-gray-300'}`}
                  style={{ backgroundColor: color }}
                />
              ))}
</div>

{selectedColor && <p className="mt-4">Selected Color: {selectedColor}</p>}



                                        <h6 className='border-[1px] border-[#cac7c7] w-auto'></h6>

                    <h6 className='border-[1px] border-[#cac7c7]'></h6>


                    <h1 className='font-bold text-[24px]'>Choose Size</h1>
                    
              <div className='flex gap-4'>          
              {["Small", "Medium", "Large", "x-Large"].map((size) => (
                <Button
                  key={size}
                  variant="apnaStyle"
                  className={`rounded-full ${selectedSize === size ? 'bg-[#cccccc]' : 'bg-[#e4e3e3]'}`}
                  onClick={() => handleSizeSelect(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            {selectedSize && <p className="mt-4">Selected Size: {selectedSize}</p>}

        
                  
           

                   

                    <div className='flex gap-2 mt-3'>
            <button
              onClick={() => handleAddToCart()} // Correctly passing the product to handleAddToCart
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>

                    



                   </div>


                
            
            </div>
            
            {/* 2nd work end */}


            {/* 3rd work */}


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
     

          <Select/>
        

        
        </div>
        {/* main work end */}
  


    </div>

 )
}




