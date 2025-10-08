import React, { useState } from "react";
import searchIcon from "../assets/images/search-interface-symbol 1.png";
import bag1 from "../assets/images/bag 1.png";
import hamburger from "../assets/images/hamburger.png";
import logo from "../assets/images/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-[#192116] px-15">
      <div className="flex justify-between items-center w-full py-4">
        {/* Logo */}
        <figure className="flex flex-row items-center justify-center gap-2">
          <img
            src={logo}
            alt="Aesthetic plant in white pot"
            className="rounded-xl"
          />
          <figcaption className="text-2xl font-extrabold text-[#c5c7c5]">
            Planto.
          </figcaption>
        </figure>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="cursor-pointer text-[#c5c7c5] hover:text-[#c5c7c5]">Home</li>

          <li className="cursor-pointer text-[#c5c7c5]">
            <select name="plantType" id="plantType">
              <option value="">Plant type</option>
  <option value="indoor">Indoor</option>
  <option value="outdoor">Outdoor</option>
  <option value="succulent">Succulent</option>
  <option value="flowering">Flowering</option>
  <option value="foliage">Foliage</option>
  <option value="airPurifying">Air Purifying</option>
  <option value="medicinal">Medicinal</option>
  <option value="edible">Edible</option>
  <option value="ornamental">Ornamental</option>
            </select>

            </li>
          <li className="cursor-pointer text-[#c5c7c5]">More</li>
          <li className="cursor-pointer text-[#c5c7c5]">Contact</li>
        </ul>

        {/* Icons */}
        <ul className="hidden md:flex gap-6">
          <li>
            <img
              src={searchIcon}
              alt="search"
              className="w-6 h-6 cursor-pointer"
            />
          </li>
          <li>
            <img src={bag1} alt="bag" className="w-6 h-6 cursor-pointer" />
          </li>
        </ul>

        {/* Hamburger (only mobile) */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={hamburger} alt="menu" className="w-6 h-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-green-600">Home</li>
            <li className="cursor-pointer hover:text-green-600">Plants Type</li>
            <li className="cursor-pointer hover:text-green-600">More</li>
            <li className="cursor-pointer hover:text-green-600">Contact</li>
          </ul>
          <ul className="flex gap-6 mt-4">
            <li>
              <img
                src={searchIcon}
                alt="search"
                className="w-6 h-6 cursor-pointer"
              />
            </li>
            <li>
              <img src={bag1} alt="bag" className="w-6 h-6 cursor-pointer" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
