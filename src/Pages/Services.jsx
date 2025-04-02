import { PhoneCall } from "lucide-react"
import CustomTabs from "../components/CustomTabs"

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
            <section className="w-full py-16">
                <div className="px-4 md:px-6">
                    <CustomTabs />

                    <div className="mt-12 bg-pink-50 p-6 rounded-lg">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-pink-800 mb-2">Ready to schedule an appointment?</h3>
                                <p className="text-gray-600">Our team is ready to provide the care you deserve.</p>
                            </div>
                            <a
                                href="tel:+1234567890"
                                className="inline-flex h-12 items-center justify-center rounded-md bg-pink-600 px-6 text-base font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                            >
                                <PhoneCall className="h-5 w-5 mr-2" />
                                Call Now: (123) 456-7890
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Services List */}
            <section className="w-full py-16 bg-white border-t border-gray-400">
                <div className="px-4 md:px-6">
                    <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">Complete Services Directory</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Adolescent Care</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Adolescent problem management</li>
                                    <li>Puberty education</li>
                                    <li>Preventive healthcare</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">PCOS Management</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Diagnosis and evaluation</li>
                                    <li>Hormonal therapy</li>
                                    <li>Lifestyle management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Menstrual Health</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Excessive bleeding treatment</li>
                                    <li>Scanty period management</li>
                                    <li>Irregular cycle regulation</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Fertility Services</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Infertility treatment</li>
                                    <li>Beejasanskar</li>
                                    <li>Preconceptional counseling</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Pregnancy Care</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Antenatal care</li>
                                    <li>Garbhasanskar</li>
                                    <li>High-risk pregnancy management</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Delivery Services</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Normal delivery</li>
                                    <li>Painless delivery</li>
                                    <li>Post-delivery counseling</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">NLP Therapy</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Neuro-Linguistic Programming</li>
                                    <li>Mental health support</li>
                                    <li>Emotional wellbeing</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300">
                                <h3 className="text-xl font-bold text-pink-700">Cancer Screening</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Breast cancer screening</li>
                                    <li>Cervical cancer screening</li>
                                    <li>Early detection services</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                            <div className="p-5 border-b border-gray-300 ">
                                <h3 className="text-xl font-bold text-pink-700">Women's Wellness</h3>
                            </div>
                            <div className="p-5">
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Preventive healthcare</li>
                                    <li>Nutritional counseling</li>
                                    <li>Holistic wellness</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

