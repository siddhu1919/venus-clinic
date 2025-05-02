import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { PhoneCall, Menu, X } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

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

    // Animation variants
    const logoVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        })
    }

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: i => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1 + 0.3,
                duration: 0.3,
                ease: "easeOut"
            }
        }),
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1,
                ease: "easeInOut"
            }
        }
    }

    const mobileMenuVariants = {
        hidden: { opacity: 0, height: 0, overflow: "hidden" },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const mobileNavItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        exit: {
            opacity: 0,
            x: -10,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    }

    const mobileButtonVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        }),
        exit: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2,
                ease: "easeIn"
            }
        }
    }

    return (
        <header className={`sticky top-0 z-50 w-full overflow-hidden bg-white/50 backdrop-blur-[15px] ${isMenuOpen ? "rounded-b-3xl" : ''}`}>
            <div className="w-full flex h-20 items-center justify-between px-4 md:px-6">
                <motion.div
                    className="flex items-center gap-2"
                    initial="hidden"
                    animate="visible"
                    variants={logoVariants}
                >
                    <Link to="/" className="flex items-center">
                        <motion.div
                            className="size-11 md:size-15 rounded-full flex items-center justify-center mr-2"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img src="/img/favicon.png" alt="VenusLogo" />
                        </motion.div>
                        <motion.span
                            className="text-xl font-bold text-pink-800"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                        >
                            Women's Wellness Clinic
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                        >
                            <Link
                                to={item.href}
                                className={
                                    location.pathname === item.href
                                        ? "text-pink-600 text-lg font-medium transition-colors"
                                        : "text-gray-600 text-lg font-medium transition-colors hover:text-pink-600"
                                }
                            >
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="inline-block"
                                >
                                    {item.name}
                                </motion.span>
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <motion.a
                        href="tel:8999106755"
                        className="inline-flex h-9 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-lg font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                    >
                        <PhoneCall className="h-4 w-4 mr-2" />
                        8999106755
                    </motion.a>
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="tap"
                        variants={buttonVariants}
                    >
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
                    </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="lg:hidden"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >

                    {isMenuOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Menu className="h-6 w-6" />
                        </motion.div>
                    )}

                </motion.button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        className="lg:hidden border-t border-gray-400 backdrop-blur-[15px]"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                    >
                        <div className="px-4 py-4 flex flex-col gap-4">
                            <nav className="flex flex-col gap-4">
                                {navItems.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        variants={mobileNavItemVariants}
                                    >
                                        <Link
                                            to={item.href}
                                            className={
                                                location.pathname === item.href
                                                    ? "text-pink-600 text-sm font-medium transition-colors py-2"
                                                    : "text-gray-600 text-sm font-medium transition-colors hover:text-pink-600 py-2"
                                            }
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <motion.span
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                                className="inline-block"
                                            >
                                                {item.name}
                                            </motion.span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>
                            <motion.div
                                className="flex flex-col gap-2 py-2 border-t border-gray-400"
                                variants={mobileNavItemVariants}
                            >
                                <motion.a
                                    href="tel:8999106755"
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-pink-600 bg-transparent px-4 text-sm font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 w-full"
                                    custom={0}
                                    variants={mobileButtonVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <PhoneCall className="h-4 w-4 mr-2" />
                                    8999106755
                                </motion.a>
                                <motion.div
                                    custom={1}
                                    variants={mobileButtonVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
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
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

