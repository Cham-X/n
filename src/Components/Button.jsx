const Button = ({label,iconUrl,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center font-montserrat  px-7 py-4 text-lg border gap-2 leading-none rounded-full  ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:
    "bg-coral-red  border-coral-red text-white"} ${fullWidth && "w-full"}`}>
          {label}
      {iconUrl && <img src={iconUrl} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
  </button>
  )
}

export default Button
