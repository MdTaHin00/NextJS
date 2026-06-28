"use client"
import { FaMoon } from "react-icons/fa";
import { useTheme } from "./ThemeContext"
import { IoIosSunny } from "react-icons/io";


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div> 
            <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 dark:text-white shadow-md hover:shadow-lg"
            >
                {
                    theme === 'light' ? (<FaMoon className="size-6" />) : (<IoIosSunny className="size-6" />)
                }
            </button>
            <div className="dark:bg-black dark:text-white p-10  m-5">
              <h2>Theme Context Dark/Light method</h2>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam veritatis deserunt explicabo ut aut libero blanditiis voluptates delectus eligendi?</p>
            </div>
        </div>
    )
}

export default ThemeSwitcher;