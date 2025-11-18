"use client"
import {Inter, Poppins} from 'next/font/google'
import {IoIosSearch, IoMdClose, IoMdMenu} from "react-icons/io"
import {FaRegHeart} from "react-icons/fa"
import {MdOutlineShoppingCart} from "react-icons/md"
import {useEffect, useState} from 'react'
import Link from "next/link";

const inter = Inter({
    subsets: ['latin'],
    weight: ['700']
})

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400']
})

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeItem, setActiveItem] = useState('Home')

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = ['Home', 'Contact', 'About', 'Sign Up']

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
            : 'bg-white pt-4 pb-4'
        } border-b border-gray-100`}>
            <div className="container mx-auto px-4">
                <div className='flex items-center justify-between'>
                    <h1 className={`text-black text-xl md:text-2xl font-bold tracking-wide transform hover:scale-105 transition-transform duration-200 cursor-pointer ${inter.className}`}>
                        Exclusive
                    </h1>

                    <ul className='hidden lg:flex items-center gap-8 xl:gap-12'>
                        {navItems.map((item, index) => (
                            <li key={item} className="relative">
                                <a
                                    href="#"
                                    onClick={() => setActiveItem(item)}
                                    className={`${poppins.className} text-base leading-6 transition-all duration-300 hover:text-red-500 transform hover:-translate-y-0.5 relative group ${activeItem === item ? 'text-red-500' : 'text-black'
                                    }`}
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}
                                >
                                    {item}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-4'>
                        <div
                            className='hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2.5 min-w-[240px] lg:min-w-[280px] transition-all duration-300 hover:bg-gray-100 hover:shadow-md focus-within:ring-2 focus-within:ring-red-500/20 focus-within:bg-white group'>
                            <input
                                type="text"
                                placeholder='What are you looking for?'
                                className={`flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400 transition-all duration-200 ${poppins.className}`}
                            />
                            <IoIosSearch
                                className='w-6 h-6 text-gray-400 ml-2 transition-all duration-200 group-hover:text-red-500 group-focus-within:text-red-500'/>
                        </div>

                        <div className='flex items-center gap-3'>
                            <button
                                className='md:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95'>
                                <IoIosSearch className='w-6 h-6 text-gray-700 transition-colors duration-200'/>
                            </button>

                            <button
                                className='relative p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 group'>
                                <FaRegHeart
                                    className='w-6 h-6 text-gray-700 transition-all duration-200 group-hover:text-red-500'/>
                                <span
                                    className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse'>2</span>
                            </button>

                            <Link href={"/cart"}
                                className='relative p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95 group'>
                                <MdOutlineShoppingCart
                                    className='w-6 h-6 text-gray-700 transition-all duration-200 group-hover:text-red-500'/>
                                <span
                                    className='absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce'>3</span>
                            </Link>

                            <button
                                onClick={toggleMenu}
                                className='lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 active:scale-95'
                                aria-label="Toggle menu"
                            >
                                <div className='relative w-6 h-6'>
                                    <IoMdMenu
                                        className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                        }`}/>
                                    <IoMdClose
                                        className={`absolute inset-0 w-6 h-6 text-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                                        }`}/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4'
                }`}>
                    <div className='pt-4 pb-4 border-t border-gray-100'>
                        <div className='md:hidden mb-6'>
                            <div
                                className='flex items-center bg-gray-50 rounded-lg px-4 py-2.5 transition-all duration-300 hover:bg-gray-100 hover:shadow-md focus-within:ring-2 focus-within:ring-red-500/20 focus-within:bg-white group'>
                                <input
                                    type="text"
                                    placeholder='What are you looking for?'
                                    className={`flex-1 bg-transparent outline-none text-sm placeholder:text-gray-400 transition-all duration-200 ${poppins.className}`}
                                />
                                <IoIosSearch
                                    className='w-6 h-6 text-gray-400 ml-2 transition-all duration-200 group-hover:text-red-500 group-focus-within:text-red-500'/>
                            </div>
                        </div>

                        <ul className='flex flex-col gap-2'>
                            {navItems.map((item, index) => (
                                <li key={item} className='relative overflow-hidden'>
                                    <a
                                        href="#"
                                        onClick={() => {
                                            setActiveItem(item)
                                            setIsMenuOpen(false)
                                        }}
                                        className={`${poppins.className} block text-base leading-6 py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-red-500 transform hover:translate-x-2 relative ${activeItem === item ? 'text-red-500 bg-red-50' : 'text-black'
                                        }`}
                                        style={{
                                            animationDelay: `${index * 100}ms`,
                                            transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                                            transition: `all 0.5s ease ${index * 100}ms`
                                        }}
                                    >
                                        {item}
                                        <span
                                            className={`absolute left-0 top-0 bottom-0 w-1 bg-red-500 transition-all duration-300 ${activeItem === item ? 'opacity-100' : 'opacity-0'
                                            }`}></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar