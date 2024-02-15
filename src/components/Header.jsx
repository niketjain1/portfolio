import { MdNightsStay, MdWbSunny } from "react-icons/md";
import logo from "../assets/logo.jpg";

const Header = ({ darkMode, setDarkMode, setSection }) => {
  return (
    <header className="bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white px-15 h-18 sticky top-0 z-50 shadow-xs">
      <nav className="flex justify-between items-center p-5">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
        <button
          className="ml-auto mx-8 px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
          onClick={() => setSection("Home")}
        >
          Home
        </button>
        <button
          className="mx-8 px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
          onClick={() => setSection("Projects")}
        >
          Projects
        </button>
        <button
          className="mx-8 px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
          onClick={() => setSection("Experience")}
        >
          Experience
        </button>
        <button
          className="mx-8 px-4 rounded-lg hover:bg-gray-50 py-2 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-xs"
          onClick={() => setSection("Contact")}
        >
          Contact
        </button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="body-base-medium cursor-pointer" />
          ) : (
            <MdNightsStay className="body-base-medium cursor-pointer" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
