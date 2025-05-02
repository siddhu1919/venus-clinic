/* eslint-disable no-unused-vars */
import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Stethoscope, Users, Pill, Syringe, HeartPulse, Microscope } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingIcon = ({ icon: Icon, delay, x, y }) => {
    const floatAnimation = {
        y: [y, y - 15, y],
        x: [x, x + 10, x],
        transition: {
            duration: 3,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }
    };
    return (
        <motion.div
            className="absolute text-pink-100/20"
            style={{ left: x, top: y }}
            animate={floatAnimation}
        >
            <Icon size={32} />
        </motion.div>
    );
};

const About = () => {
    return (
        <div className="min-h-screen bg-white relative overflow-hidden">
            {/* Floating Medical Icons */}
            <FloatingIcon icon={Stethoscope} delay={0} x={50} y={100} />
            <FloatingIcon icon={Pill} delay={0.5} x={200} y={300} />
            <FloatingIcon icon={Syringe} delay={1} x={800} y={200} />
            <FloatingIcon icon={Stethoscope} delay={1.5} x={600} y={400} />
            <FloatingIcon icon={HeartPulse} delay={2} x={100} y={500} />
            <FloatingIcon icon={Microscope} delay={2.5} x={700} y={150} />
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-pink-50 to-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-6xl font-bold text-pink-800 mb-6">Dr. Madhavi Tayade</h1>
                        <p className="text-2xl text-gray-700 mb-4 font-medium">Consultant Gynaecologist and Obstetrician</p>
                        <p className="text-xl text-gray-600 mb-8">Combining modern medicine with traditional wisdom for holistic women's healthcare</p>

                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto relative">
                        <img
                            src="/img/drMadhavi.jpg"
                            alt="Dr. Madhavi Tayade"
                            className="w-full h-auto rounded-2xl "
                        />
                    </motion.div>

                </div>
            </div>

            {/* About Section */}
            <div className="py-10 bg-gradient-to-b from-white to-pink-50/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center">
                        <h2 className="text-4xl font-bold text-pink-800 mb-8">About Dr. Madhavi Tayade</h2>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Dr. Madhavi Tayade is a skilled and compassionate healthcare professional with over 9 years of experience in the field of women's health. She offers a unique blend of modern medical practices and Ayurvedic healing, providing comprehensive care for her patients. With additional diplomas in Garbhasanskar, Nadi Parikshan, and Infertility Management, she brings a truly integrative approach to women's healthcare.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Throughout her career, she has successfully conducted and assisted in numerous gynecological surgeries and managed more than 500 normal deliveries. Her approach focuses not only on treating illness but also on achieving overall well-being—helping patients maintain balance in their physical, emotional, and mental health.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            By combining the precision of modern medicine with the depth of Ayurveda, she has consistently enhanced the quality of life and long-term health outcomes for her patients.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* Stats Section */}
            <div className="py-16 bg-gradient-to-br from-pink-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-white shadow-lg">
                            <p className="text-4xl font-bold text-pink-600 mb-2">9+</p>
                            <p className="text-gray-600">Years Experience</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-white shadow-lg">
                            <p className="text-4xl font-bold text-pink-600 mb-2">500+</p>
                            <p className="text-gray-600">Successful Deliveries</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-white shadow-lg">
                            <p className="text-4xl font-bold text-pink-600 mb-2">1000+</p>
                            <p className="text-gray-600">Happy Patients</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-white shadow-lg">
                            <p className="text-4xl font-bold text-pink-600 mb-2">4</p>
                            <p className="text-gray-600">Hospital Affiliations</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Professional Journey */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-pink-800 mb-4">Professional Journey</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A timeline of dedication, learning, and excellence in women's healthcare</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <Award className="w-8 h-8 text-pink-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-pink-800">Education & Certifications</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Diploma in Garbhasanskar with Advanced Certification</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Expert Certification in Nadi Parikshan Techniques</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Advanced Specialization in Infertility Management</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Modern Medical Practices & Technology Integration</span>
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <Stethoscope className="w-8 h-8 text-pink-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-pink-800">Professional Experience</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Birla Hospital, Thergaon, Pune</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Jupiter Hospital, Pune</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">ONP(Oyster and pearl) Leela Hospital, Pune</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 bg-pink-600 rounded-full mt-2"></span>
                                    <span className="text-gray-700">Sanjivani Medipoint Hospital, Pune</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg border border-pink-200">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-pink-100 p-3 rounded-lg">
                                <Users className="w-8 h-8 text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-pink-800">Patient Care Philosophy</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h4 className="font-semibold text-pink-700 mb-2">Personalized Care</h4>
                                <p className="text-gray-600">Tailored treatment plans considering individual needs and circumstances</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h4 className="font-semibold text-pink-700 mb-2">Holistic Approach</h4>
                                <p className="text-gray-600">Combining modern medicine with traditional healing practices</p>
                            </div>
                            <div className="p-4 bg-white rounded-lg shadow">
                                <h4 className="font-semibold text-pink-700 mb-2">Continuous Support</h4>
                                <p className="text-gray-600">24/7 emergency assistance and regular follow-up care</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Location & Contact Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-pink-800 mb-16">Location & Contact</motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d472.0316931906725!2d73.75962510000002!3d18.605063400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDM2JzE4LjEiTiA3M8KwNDUnMzQuOSJF!5e0!3m2!1sen!2sin!4v1711639533044!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="clinic-location"
                            ></iframe>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8 p-6 bg-pink-50/30 rounded-xl border border-pink-200/50">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Clinic Address</h3>
                                    <p className="text-gray-600">Suyog Space, Shop no. 7, First floor, Chaudhari Pk Rd, Choudhary Park, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">8999106755 , 9970341287</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-600">pune@venuswomensclinic.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Clinic Hours</h3>
                                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600">Sunday: Closed</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;