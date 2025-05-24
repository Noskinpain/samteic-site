import React from 'react'

const Button = ({text, onClick, className, disabled}) => {
    return (
        <>
            <button
            className={`rounded-md text-[#64ffda] bg-transparent border border-[#64ffda] font-mono
            hover:bg-[#64ffda] hover:text-[#0a192f] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#64ffda]
            disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
                {text}
            </button></>
    )
}

export default Button
