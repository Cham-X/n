import Button from "../Components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h2>
        <p className="font-montserrat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">Discover Stylish Nike arrivals, quality confort, and innovation to your active life.</p>
        <Button  label={"Shop Now"} />
      </div> 
  </section>
  )
}

export default SuperQuality