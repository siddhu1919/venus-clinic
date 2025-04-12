import { Link } from "react-router-dom"
import { PhoneCall } from "lucide-react"
import TestimonialCarousel from "../components/TestimonialCarousel"
import ServiceCard from "../components/ServiceCard"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Home() {
    const services = [
        {
            title: "Adolescent Problems",
            description: "Specialized care and support for adolescent health issues.",
            icon: "User",
            href: "/services#adolescent"
        },
        {
            title: "PCOD",
            description: "Comprehensive treatment for Polycystic Ovarian Disease.",
            icon: "Activity",
            href: "/services#pcod"
        },
        {
            title: "Menstrual Abnormalities",
            description: "Expert care for menstrual health and cycle regulation.",
            icon: "Calendar",
            href: "/services#menstrual"
        },
        {
            title: "Infertility Treatment",
            description: "Advanced fertility solutions and personalized care.",
            icon: "Baby",
            href: "/services#infertility"
        },
        {
            title: "Beejasanskar",
            description: "Traditional preconception care and wellness practices.",
            icon: "Leaf",
            href: "/services#beejasanskar"
        },
        {
            title: "Preconceptional Counselling",
            description: "Guidance and support for pregnancy planning.",
            icon: "MessageCircle",
            href: "/services#counselling"
        },
        // {
        //     title: "Antinetal Care and Treatment",
        //     description: "Complete prenatal care for expectant mothers.",
        //     icon: "Heart",
        //     href: "/services#antenatal"
        // },
        // {
        //     title: "Garbhasanskar",
        //     description: "Holistic pregnancy wellness and traditional practices.",
        //     icon: "Sun",
        //     href: "/services#garbhasanskar"
        // },
        // {
        //     title: "High Risk Pregnancy",
        //     description: "Specialized care for complex pregnancy cases.",
        //     icon: "AlertCircle",
        //     href: "/services#high-risk"
        // },
        // {
        //     title: "Normal / Painless Delivery",
        //     description: "Safe and comfortable delivery options.",
        //     icon: "Baby",
        //     href: "/services#delivery"
        // },
        // {
        //     title: "Post Delivery Counselling",
        //     description: "Support and guidance for new mothers.",
        //     icon: "Heart",
        //     href: "/services#post-delivery"
        // },
        // {
        //     title: "NLP",
        //     description: "Neuro-Linguistic Programming for mental wellness.",
        //     icon: "Brain",
        //     href: "/services#nlp"
        // },
        // {
        //     title: "Cancer Screening",
        //     description: "Early detection and preventive care services.",
        //     icon: "Search",
        //     href: "/services#screening"
        // }
    ];


    return (
        <main className="flex min-h-screen flex-col">
            {/* Banner Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col-reverse md:flex-row items-center lg:py-12 w-full bg-gradient-to-r from-pink-100 to-purple-100 overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-md:text-center lg:w-[80%] relative z-10 h-full flex flex-col justify-center items-start max-md:items-center px-4 md:px-6"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-800 mb-4"
                    >
                        The Modern and Ayurveda Way
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-pink-700 max-w-xl my-2 lg:mb-8"
                    >
                        Dedicated to providing exceptional care for women at every stage of life
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-row gap-4 max-lg:my-4"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/services"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                Our Services
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/about"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-pink-600 bg-transparent px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                About Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-md:px-4 max-md:py-2"
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="lg:scale-123"
                        src="/img/banner.png"
                        alt=""
                    />
                </motion.div>
            </motion.section>

            {/* Call Now CTA */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full py-8 bg-pink-600"
            >
                <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-white mb-4 md:mb-0"
                    >
                        <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
                        <p className="text-pink-100">Our healthcare professionals are ready to help</p>
                    </motion.div>
                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="tel:+1234567890"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Call Now: (123) 456-7890
                    </motion.a>
                </div>
            </motion.section>

            {/* Services Overview Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full py-16 bg-white"
            >
                <div className="px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-pink-800 mb-4"
                        >
                            Our Services
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-600 max-w-2xl mx-auto"
                        >
                            Comprehensive women's healthcare services tailored to your unique needs
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    href={service.href}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mt-10"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/services"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                View All Services
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full py-16 bg-pink-50"
            >
                <div className="px-4 md:px-6 ">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-pink-800 mb-4"
                        >
                            Patient Testimonials
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-600 max-w-2xl mx-auto"
                        >
                            Hear from women who have experienced our compassionate care
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <TestimonialCarousel />
                    </motion.div>
                </div>
            </motion.section>

            {/* Quick Contact Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full py-16 bg-gradient-to-r from-purple-100 to-pink-100"
            >
                <div className="px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl font-bold text-pink-800 mb-4"
                        >
                            Schedule Your Appointment
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gray-600 mb-8"
                        >
                            Take the first step towards better health. Our team is ready to provide the care you deserve.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="tel:+1234567890"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <PhoneCall className="h-5 w-5 mr-2" />
                                Call: (123) 456-7890
                            </motion.a>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="inline-flex h-12 items-center justify-center rounded-md border border-pink-600 bg-transparent px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>
        </main>
    )
}

