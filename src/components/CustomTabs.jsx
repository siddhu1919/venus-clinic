import { useEffect, useState } from "react"

export default function CustomTabs() {
    const [activeTab, setActiveTab] = useState("adolescent")

    useEffect(() => {
        const hash = window.location.hash.slice(1); // Remove the # symbol
        if (hash && Object.keys(tabContent).includes(hash)) {
            setActiveTab(hash);
        }
    }, []); // Empty dependency array means this runs once on component mount


    const tabs = [
        { id: "adolescent", label: "Adolescent Problems" },
        { id: "pcod", label: "PCOD" },
        { id: "menstrual", label: "Menstrual Abnormalities" },
        { id: "infertility", label: "Infertility Treatment" },
        { id: "beejasanskar", label: "Beejasanskar" },
        { id: "preconception", label: "Preconceptional Counselling" },
        { id: "antenatal", label: "Antenatal Care" },
        { id: "garbhasanskar", label: "Garbhasanskar" },
        { id: "highrisk", label: "High Risk Pregnancy" },
        { id: "delivery", label: "Normal / Painless Delivery" },
        { id: "postdelivery", label: "Post Delivery Counselling" },
        { id: "nlp", label: "NLP" },
        { id: "screening", label: "Cancer Screening" },
    ]

    const tabContent = {
        adolescent: {
            title: "Adolescent Problems",
            subtitle: "Specialized care for adolescents",
            description: "Comprehensive care and support for adolescents dealing with physical and emotional changes.",
            services: [
                "Puberty-related issues",
                "Growth and development monitoring",
                "Psychological support",
                "Nutritional guidance",
                "Health education",
                "Lifestyle counseling"
            ]
        },
        pcod: {
            title: "PCOD Management",
            subtitle: "Polycystic Ovarian Disease Treatment",
            description: "Specialized treatment and management solutions for PCOD/PCOS.",
            services: [
                "Hormonal balance treatment",
                "Weight management",
                "Lifestyle modifications",
                "Medication management",
                "Regular monitoring",
                "Fertility preservation guidance"
            ]
        },
        menstrual: {
            title: "Menstrual Abnormalities",
            subtitle: "Comprehensive menstrual health care",
            description: "Expert care for various menstrual disorders and irregularities.",
            services: [
                "Irregular periods treatment",
                "Heavy bleeding management",
                "Pain management",
                "Hormonal therapy",
                "Diagnostic testing",
                "Customized treatment plans"
            ]
        },
        infertility: {
            title: "Infertility Treatment",
            subtitle: "Advanced fertility solutions",
            description: "Comprehensive fertility treatments to help you achieve parenthood.",
            services: [
                "Fertility assessment",
                "Treatment planning",
                "Hormonal therapy",
                "Ovulation induction",
                "IUI procedures",
                "Fertility counseling"
            ]
        },
        beejasanskar: {
            title: "Beejasanskar",
            subtitle: "Traditional conception practices",
            description: "Ancient wisdom combined with modern medical care for conception.",
            services: [
                "Traditional practices",
                "Lifestyle modifications",
                "Dietary guidance",
                "Spiritual counseling",
                "Holistic approach",
                "Personalized care"
            ]
        },
        preconception: {
            title: "Preconceptional Counselling",
            subtitle: "Preparation for healthy pregnancy",
            description: "Comprehensive guidance to prepare for a healthy pregnancy.",
            services: [
                "Health assessment",
                "Genetic counseling",
                "Nutritional advice",
                "Lifestyle modifications",
                "Vaccination planning",
                "Risk assessment"
            ]
        },
        antenatal: {
            title: "Antenatal Care and Treatment",
            subtitle: "Complete pregnancy care",
            description: "Comprehensive care throughout your pregnancy journey.",
            services: [
                "Regular check-ups",
                "Fetal monitoring",
                "Pregnancy education",
                "Nutritional guidance",
                "Risk assessment",
                "Emergency care"
            ]
        },
        garbhasanskar: {
            title: "Garbhasanskar",
            subtitle: "Traditional pregnancy wellness",
            description: "Ancient practices for maternal and fetal wellbeing during pregnancy.",
            services: [
                "Traditional practices",
                "Meditation guidance",
                "Dietary recommendations",
                "Exercise planning",
                "Mental wellness",
                "Spiritual guidance"
            ]
        },
        highrisk: {
            title: "High Risk Pregnancy",
            subtitle: "Specialized pregnancy care",
            description: "Expert care for complicated pregnancies requiring special attention.",
            services: [
                "Close monitoring",
                "Regular assessments",
                "Emergency care",
                "Specialized treatment",
                "Risk management",
                "24/7 support"
            ]
        },
        delivery: {
            title: "Normal / Painless Delivery",
            subtitle: "Safe delivery options",
            description: "Expert care for safe and comfortable delivery experience.",
            services: [
                "Natural birth support",
                "Pain management",
                "Modern facilities",
                "Expert team",
                "Emergency care",
                "Postpartum support"
            ]
        },
        postdelivery: {
            title: "Post Delivery Counselling",
            subtitle: "Comprehensive postpartum care",
            description: "Complete support and care after delivery for mother and baby.",
            services: [
                "Recovery guidance",
                "Breastfeeding support",
                "Emotional support",
                "Baby care education",
                "Health monitoring",
                "Nutrition advice"
            ]
        },
        nlp: {
            title: "NLP Therapy",
            subtitle: "Neuro-Linguistic Programming",
            description: "Advanced therapeutic approach for mental and emotional wellbeing.",
            services: [
                "Behavioral therapy",
                "Emotional healing",
                "Stress management",
                "Personal development",
                "Anxiety treatment",
                "Confidence building"
            ]
        },
        screening: {
            title: "Cancer Screening",
            subtitle: "Early detection and prevention",
            description: "Comprehensive screening services for early detection of various cancers.",
            services: [
                "Breast cancer screening",
                "Cervical cancer screening",
                "Regular check-ups",
                "Risk assessment",
                "Preventive care",
                "Expert consultation"
            ]
        }
    }

    return (
        <div>
            <div id={activeTab} className="flex overflow-x-auto scrollbar-hidden mb-8 border border-gray-300 rounded-lg"
                onMouseDown={(e) => {
                    const slider = e.currentTarget;
                    let isDown = true;
                    const startX = e.pageX - slider.offsetLeft;
                    const scrollLeft = slider.scrollLeft;

                    const mouseMoveHandler = (e) => {
                        if (!isDown) return;
                        e.preventDefault();
                        const x = e.pageX - slider.offsetLeft;
                        const walk = (x - startX);
                        slider.scrollLeft = scrollLeft - walk;
                    };

                    const mouseUpHandler = () => {
                        isDown = false;
                        document.removeEventListener('mousemove', mouseMoveHandler);
                        document.removeEventListener('mouseup', mouseUpHandler);
                    };

                    document.addEventListener('mousemove', mouseMoveHandler);
                    document.addEventListener('mouseup', mouseUpHandler);
                }}
            >
                <div className="flex whitespace-nowrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`cursor-grab active:cursor-grabbing py-3 px-4 text-sm font-medium ${activeTab === tab.id ? "bg-pink-600 text-white" : "bg-white text-gray-600 hover:bg-pink-50"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-300">
                    <h2 className="text-2xl text-pink-800  font-bold">{tabContent[activeTab].title}</h2>
                    <p className="text-gray-500">{tabContent[activeTab].subtitle}</p>
                </div>
                <div className="p-5 space-y-4">
                    <p>{tabContent[activeTab].description}</p>
                    <h3 className="text-lg font-semibold text-pink-700">Services include:</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        {tabContent[activeTab].services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
