

function Button({ Icon, text }) {
  return (
    <div>
        <button className="transform duration-300 hover:scale-95 px-7 py-5 rounded-[20px] bg-[#A259FF] font-semibold text-[16px] leading-[22px]"><Icon className='icon' />{text}</button>
    </div>
  )
}

export default Button