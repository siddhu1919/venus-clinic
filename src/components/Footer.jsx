import { Link } from "react-router-dom"
import { PhoneCall, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-pink-800 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">VENUS
              WOMEN'S WELLNESS CLINIC
            </h3>
            <p className="text-pink-100 mb-4">
              Dedicated to providing exceptional and compassionate healthcare for women at every stage of life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-pink-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-pink-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

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
              <li>
                <Link to="/privacy" className="text-pink-100 hover:text-white">
                  Privacy Policy
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
        </div>

        <div className="border-t border-pink-700 mt-8 pt-8 text-center text-pink-100">
          <p>&copy; {new Date().getFullYear()} Women's Wellness Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

