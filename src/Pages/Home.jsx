import { Link } from "react-router-dom"
import { PhoneCall } from "lucide-react"
import TestimonialCarousel from "../components/TestimonialCarousel"
import ServiceCard from "../components/ServiceCard"

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
            <section className="relative w-full h-[500px] bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="container relative z-10 h-full flex flex-col justify-center items-start px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-800 mb-4">
                        Compassionate Women's Healthcare
                    </h1>
                    <p className="text-lg md:text-xl text-pink-700 max-w-xl mb-8">
                        Dedicated to providing exceptional care for women at every stage of life
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/services"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                            Our Services
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-pink-600 bg-transparent px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[url('/images/banner-bg.jpg')] bg-cover bg-center opacity-20"></div>
            </section>

            {/* Call Now CTA */}
            <section className="w-full py-8 bg-pink-600">
                <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
                    <div className="text-white mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Need immediate assistance?</h2>
                        <p className="text-pink-100">Our healthcare professionals are ready to help</p>
                    </div>
                    <a
                        href="tel:+1234567890"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                        <PhoneCall className="h-5 w-5 mr-2" />
                        Call Now: (123) 456-7890
                    </a>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="w-full py-16 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-pink-800 mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive women's healthcare services tailored to your unique needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">


                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                href={service.href}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            to="/services"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="w-full py-16 bg-pink-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-pink-800 mb-4">Patient Testimonials</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Hear from women who have experienced our compassionate care
                        </p>
                    </div>

                    <TestimonialCarousel />
                </div>
            </section>

            {/* Quick Contact Section */}
            <section className="w-full py-16 bg-gradient-to-r from-purple-100 to-pink-100">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-pink-800 mb-4">Schedule Your Appointment</h2>
                        <p className="text-gray-600 mb-8">
                            Take the first step towards better health. Our team is ready to provide the care you deserve.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+1234567890"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <PhoneCall className="h-5 w-5 mr-2" />
                                Call: (123) 456-7890
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-md border border-pink-600 bg-transparent px-6 text-base font-medium text-pink-600 shadow-sm hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

