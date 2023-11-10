const Button = ({label,iconUrl}) => {
  return (
      <button className="flex justify-center items-center font-montserrat bg-coral-red px-7 py-4 text-lg border gap-2 leading-none rounded-full text-white border-coral-red">
          {label}
          <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5"/>
  </button>
  )
}

export default Button
