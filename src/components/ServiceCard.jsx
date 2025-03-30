import { Link } from "react-router-dom"
import { Activity, Baby, Calendar, Heart, Search, User } from "lucide-react"

export default function ServiceCard({ title, description, icon, href }) {
    const getIcon = () => {
        switch (icon) {
            case "User":
                return <User className="h-10 w-10 text-pink-600" />
            case "Activity":
                return <Activity className="h-10 w-10 text-pink-600" />
            case "Calendar":
                return <Calendar className="h-10 w-10 text-pink-600" />
            case "Baby":
                return <Baby className="h-10 w-10 text-pink-600" />
            case "Heart":
                return <Heart className="h-10 w-10 text-pink-600" />
            case "Search":
                return <Search className="h-10 w-10 text-pink-600" />
            default:
                return <Heart className="h-10 w-10 text-pink-600" />
        }
    }

    return (
        <Link to={href}>
            <div className="h-full bg-white rounded-lg border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-md hover:border-pink-200">
                <div className="p-6 flex flex-col h-full">
                    <div className="mb-4">{getIcon()}</div>
                    <h3 className="text-xl font-bold text-pink-800 mb-2">{title}</h3>
                    <p className="text-gray-600 flex-grow">{description}</p>
                    <div className="text-pink-600 font-medium mt-4 flex items-center">
                        Learn more
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    )
}

