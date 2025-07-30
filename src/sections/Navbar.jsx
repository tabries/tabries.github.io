import { useState, useRef, useEffect, useCallback } from "react";

import { navLinks } from "../constants";

const NavItems = () => (
  <ul className="flex flex-col items-center gap-4 md:gap-6 relative z-20 text-center h-full justify-center">
    {navLinks.map((item) => (
      <li key={item.id} className="text-neutral-400  font-generalsans  w-full rounded-md py-2 px-5">
        <a
          href={item.href}
          className="text-lg md:text-base  transition-colors w-full block font-supermarioworld text-[#05FF4D] !text-[26px]"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, [setIsOpen]);

  const checkboxContainerRef = useRef(null);
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (
        checkboxContainerRef.current &&
        ev &&
        !checkboxContainerRef.current.contains(ev.target) &&
        ev.target.htmlFor !== "menu-toggle"
      ) {
        checkboxRef.current.checked = false;
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside, { passive: true });
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 ${isOpen ? "z-30 h-full" : "z-15 h-0"} transition-[height] duration-500`}
    >
      {/* Sidebar menu */}
      <div
        className={`h-full absolute left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out  z-20 mx-auto ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"} transition-[opacity] duration-500 overflow-hidden`}
      >
        <nav className="p-5 h-full">
          <NavItems />
        </nav>
      </div>
      <div
        className={`w-fit fixed right-[-0.5rem] top-[0.1rem] sm:right-1 sm:top-3 z-40 
        ${scrollY > 250 ? "opacity-100" : "opacity-0 !right-[-100px]"} transition-[opacity,right] duration-500`}
      >
        <div className="flex justify-end items-center py-5 mx-auto">
          <label
            htmlFor="menu-toggle"
            className="mr-6 z-40  flex items-center justify-center w-[50px] h-[50px] focus:outline-none cursor-pointer
            bg-[#00e542] rounded-[25%]"
            aria-label="Toggle menu"
          >
            <div ref={checkboxContainerRef} className=" w-[40px]">
              {/* Hidden checkbox for toggling */}
              <input
                ref={checkboxRef}
                type="checkbox"
                id="menu-toggle"
                className="hidden peer"
                onClick={toggleMenu}
              />
              {/* Hamburger button */}
              <div className="z-40 bg-black h-[4px] rounded-[3px] my-[7px] transition-transform duration-500 peer-checked:translate-y-[11px] peer-checked:rotate-45"></div>
              <div className="z-40 bg-black h-[4px] rounded-[3px] mb-[7px] transition-transform duration-500 peer-checked:scale-0"></div>
              <div className="z-40 bg-black h-[4px] rounded-[3px] mb-[7px] transition-transform duration-500 peer-checked:-translate-y-[11px] peer-checked:-rotate-45"></div>
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
