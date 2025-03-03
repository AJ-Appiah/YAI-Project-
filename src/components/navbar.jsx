import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // To track which dropdown is open

  return (
    <nav className="bg-[#f8f5f0] shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[var(--color-cashew-green)]">
          LOGO
        </div>

        {/* Desktop Menu */}
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

          {/* Products Dropdown */}
          <li className="relative group">
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-cashew-orange)] transition"
              onClick={() => setDropdownOpen(dropdownOpen === "products" ? null : "products")}
            >
              Products <FaChevronDown className="text-sm" />
            </span>
            <ul className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 
              ${dropdownOpen === "products" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
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

          {/* Shop Dropdown */}
          <li className="relative group">
            <span
              className="flex items-center gap-1 cursor-pointer hover:text-[var(--color-cashew-orange)] transition"
              onClick={() => setDropdownOpen(dropdownOpen === "shop" ? null : "shop")}
            >
              Shop <FaChevronDown className="text-sm" />
            </span>
            <ul className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 
              ${dropdownOpen === "shop" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
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

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xl text-[var(--color-cashew-green)]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#f8f5f0] py-4 px-6 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-4">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className="block">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="block">
              About
            </Link>
          </li>

          {/* Products Dropdown in Mobile */}
          <li>
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "products" ? null : "products")}
              className="flex justify-between w-full text-left"
            >
              Products <FaChevronDown className="text-sm" />
            </button>
            <ul className={`ml-4 mt-2 space-y-2 ${dropdownOpen === "products" ? "block" : "hidden"}`}>
              <li>
                <Link to="/how-it-works" onClick={() => setMenuOpen(false)} className="block">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/features" onClick={() => setMenuOpen(false)} className="block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/customization" onClick={() => setMenuOpen(false)} className="block">
                  Customization Options
                </Link>
              </li>
            </ul>
          </li>

          {/* Shop Dropdown in Mobile */}
          <li>
            <button
              onClick={() => setDropdownOpen(dropdownOpen === "shop" ? null : "shop")}
              className="flex justify-between w-full text-left"
            >
              Shop <FaChevronDown className="text-sm" />
            </button>
            <ul className={`ml-4 mt-2 space-y-2 ${dropdownOpen === "shop" ? "block" : "hidden"}`}>
              <li>
                <Link to="/buy-now" onClick={() => setMenuOpen(false)} className="block">
                  Buy Now
                </Link>
              </li>
              <li>
                <Link to="/payment-methods" onClick={() => setMenuOpen(false)} className="block">
                  Payment Methods
                </Link>
              </li>
              <li>
                <Link to="/bulk-orders" onClick={() => setMenuOpen(false)} className="block">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="block">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
