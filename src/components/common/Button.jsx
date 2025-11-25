import { memo } from "react";

const Button = memo(
    ({ children, onClick, icon: Icon, variant = "primary", disabled = false }) => {
        const variants = {
            primary: disabled
                ? "bg-teal-400 text-white opacity-60 cursor-not-allowed"
                : "bg-teal-500 hover:bg-teal-600 text-white",
            secondary: disabled
                ? "bg-gray-300 text-gray-500 opacity-60 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800",
        };

        return (
            <button
                onClick={(e) => {
                    if (!disabled) onClick?.(e);
                }}
                disabled={disabled}
                className={`
          flex items-center justify-center gap-2
          px-4 py-2.5 rounded-md font-medium
          shadow-md hover:shadow-lg
          transition-all duration-300
          hover:scale-[1.04] active:scale-95
          ${variants[variant]}
        `}
            >
                {Icon && <Icon size={18} />}
                {children}
            </button>
        );
    }
);

export default Button;
