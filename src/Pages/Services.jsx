import { PhoneCall } from "lucide-react"
import CustomTabs from "../components/CustomTabs"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Services() {

    return (
        <main className="flex min-h-screen flex-col">
            {/* Services Banner */}
            <section className="w-full py-16 bg-gradient-to-r from-pink-100 to-purple-100">
                <div className="px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-bold text-pink-800 mb-4">Our Services</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive women's healthcare services tailored to your unique needs at every stage of life
                    </p>
                </div>
            </section>

            {/* Services Content */}
            <motion.section
                className="w-full py-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="px-4 md:px-6">
                    <CustomTabs />
                    <motion.div
                        className="mt-12 bg-pink-50 p-6 rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-800 mb-2">Ready to schedule an appointment?</h3>
                                <p className="text-gray-600">Our team is ready to provide the care you deserve.</p>
                            </div>
                            <motion.a
                                href="tel:+1234567890"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <PhoneCall className="h-5 w-5 mr-2" />
                                Call Now: (123) 456-7890
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </motion.section>0

            {/* Full Services List */}
            <motion.section 
                className="w-full py-16 bg-white border-t border-gray-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="px-4 md:px-6">
                    <motion.h2 
                        className="text-3xl font-bold text-pink-800 mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Complete Services Directory
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Adolescent Care",
                                items: ["Adolescent problem management", "Puberty education", "Preventive healthcare"]
                            },
                            {
                                title: "PCOS Management",
                                items: ["Diagnosis and evaluation", "Hormonal therapy", "Lifestyle management"]
                            },
                            {
                                title: "Menstrual Health",
                                items: ["Excessive bleeding treatment", "Scanty period management", "Irregular cycle regulation"]
                            },
                            {
                                title: "Fertility Services",
                                items: ["Infertility treatment", "Beejasanskar", "Preconceptional counseling"]
                            },
                            {
                                title: "Pregnancy Care",
                                items: ["Antenatal care", "Garbhasanskar", "High-risk pregnancy management"]
                            },
                            {
                                title: "Delivery Services",
                                items: ["Normal delivery", "Painless delivery", "Post-delivery counseling"]
                            },
                            {
                                title: "NLP Therapy",
                                items: ["Neuro-Linguistic Programming", "Mental health support", "Emotional wellbeing"]
                            },
                            {
                                title: "Cancer Screening",
                                items: ["Breast cancer screening", "Cervical cancer screening", "Early detection services"]
                            },
                            {
                                title: "Women's Wellness",
                                items: ["Preventive healthcare", "Nutritional counseling", "Holistic wellness"]
                            }
                        ].map((service, index) => (
                            <motion.div 
                                key={service.title}
                                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            >
                                <div className="p-5 border-b border-gray-300">
                                    <h3 className="text-xl font-bold text-pink-700">{service.title}</h3>
                                </div>
                                <div className="p-5">
                                    <ul className="list-disc pl-5 space-y-1">
                                        {service.items.map((item, i) => (
                                            <motion.li 
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.3, delay: 0.1 * i }}
                                            >
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </main>
    )
}

