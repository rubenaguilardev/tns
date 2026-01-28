const Die = ({value, isHeld, id}) => {
    return (
        <button 
            className={`${isHeld ? 'bg-[#59e391]' : 'bg-white'} h-9 w-9 font-bold text-xl rounded-sm shadow-xl cursor-pointer`}
        >
            {value}
        </button>
    )
}

export default Die