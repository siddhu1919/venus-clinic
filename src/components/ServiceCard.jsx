import { Link } from "react-router-dom"
import { Activity, Baby, Calendar, Heart, Search, User, Leaf, MessageCircle } from "lucide-react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

export default function ServiceCard({ title, description, icon, href }) {
    const getIcon = () => {
        switch (icon) {
            case "User":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><User className="h-10 w-10 text-pink-600" /></motion.div>
            case "Activity":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Activity className="h-10 w-10 text-pink-600" /></motion.div>
            case "Calendar":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Calendar className="h-10 w-10 text-pink-600" /></motion.div>
            case "Baby":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Baby className="h-10 w-10 text-pink-600" /></motion.div>
            case "Heart":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Heart className="h-10 w-10 text-pink-600" /></motion.div>
            case "Search":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Search className="h-10 w-10 text-pink-600" /></motion.div>
            case "Leaf":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Leaf className="h-10 w-10 text-pink-600" /></motion.div>
            case "MessageCircle":
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><MessageCircle className="h-10 w-10 text-pink-600" /></motion.div>
            default:
                return <motion.div whileHover={{ rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}><Heart className="h-10 w-10 text-pink-600" /></motion.div>
        }
    }

    const cardVariants = {
        hover: {
            boxShadow: "0 10px 25px rgba(249, 168, 212, 0.2)",
            borderColor: "rgba(249, 168, 212, 0.5)",
            transition: { duration: 0.3 }
        }
    }

    const arrowVariants = {
        hover: { x: 5, transition: { type: "spring", stiffness: 400 } }
    }

    return (
        <Link to={href}>
            <motion.div
                className="h-full bg-white rounded-lg border border-gray-200 shadow-sm"
                initial={{ boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
                whileHover="hover"
                variants={cardVariants}
            >
                <div className="p-6 flex flex-col h-full">
                    <motion.div
                        className="mb-4"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {getIcon()}
                    </motion.div>
                    <motion.h3
                        className="text-xl font-bold text-pink-800 mb-2"
                        initial={{ y: 0 }}
                        whileHover={{ y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        {title}
                    </motion.h3>
                    <p className="text-gray-600 flex-grow">{description}</p>
                    <motion.div
                        className="text-pink-600 font-medium mt-4 flex items-center"
                        whileHover={{ color: "#db2777" }}
                    >
                        Learn more
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            variants={arrowVariants}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                    </motion.div>
                </div>
            </motion.div>
        </Link>
    )
}

