"use client"
import { client } from '@/sanity/lib/client'
import { urlFor } from "@/sanity/lib/image";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { useState,useEffect } from 'react';



export default function Page({params:{slug}}:{params:{slug:string}}){
const [product, setProduct] = useState<any>(null); // Initialize state to store product
const { addToCart ,removeFromCart } = useCart(); 
 const [selectedSize, setSelectedSize] = useState('');

 

useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct = await client.fetch(`*[_type == "products" && slug.current == $slug][0]{
            name,
            description,
            image,
            colors,
            size,
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
        addToCart(product); // Correctly passing the product to addToCart
        alert(`${product.name} added to cart`);
      }
      const handleRemoveFromCart = () => {
        removeFromCart(product); // Removes the product from the cart
        alert(`${product.name} removed from cart`);
      };
      const handleSizeSelect = (size:any) => {
        setSelectedSize(size); // Update the selected size
        alert(`You selected: ${size}`); // Optional feedback
      };
        
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
                         <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={168} /> <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={168} /> <Image src={urlFor(product.image).url()} alt={product.name} width={152} height={167} />
                    </div>


                    <div className='w-[152px] md:w-[444px]'> <Image src={urlFor(product.image).url()} alt={product.name} width={444} height={520} /></div>
                       
                     </div>
                     
                    
                    
               {/* right side */}
                <div className='flex flex-col justify-center items-center gap-[20px]'>
                    <h1 className='font-medium md:font-semibold text-[20px] md:text-[40px] text-center'>{product.name}</h1>
                    <h2 className='flex gap-[12px]'><Image src={"/images/star 1.svg"}alt="sign"width={139} height={24}/>4.5/5</h2>
                    <h3 className='flex justify-center items-center text-center p-[50px]'>{product.description}</h3>
                    <h4>Select Colors</h4>
                    <h5><Image src={"/images/threebuttons.svg"}alt="sign"width={143} height={37}/></h5>
                                        <h6 className='border-[1px] border-[#cac7c7] w-auto'></h6>

                    <h6 className='border-[1px] border-[#cac7c7]'></h6>


                    <h1>Choose Size</h1>
                    
              <div className='flex gap-4'>          
             <Button
          variant="apnaStyle"
          className={`rounded-full ${selectedSize === 'Small' ? 'bg-[#cccccc]' : 'bg-[#e4e3e3]'}`}
          onClick={() => handleSizeSelect('Small')}
        >
          Small
        </Button>
        <Button
          variant="apnaStyle"
          className={`rounded-full ${selectedSize === 'Medium' ? 'bg-[#cccccc]' : 'bg-[#e9e7e7]'}`}
          onClick={() => handleSizeSelect('Medium')}
        >
          Medium
        </Button>
        <Button
          variant="apnaStyle"
          className={`rounded-full ${selectedSize === 'Large' ? 'bg-[#333333] text-white' : 'bg-[#000000] text-[#FFFFFF]'}`}
          onClick={() => handleSizeSelect('Large')}
        >
          Large
        </Button>
        <Button
          variant="apnaStyle"
          className={`rounded-full ${selectedSize === 'x-Large' ? 'bg-[#cccccc]' : 'bg-[#eaeaea]'}`}
          onClick={() => handleSizeSelect('x-Large')}
        >
          x-Large
        </Button>
      
      {selectedSize && <p className="mt-4">Selected Size: {selectedSize}</p>}
      
        </div>
                  


                    <h3><Button variant={'apnaStyle'} className='w-[170px] h-[52px] bg-[#e4e3e3] rounded-full'>+  1  -</Button></h3>

                    <div className='flex gap-2 mt-3'>
            <button
              onClick={() => handleAddToCart()} // Correctly passing the product to handleAddToCart
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>

            <button
          onClick={handleRemoveFromCart}
          className="bg-red-500 text-white py-1 px-3 rounded"
        >
          Remove
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
                <h1 className='font-bold'>{product.name}</h1>
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




