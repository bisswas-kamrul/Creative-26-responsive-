import React from "react";
import Container from "../../Container";
import Logo from "../../assets/Logo.png";
import { useEffect, useState } from 'react';

import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Header = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 


  return (
    <>
      <div className="bg-blue-400 sticky top-0 z-50">
        <Container>
          <Navbar fluid rounded className="bg-blue-400 ">
            <div className="">
              <img
                src={Logo}
                alt={"LogoPng"}
                className={"h-[50px] w-[80px]"}></img>
            </div>
            <NavbarToggle className="navbar-default"/>
            <NavbarCollapse>
              <NavbarLink>
                <div className="">
                  <ul className="flex-col md:flex-row flex gap-x-5 items-center">
                    <li className=" font-medium text-shadow-cyan-900 font-inter text-18">
                      Home
                    </li>
                    <li className=" font-medium text-shadow-cyan-900 font-inter text-18">
                      About
                    </li>
                    <li className=" font-medium text-shadow-cyan-900 font-inter text-18">
                      Service
                    </li>
                    <li className=" font-medium text-shadow-cyan-900 font-inter text-18">
                      Blog
                    </li>
                    <li className=" font-medium text-shadow-cyan-900 font-inter text-18">
                      Contact
                    </li>
                  </ul>
                </div>
              </NavbarLink>
            </NavbarCollapse>
          </Navbar>
        </Container>
      </div>
    </>
  );
};

export default Header;
