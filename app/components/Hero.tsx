import Image from "next/image"
import { Button } from "@/components/ui/button";


const Hero = () => {
    return (
<section id="Shop">
        <div className="flex flex-col justify-between items-center md:h-[500px] bg-[#F2F0F1] md:flex-row  md:gap-[300px] mt-[50px] md:px-[100px]">
          {/* text div */}
          <div className="flex flex-col">
            <h1 className="flex text-[16px] font-bold md:text-[45px] md:font-extrabold">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <h2>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </h2>
            <Button
              variant={"apnaStyle"}
              className="w-[200px] h-[52px] bg-[#000000] text-[#FFFFFF] rounded-full ml-[10px] mt-[20px]"
            >
              Shop Now
            </Button>
          </div>

          {/* mobile */}
          <div className="flex flex-col md:hidden">
            <div className="flex w-[278px] h-[52px] mt-[50px] ml-[56px] gap-[32px]">
              <div className="flex flex-col w-[106px] h-[48px]">
                <h1>200+</h1>
                <h2></h2>International Brands
              </div>
              <div className="flex flex-col w-[117px] h-[48px]">
                <h1>2.00+</h1>
                <h2></h2>High Quality Products
              </div>
            </div>
            <div className="flex flex-col w-[103px] h-[48px] ml-[144px] mt-[50px]">
              <h1>30.000+</h1>
              <h2>Happy Customers</h2>
            </div>
          </div>
          {/* img div */}
          <div className="md:w-full">
            <Image
              src={"/images/mobilecouple.svg"}
              alt="couple"
              width={430}
              height={448}
            />
          </div>
        </div>
      </section>

      )}
      export default Hero;