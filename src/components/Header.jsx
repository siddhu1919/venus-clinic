import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { PhoneCall, Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (
        <header className={`sticky top-0 z-50 w-full  overflow-hidden  bg-white/50 backdrop-blur-[15px] ${isMenuOpen ? "rounded-b-3xl" : ''
            } `}>
            <div className="w-full flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center">
                        <div className="size-11 md:size-15 rounded-full  flex items-center justify-center mr-2">
                            <img src="/img/favicon.png" alt="VenusLogo" />
                        </div>
                        <span className="text-xl font-bold text-pink-800">Women's Wellness Clinic</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={
                                location.pathname === item.href
                                    ? "text-pink-600 text-lg font-medium transition-colors"
                                    : "text-gray-600 text-lg font-medium transition-colors hover:text-pink-600"
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="tel:+1234567890"
                        className="inline-flex h-9 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-lg font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        (123) 456-7890
                    </a>
                    <Link
                        to="/contact#appointment-form"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-pink-600 px-4 text-lg font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        onClick={() => {
                            setTimeout(() => {
                                const form = document.getElementById('appointment-form');
                                if (form) form.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div ref={menuRef} className="lg:hidden border-t   border-gray-400  backdrop-blur-[15px]">
                    <div className=" px-4 py-4 flex flex-col  gap-4">
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={
                                        location.pathname === item.href
                                            ? "text-pink-600 text-sm font-medium transition-colors py-2"
                                            : "text-gray-600 text-sm font-medium transition-colors hover:text-pink-600 py-2"
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex flex-col gap-2 py-2 border-t border-gray-400">
                            <a
                                href="tel:+1234567890"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-sm font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full"
                            >
                                <PhoneCall className="h-4 w-4 mr-2" />
                                (123) 456-7890
                            </a>
                            <Link
                                to="/contact#appointment-form"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setTimeout(() => {
                                        const form = document.getElementById('appointment-form');
                                        if (form) form.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }}
                                className="inline-flex h-10 items-center justify-center rounded-md bg-pink-600 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full"
                            >
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

