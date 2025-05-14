import "tailwindcss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Header({ cartCount, toggleCart }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-utensils text-3xl text-orange-500 mr-2"></i>
          <a href="#" className="text-3xl font-bold text-gray-800">
            ButterCH
          </a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#menu"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Menu
          </a>
          <a
            href="#about"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-orange-500 transition"
          >
            Contact
          </a>
        </nav>
        <button
          onClick={toggleCart}
          className="relative p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition"
        >
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
