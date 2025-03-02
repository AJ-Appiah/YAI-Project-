import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-[#f8f5f0] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-7 flex justify-between items-center">
        <div className="text-2xl font-bold text-[var(--color-cashew-green)]">LOGO</div>
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link to="/" className="hover:text-[var(--color-cashew-orange)] transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[var(--color-cashew-orange)] transition">
              About
            </Link>
          </li>

          <li className="relative group">
  <span className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-cashew-orange)] transition">
    Products <FaChevronDown className="text-sm" />
  </span>
  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 rounded-md">
    <li>
      <Link to="/how-it-works" className="block px-4 py-2 hover:bg-gray-100">
        How It Works
      </Link>
    </li>
    <li>
      <Link to="/features" className="block px-4 py-2 hover:bg-gray-100">
        Features
      </Link>
    </li>
    <li>
      <Link to="/customization" className="block px-4 py-2 hover:bg-gray-100">
        Customization Options
      </Link>
    </li>
  </ul>
</li>

<li className="relative group">
  <span className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-cashew-orange)] transition">
    Shop <FaChevronDown className="text-sm" />
  </span>
  <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-300 rounded-md">
    <li>
      <Link to="/buy-now" className="block px-4 py-2 hover:bg-gray-100">
        Buy Now
      </Link>
    </li>
    <li>
      <Link to="/payment-methods" className="block px-4 py-2 hover:bg-gray-100">
        Payment Methods
      </Link>
    </li>
    <li>
      <Link to="/bulk-orders" className="block px-4 py-2 hover:bg-gray-100">
        Bulk Orders
      </Link>
    </li>
  </ul>
</li>


          <li>
            <Link to="/contact" className="hover:text-[var(--color-cashew-orange)] transition">
              Contact
            </Link>
          </li>

          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
