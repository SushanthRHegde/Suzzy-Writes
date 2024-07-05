import { useState } from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className='border-b-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <Link
            to='/'
            className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white mr-4'
          >
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              DilSe
            </span>
            WritingZ
          </Link>
          <form className='hidden lg:flex md:flex'>
            <TextInput
              type='text'
              placeholder='Search...'
              rightIcon={AiOutlineSearch}
            />
          </form>
          <Button className='w-12 h-10 lg:hidden md:hidden' color='gray' pill>
            <AiOutlineSearch />
          </Button>
        </div>
        <div className='flex gap-2 items-center md:order-2'>
          <Link to='/' className={`text-black ${path === "/" ? "font-bold" : ""} hidden lg:block`}>
            Home
          </Link>
          <Link to='/about' className={`text-black ${path === "/about" ? "font-bold" : ""} hidden lg:block`}>
            About
          </Link>
          <Link to='/projects' className={`text-black ${path === "/projects" ? "font-bold" : ""} hidden lg:block`}>
            Projects
          </Link>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to='/signin'>
            <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
          </Link>
          <Navbar.Toggle onClick={toggleNavbar} />
        </div>
      </div>
      <Navbar.Collapse className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <Link to='/' className={`text-black ${path === "/" ? "font-bold" : ""}`}>
          Home
        </Link>
        <Link to='/about' className={`text-black ${path === "/about" ? "font-bold" : ""}`}>
          About
        </Link>
        <Link to='/projects' className={`text-black ${path === "/projects" ? "font-bold" : ""}`}>
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
