import Button from "../Components/Button"
import {shoe8} from "../assets/images"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">We provide you</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Super Quality</span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">Ensuring premium comfort ans style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to details and excellence ensures your satisfation</p>
        <div className="mt-11">
        <Button  label={"Shop Now"} />
        </div>
      </div> 
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe6" width={570} height={522} className="object-contain"/>
      </div>
  </section>
  )
}

export default SuperQuality