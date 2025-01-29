import Image from "next/image";


const Reviews =()=>{
    return(
      <div className="flex flex-col justify-center items-center">
        {/* head div */}
        <div className="mt-[100px] text-[12px] md:text-[48px] font-extrabold ">
          OUR HAPPY CUSTOMERS
        </div>

        {/* text div */}
        <div className="grid grid-cols-1 gap-[12px] md:grid-cols-3 justify-center items-center">
          {/* 1st div */}
          <div className="flex flex-col justify-center items-center h-auto md:h-[240px] border-[1px] border-[#9e9d9d] rounded-2xl md:flex">
            <div className="flex flex-col mt-[20px] gap-[16px]">
              <Image
                src={"/images/Five star.svg"}
                alt="star"
                width={139}
                height={23}
              />
              <div className="flex">
                Sarah M.
                <Image
                  src={"/images/green tick.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center">{`"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."`}</div>
            </div>
          </div>

          {/* 2nd div */}
          <div className="flex flex-col h-auto md:h-[240px] border-[1px] border-[#9e9d9d] rounded-2xl">
            <div className="flex flex-col mt-[20px] gap-[16px]">
              <Image
                src={"/images/Five star.svg"}
                alt="star"
                width={139}
                height={23}
              />
              <div className="flex">
                Alex K.
                <Image
                  src={"/images/green tick.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center">{`"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."`}</div>
            </div>
          </div>
          {/* 3rd div */}
          <div className="flex flex-col h-auto md:h-[240px] border-[1px] border-[#9e9d9d] rounded-2xl">
            <div className="flex flex-col mt-[20px] gap-[16px]">
              <Image
                src={"/images/Five star.svg"}
                alt="star"
                width={139}
                height={23}
              />
              <div className="flex">
                James L.
                <Image
                  src={"/images/green tick.svg"}
                  alt="star"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center">{`"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."`}</div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Reviews;
