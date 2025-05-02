import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
            newErrors.phone = 'Please enter a valid 10-digit phone number';
        }
        if (!formData.preferredDate) newErrors.preferredDate = 'Preferred date is required';
        if (!formData.preferredTime) newErrors.preferredTime = 'Preferred time is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbyqpdd24I2fsk9R24pZrZH4b4TkjkRLQI9A0swv1lfcE-cvtlsUOnjFgZx_2QGyRW3Guw/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    preferredDate: '',
                    preferredTime: '',
                    message: ''
                });
            } else {
                throw new Error('Failed to submit');
            }
            // eslint-disable-next-line no-unused-vars
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setSubmitStatus(null);
            }, 8000);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-pink-50 to-white py-24 overflow-hidden border-b border-pink-200"
            >
                <div className="absolute inset-0 bg-[url('/img/pattern.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl font-bold text-pink-800 mb-6"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        We're here to help and answer any questions you might have. We look forward to hearing from you.
                    </motion.p>
                </div>
            </motion.div>

            {/* Contact Information */}
            <div className="py-16 bg-gradient-to-br from-white to-pink-50 border-b border-pink-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-pink-100 rounded-lg">
                                    <MapPin className="h-8 w-8 text-pink-600" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">Visit Us</h3>
                            </div>
                            <p className="text-gray-600 text-lg">Suyog Space, Shop no. 7, First floor, Chaudhari Pk Rd, Choudhary Park, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-pink-100 rounded-lg">
                                    <Phone className="h-8 w-8 text-pink-600" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">Call Us</h3>
                            </div>
                            <p className="text-gray-600 text-lg">8999106755, 9970341287                          </p>
                            <p className="text-gray-500 mt-2">Available 24/7 for emergencies</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-pink-100 rounded-lg">
                                    <Mail className="h-8 w-8 text-pink-600" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">Email Us</h3>
                            </div>
                            <p className="text-gray-600 text-lg break-words">pune@venuswomensclinic.com</p>
                            <p className="text-gray-500 mt-2">We'll respond within 24 hours</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-200"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-pink-100 rounded-lg">
                                    <Clock className="h-8 w-8 text-pink-600" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-900">Working Hours</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-gray-600 text-lg">Monday - Saturday:</p>
                                <p className="text-gray-600 font-medium">9:00 AM - 7:00 PM</p>
                                <p className="text-gray-600 text-lg mt-2">Sunday: 
                                    <span className="text-gray-600 font-medium"> Closed</span>

                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="py-16 bg-gradient-to-br from-pink-50 to-white border-t border-b border-pink-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        id="appointment-form"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-xl border-2 border-pink-200"
                    >
                        <h2 className="text-3xl font-bold text-pink-800 mb-8 text-center">Book an Appointment</h2>
                        <p className="text-gray-600 text-center mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your full name"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Enter your phone number"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                    <input
                                        type="date"
                                        id="preferredDate"
                                        name="preferredDate"
                                        value={formData.preferredDate}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.preferredDate ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.preferredDate && <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>}
                                </div>

                                <div>
                                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                                    <input
                                        type="time"
                                        id="preferredTime"
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
                                    />
                                    {errors.preferredTime && <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Please describe your concerns or questions"
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white font-medium ${isSubmitting ? 'bg-pink-400 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200`}
                            >
                                {isSubmitting ? (
                                    <span>Submitting...</span>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5 mr-2" />
                                        Send Message
                                    </>
                                )}
                            </motion.button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 border border-green-300 rounded-lg mt-4"
                                >
                                    <p className="text-green-800 text-center">Thank you for your message! We'll get back to you soon.</p>
                                </motion.div>
                            )}

                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 border border-red-200 rounded-lg mt-4"
                                >
                                    <p className="text-red-800 text-center">Oops! Something went wrong. Please try again later.</p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="py-16 bg-white border-t border-pink-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden shadow-xl border border-pink-200"
                    >
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
                </div>
            </div>
        </div>
    );
}