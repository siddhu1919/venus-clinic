import { Link } from "react-router-dom"
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-pink-800 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="px-4 md:px-6 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.div>
            <h3 className="text-lg font-bold mb-4">VENUS
              WOMEN'S WELLNESS CLINIC
            </h3>
            <p className="text-pink-100 mb-4">
              Dedicated to providing exceptional and compassionate healthcare for women at every stage of life.
            </p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.a
                href="#"
                className="text-pink-100 hover:text-white"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-pink-100 hover:text-white"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-pink-100 hover:text-white"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-pink-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-pink-100 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-pink-100 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-pink-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#AdolescentProblems" className="text-pink-100 hover:text-white">
                  Adolescent Problems
                </Link>
              </li>
              <li>
                <Link to="/services#PCOD" className="text-pink-100 hover:text-white">
                  PCOD
                </Link>
              </li>
              <li>
                <Link to="/services#MenstrualAbnormalities" className="text-pink-100 hover:text-white">
                  Menstrual Abnormalities
                </Link>
              </li>
              <li>
                <Link to="/services#InfertilityTreatment" className="text-pink-100 hover:text-white">
                  Infertility Treatment
                </Link>
              </li>
              <li>
                <Link to="/services#Beejasanskar" className="text-pink-100 hover:text-white">
                  Beejasanskar
                </Link>
              </li>
              <li>
                <Link to="/services#PreconceptionalCounselling" className="text-pink-100 hover:text-white">
                  Preconceptional Counselling
                </Link>
              </li>
              <li>
                <Link to="/services#AntinetalCare" className="text-pink-100 hover:text-white">
                  Antinetal Care and Treatment
                </Link>
              </li>
              <li>
                <Link to="/services#Garbhasanskar" className="text-pink-100 hover:text-white">
                  Garbhasanskar
                </Link>
              </li>
              <li>
                <Link to="/services#HighRiskPregnancy" className="text-pink-100 hover:text-white">
                  High Risk Pregnancy
                </Link>
              </li>
              <li>
                <Link to="/services#PainlessDelivery" className="text-pink-100 hover:text-white">
                  Normal / Painless Delivery
                </Link>
              </li>
              <li>
                <Link to="/services#PostDeliveryCounselling" className="text-pink-100 hover:text-white">
                  Post Delivery Counselling
                </Link>
              </li>
              <li>
                <Link to="/services#NLP" className="text-pink-100 hover:text-white">
                  NLP
                </Link>
              </li>
              <li>
                <Link to="/services#CancerScreening" className="text-pink-100 hover:text-white">
                  Cancer Screening
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 mr-2 mt-0.5" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5" />
                <span>info@venusclinic.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span className="max-w-[230px]">Laxmi Polyclinic, Vishal Nagar, Pune, Maharashtra, Jagtap Dairy Road, Jagtap Dairy, Pune - 411027 (Pimple Nilakh)</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p>Mon-Fri: 10:00 AM - 1:00 PM</p>
                  <p>Sat: 9:00 AM - 1:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} Women's Wellness Clinic. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </motion.footer >
  )
}

