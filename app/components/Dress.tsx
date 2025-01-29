import Image from "next/image";
import Link from "next/link";


const Dress =()=>{
    return(

<div className="flex flex-col justify-center items-center bg-[#F0F0F0] mt-[100px] p-[12px]">
{/* text div */}
<div className="font-extrabold text-[48px] text-center">
  BROWSE BY DRESS STYLE
</div>
{/* image div */}

<div className="flex flex-col gap-[16px] mt-[44px] md:flex-row">
  <div className="rounded-xl">
    <Link href="./categorypage">
      <Image
        src={"/images/casual.svg"}
        alt="casual"
        width={407}
        height={289}
      />
    </Link>
  </div>
  <div>
    <Image
      src={"/images/formal.svg"}
      alt="star"
      width={684}
      height={289}
    />
  </div>
</div>

<div className="flex flex-col gap-[16px] md:mt-[16px] md:flex-row">
  <div>
    <Image
      src={"/images/party.svg"}
      alt="star"
      width={684}
      height={289}
    />
  </div>
  <div>
    <Image
      src={"/images/gym.svg"}
      alt="star"
      width={407}
      height={289}
    />
  </div>
</div>
</div>



    )}


export default Dress;