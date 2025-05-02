import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        id: 1,
        name: "Ankita hans",
        text: "Visited ma'am she is go nice genuine behavior happy to meet her for pcod the given so good treatment over all. A good plan for pcod i feel better now. Best clinic in vishal nagar pune. Thank you ma'am",
        role: "Happy Patient",
    },
    {
        id: 2,
        name: "Pratibha Dusane",
        text: "I trust Dr. Madhavi Tayde with my cervical health. She checks everything carefully to keep me safe.and thats the great thing about her. And she is so friendly as well. Really nice to meet her. And best clinic in vishal nagar pimple nilakh. Pune Recommend to all! 😊",
        role: "Happy Patient",
    },
    {
        id: 3,
        name: "Deepika Kanade",
        text: "I had PCOD for that I visited Dr. Madhvi's clinic. She helped me not only for PCOD but also for weight loss with good guidelines. She is friendly and explained everything clearly and patiently to me . I would really recommend her to my family and friends👍",
        role: "Happy Patient",
    },
    {
        id: 4,
        name: "Roshni Pamnani",
        text: "I trust Dr. Madhavi Tayde with my cervical health. She checks everything carefully to keep me safe.and thats the great thing about her. And she is so friendly as well. Thankyou de madhavi",
        role: "Happy Patient",
    },
    {
        id: 5,
        name: "Pritee Malvankar",
        text: "I don't worry about peeing myself anymore, thanks to Dr. Madhavi Tayde. She found a way to help me feel normal again.i was suffering from my periods problems.She is so friendly",
        role: "Happy Patient",
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

