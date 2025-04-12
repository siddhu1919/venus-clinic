import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        text: "The care I received during my pregnancy was exceptional. The doctors and staff were attentive, compassionate, and made me feel comfortable throughout my journey.",
        role: "New Mother",
    },
    {
        id: 2,
        name: "Jennifer L.",
        text: "After struggling with fertility issues for years, the team at Women's Wellness Clinic helped me achieve my dream of becoming a mother. Their expertise and support made all the difference.",
        role: "Fertility Patient",
    },
    {
        id: 3,
        name: "Rebecca T.",
        text: "The adolescent care program provided my daughter with the guidance and support she needed during a challenging time. The doctors created a safe space for her to discuss her concerns.",
        role: "Parent",
    },
    {
        id: 4,
        name: "Michelle K.",
        text: "I've been a patient for over 10 years, and the quality of care has always been outstanding. The doctors take the time to listen and address all my concerns.",
        role: "Long-term Patient",
    },
    {
        id: 5,
        name: "Patricia D.",
        text: "The cancer screening program potentially saved my life. Early detection made all the difference, and I'm grateful for the thorough and compassionate care I received.",
        role: "Cancer Screening Patient",
    },
]

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleTestimonials, setVisibleTestimonials] = useState([])
    const [itemsPerView, setItemsPerView] = useState(3)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1)
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2)
            } else {
                setItemsPerView(3)
            }
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        const endIndex = currentIndex + itemsPerView
        setVisibleTestimonials(testimonials.slice(currentIndex, endIndex))
    }, [currentIndex, itemsPerView])

    const nextSlide = () => {
        if (currentIndex + itemsPerView < testimonials.length) {
            setCurrentIndex(currentIndex + 1)
        } else {
            setCurrentIndex(0)
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else {
            setCurrentIndex(testimonials.length - itemsPerView);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full  ">
            <div className="flex  justify-center  overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out gap-6 lg:min-h-[270px]" >
                    <AnimatePresence mode="wait">
                        {visibleTestimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -300 }}
                                transition={{ duration: 0.5 }}
                                className="min-w-[300px] flex-1 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300"
                            >
                                <motion.div
                                    className="p-6"
                                    initial={{ y: 20 }}
                                    animate={{ y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <motion.div
                                        initial={{ rotate: -10 }}
                                        animate={{ rotate: 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Quote className="h-8 w-8 text-pink-200 mb-4" />
                                    </motion.div>
                                    <motion.p
                                        className="text-gray-600 mb-6"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        {testimonial.text}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <p className="font-bold text-pink-800">{testimonial.name}</p>
                                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-600 shadow-sm hover:bg-pink-50 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    onClick={prevSlide}
                >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Previous</span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-600 shadow-sm hover:bg-pink-50 hover:text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    onClick={nextSlide}
                >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Next</span>
                </motion.button>
            </div>
        </div>
    )
}

