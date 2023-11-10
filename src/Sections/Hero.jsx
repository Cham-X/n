import Button from "../Components/Button"
import { arrowRight } from "../assets/icons"
import {shoes,statistics } from "../Constants/Index"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../Components/ShoeCard"
import { useState } from "react"

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full border-2 border-e-red-500 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container relative"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Connection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike arrivals, quality confort, and innovation to your active life.</p>
        <Button iconUrl={arrowRight} label={"Shop Now"} />
        
        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16 text-black">
          {statistics.map((stat) => (
              <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              < p className="leading-7 font-montserrat  text-slate-gray">{ stat.label}</p>
            </div>
          ))
          }
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt="shoe collection" width={610} height={500} className="object-contain relative z-10" />
      </div>
      <div className="flex sm:gap-6 -bottom-[6%] right-[11%] gap-4 absolute  max-sm:px-6">
        {shoes.map((shoe) => (
          <div key={shoe} >
            <ShoeCard
              imgUrl={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
              bigShoeImg={bigShoeImage}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
