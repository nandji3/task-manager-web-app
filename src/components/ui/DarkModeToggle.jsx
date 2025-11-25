import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/theme/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from "react";

export default function DarkModeToggle() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", mode === "dark");
    }, [mode]);

    return (
        <button
            onClick={() => dispatch(toggleTheme())}
            className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 
                       hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
        >
            {mode === "dark" ? (
                <FaSun className="text-yellow-400" />
            ) : (
                <FaMoon className="text-gray-700" />
            )}
        </button>
    );
}
