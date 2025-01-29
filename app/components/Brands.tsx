import Image from "next/image"
import React from "react"

const Brands =() =>{
return(
<div>
       <section id="Brands">
      <div className='grid grid-cols-1 md:grid-cols-5 justify-center items-center gap-[32px] p-[32px]  mt-[32px] bg-[#000000] '>
      <h1><Image src={"/images/Vector1.svg"}alt="couple"width={166} height={33}/></h1>

      <h1><Image src={"/images/vector2.svg"}alt="couple"width={91} height={38}/></h1>

      <h1><Image src={"/images/vector3.svg"}alt="couple"width={156} height={36}/></h1>

      <h1><Image src={"/images/vector4.svg"}alt="couple"width={194} height={32}/></h1>

      <h1><Image src={"/images/Vector5.svg"}alt="couple"width={206} height={33}/></h1>
      </div>
      </section>
      </div> 


    

)}
export default Brands;