import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { PhoneCall, Menu, X } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()

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
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link to="/" className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center mr-2">
                            <span className="text-white font-bold">WW</span>
                        </div>
                        <span className="text-xl font-bold text-pink-800">Women's Wellness</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-6">
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

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+1234567890"
                        className="inline-flex h-9 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-lg font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        (123) 456-7890
                    </a>
                    <Link
                        to="/contact"
                        className="inline-flex h-9 items-center justify-center rounded-md bg-pink-600 px-4 text-lg font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden border-t">
                    <div className="container px-4 py-4 flex flex-col gap-4">
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
                        <div className="flex flex-col gap-2 pt-2 border-t">
                            <a
                                href="tel:+1234567890"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-sm font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full"
                            >
                                <PhoneCall className="h-4 w-4 mr-2" />
                                (123) 456-7890
                            </a>
                            <Link
                                to="/contact"
                                onClick={() => setIsMenuOpen(false)}
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

