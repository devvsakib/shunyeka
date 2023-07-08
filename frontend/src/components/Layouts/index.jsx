const Layouts = ({ children }) => {
    return (
        <div className='max-w-[1280px] mx-auto min-h-screen px-5 sm:px-10 relative overflow-hidden'>
            {children}

            <div className="w-56 h-56 absolute -z-10 bg-gradient-to-r from-[#EC3384] to-slate-100/60 rounded-full blur-lg opacity-20 left-[45%] top-[30%]"></div>
            <div className="w-56 h-56 absolute -z-10 bg-gradient-to-r from-[#FFE4D4] via-[#ec33] rounded-full blur-lg opacity-20 left-[20%] top-[5%] sm:top-[30%]"></div>
        </div>
    )
}

export default Layouts