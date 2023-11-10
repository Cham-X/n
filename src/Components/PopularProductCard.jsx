import { star } from "../assets/icons"

const PopularProductCard = ({imgUrl,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={imgUrl} alt={name} className="w-[280px] h-[280px]" />
        <div className="mt-1 flex flex-col  justify-start ">
              <div className="flex justify-start align-middle gap-2 ">
              <img src={star} alt="rating" width={24} height={24} />
              <p className="font-montaserrat text-xl leading-normal text-slate-gray ">{4.5}</p>
              </div>
              <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">{name}</h3>
              <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">{ price}</p>           
          </div>
    </div>
  )
}

export default PopularProductCard
