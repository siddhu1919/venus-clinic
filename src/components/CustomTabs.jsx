import { useEffect, useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

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
        { id: "beejasanskar", label: "Beej Sanskaar / Preconception Counselling and Care" },
        { id: "contraception", label: "Contraception / Family Planning" },
        { id: "antenatal", label: "Antenatal Care" },
        { id: "garbhasanskar", label: "Garbhasanskar" },
        { id: "highrisk", label: "High Risk Pregnancy" },
        { id: "delivery", label: "Normal / Painless Delivery" },
        { id: "postdelivery", label: "Post Delivery Counselling" },
        { id: "nlp", label: "NLP" },
        { id: "screening", label: "Cancer Screening" },
        { id: "uttarbasti", label: "Uttar Basti (Uttarbasti) Therapy" },
    ]

    const tabContent = {
        adolescent: {
            title: "Adolescent Problems",
            subtitle: "Specialized care for adolescents",
            description: "Comprehensive care and support for adolescents dealing with physical and emotional changes.",
            imagePath: "/img/services/adolescent.svg",
            content: "We offer compassionate care for adolescents, addressing physical, emotional, and hormonal changes during puberty. Our integrated approach—blending Ayurveda, modern medicine, and yoga helps manage acne, mood swings, delayed puberty, and menstrual irregularities, ensuring overall well-being during these crucial years."
        },
        pcod: {
            title: "PCOD Management",
            subtitle: "Polycystic Ovarian Disease Treatment",
            description: "Specialized treatment and management solutions for PCOD/PCOS.",
            imagePath: "/img/services/pcod.svg",
            content: "Our PCOD care program combines Ayurvedic detox, personalized diet plans, hormonal support, and yoga to improve ovulation, reduce insulin resistance, and promote hormonal harmony, helping restore natural menstrual rhythms and fertility."
        },
        menstrual: {
            title: "Menstrual Abnormalities",
            subtitle: "Comprehensive menstrual health care",
            description: "Expert care for various menstrual disorders and irregularities.",
            imagePath: "/img/services/menstrual.svg",
            content: "We provide holistic solutions for menstrual disorders through herbal formulations, hormonal evaluation, yoga for hormonal balance, and lifestyle modifications. Our therapies help restore regular cycles naturally and safely."
        },
        infertility: {
            title: "Infertility Treatment",
            subtitle: "Advanced fertility solutions",
            description: "Comprehensive fertility treatments to help you achieve parenthood.",
            imagePath: "/img/services/infertility.svg",
            content: "We offer a comprehensive approach to infertility by combining advanced diagnostics and modern fertility treatments with supportive therapies. Our services include hormonal evaluations, ovulation tracking, semen analysis, and referrals for IUI/IVF when needed. For couples preparing for assisted reproductive techniques like IVF, we recommend pre-IVF Panchakarma therapy to detoxify the body, regulate hormones, improve uterine and sperm health, and reduce stress. Studies and clinical experience suggest that undergoing Panchakarma before IVF may significantly enhance implantation rates and overall success. Our integrative care aims to optimize your fertility journey, with  Morden and Ayurvedic way."
        },
        beejasanskar: {
            title: "Beej Sanskaar / Preconception Counselling and Care",
            subtitle: "Traditional conception practices",
            description: "Ancient wisdom combined with modern medical care for conception.",
            imagePath: "/img/services/beejasanskar.svg",
            content: "We prepare couples physically, mentally, and spiritually for healthy conception through Beej Sanskar rituals, Panchakarma, yoga, and preconception nutrition, ensuring a strong foundation for the baby’s life and health."
        },
        contraception: {
            title: "Contraception / Family Planning",
            subtitle: "Preparation for healthy pregnancy",
            description: "Comprehensive guidance to prepare for a healthy pregnancy.",
            imagePath: "/img/services/preconception.svg",
            content: "We offer personalized family planning solutions using safe and effective modern contraceptive methods, including pills, IUDs, implants, and permanent options. Our expert counselling helps you choose the best method based on your health, lifestyle, and future plans."
        },
        antenatal: {
            title: "Antenatal Care and Treatment",
            subtitle: "Complete pregnancy care",
            description: "Comprehensive care throughout your pregnancy journey.",
            imagePath: "/img/services/antenatal.svg",
            content: "Our antenatal program supports the mother and baby with regular checkups, Ayurvedic supplements, prenatal yoga, meditation, and nutritional guidance for a joyful and healthy pregnancy."
        },
        garbhasanskar: {
            title: "Garbhasanskar",
            subtitle: "Traditional pregnancy wellness",
            description: "Ancient practices for maternal and fetal wellbeing during pregnancy.",
            imagePath: "/img/services/garbhasanskar.svg",
            content: "We offer Garbha sanskar enriched with affirmations, music therapy, storytelling, and NLP techniques. Guided meditation and pregnancy yoga help nurture the baby’s development and promote a calm, positive mindset for the mother."
        },
        highrisk: {
            title: "High Risk Pregnancy",
            subtitle: "Specialized pregnancy care",
            description: "Expert care for complicated pregnancies requiring special attention.",
            imagePath: "/img/services/highrisk.svg",
            content: "Specialized monitoring, modern obstetric care, and Ayurvedic support including stress-reducing yoga and dietary care help manage high-risk pregnancies like gestational diabetes, hypertension, or previous complications with confidence and care."
        },
        delivery: {
            title: "Normal / Painless Delivery",
            subtitle: "Safe delivery options",
            description: "Expert care for safe and comfortable delivery experience.",
            imagePath: "/img/services/delivery.svg",
            content: "Our approach supports natural childbirth with prenatal yoga, breathing exercises, Ayurvedic massage, and pain relief techniques to facilitate a smoother and less painful delivery experience."
        },
        postdelivery: {
            title: "Post Delivery Counselling",
            subtitle: "Comprehensive postpartum care",
            description: "Complete support and care after delivery for mother and baby.",
            imagePath: "/img/services/postdelivery.svg",
            content: "We help new mothers recover and thrive with personalized postnatal care, Ayurvedic therapies for rejuvenation, yoga for core strength and mental balance, lactation support, and emotional counselling."
        },
        nlp: {
            title: "NLP Therapy",
            subtitle: "Neuro-Linguistic Programming",
            description: "Advanced therapeutic approach for mental and emotional wellbeing.",
            imagePath: "/img/services/nlp.svg",
            content: "Our NLP therapy services utilize advanced psychological techniques to address various mental and emotional challenges. We provide behavioral therapy using NLP principles to modify unhelpful patterns, emotional healing techniques for processing difficult experiences, and effective stress management strategies for daily life. Our approach promotes personal development and growth, offers specialized anxiety treatment protocols, and includes confidence building exercises to enhance self-esteem. NLP therapy can be particularly beneficial during pregnancy and the postpartum period, helping women navigate the emotional aspects of these transformative life stages."
        },
        screening: {
            title: "Cancer Screening",
            subtitle: "Early detection and prevention",
            description: "Comprehensive screening services for early detection of various cancers.",
            imagePath: "/img/services/screening.svg",
            content: "Our cancer screening services focus on early detection, which significantly improves treatment outcomes. We provide breast cancer screening using modern diagnostic techniques, cervical cancer screening following current medical guidelines, and regular check-ups to monitor for any concerning changes. Our approach includes personalized risk assessment to determine appropriate screening schedules, preventive care recommendations to reduce cancer risk, and expert consultation to address any findings or concerns. We emphasize education about cancer prevention and early detection, empowering women to take proactive steps for their long-term health."
        },
        uttarbasti: {
            title: "Uttar Basti (Uttarbasti) Therapy",
            subtitle: "Ancient Ayurvedic therapy for reproductive wellness",
            description: "Traditional Ayurvedic therapy for treating gynecological and reproductive disorders.",
            imagePath: "/img/services/screening.svg",
            content: "Uttar Basti is a unique Ayurvedic therapy beneficial for reproductive health. It involves the administration of medicated oils or decoctions into the uterus or urinary tract. This therapy is especially effective in managing conditions like PCOD, endometriosis, infertility, and menstrual disorders, while also preparing the uterus for conception. Combined with yoga and Panchakarma, it enhances reproductive vitality."
        }
    }


    return (

        <div>
            <div id={activeTab} className="flex overflow-x-auto scrollbar-hidden mb-8 border-2 border-pink-300 rounded-lg shadow-md"
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
                <div className="flex whitespace-nowrap ">
                    {tabs.map((tab) => (
                        <motion.button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`cursor-pointer  py-3 px-4 text-sm font-medium border-r-2 border-pink-200 last:border-r-0 relative ${activeTab === tab.id ? "bg-pink-600 text-white" : "bg-white text-gray-600 hover:bg-pink-50"}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-pink-400"
                                    layoutId="activeTab"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                            {tab.label}
                        </motion.button>
                    ))}
                </div>
            </div>
            <motion.div
                className="bg-white rounded-lg border-2 border-pink-200 shadow-lg overflow-hidden"
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="p-5 border-b-2 border-pink-200">
                    <h2 className="text-2xl text-pink-800 font-bold">{tabContent[activeTab].title}</h2>
                    <p className="text-gray-500">{tabContent[activeTab].subtitle}</p>
                </div>
                <div className="p-5">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-3/4 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-pink-700">Overview</h3>
                                <p className="text-gray-700 text-lg">{tabContent[activeTab].description}</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-pink-700">Detailed Information</h3>
                                <div className="bg-pink-50 p-6 rounded-lg shadow-md border-2 border-pink-200">
                                    <p className="text-gray-800 leading-relaxed text-lg">{tabContent[activeTab].content}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4 flex justify-center items-start sticky top-4">
                            <img
                                src={tabContent[activeTab].imagePath}
                                alt={tabContent[activeTab].title}
                                className="w-64 h-64 object-contain rounded-lg shadow-lg bg-white p-4 border-2 border-pink-200"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
