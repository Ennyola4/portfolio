import { ArrowBigDown, Eye } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const HomePage = () => {
    const fullName = "Ajayi Enitan...."
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const typingSpeed = 100
        const resetDelay = 10000

        if (index < fullName.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + fullName[index])
                setIndex((prev) => prev + 1)
            }, typingSpeed)
            return () => clearTimeout(timeout)
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayedText("")
                setIndex(0)
            }, resetDelay)
            return () => clearTimeout(resetTimeout)
        }
    }, [index])

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0a192f]">
            {/* Soft green curve */}
            <svg
                className="absolute bottom-0 left-0 w-full h-[110vh]"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,160 C240,220 480,260 720,240 960,220 1200,160 1440,120 L1440,320 L0,320 Z"
                    fill="#64ffda"
                    opacity="0.15"
                />
            </svg>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
                    <a href="#" className="flex items-center">
                        <img
                            src="https://media.craiyon.com/2024-09-19/pTqdzlorS-uGf367PYXzSA.webp"
                            alt="Devenny Logo"
                            className="h-12 w-12 object-contain rounded-full mb-4"
                        />
                    </a>
                    {/* Intro */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs sm:text-sm md:text-base text-[#64ffda] tracking-widest uppercase mb-3 sm:mb-4"
                    >
                        Hi, my name is
                    </motion.h2>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#D8C99B] leading-snug sm:leading-tight md:leading-tight min-h-[4rem]"
                    >
                        {displayedText}
                    </motion.h1>

                    {/* Role */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold font-serif text-gray-400 mt-3 sm:mt-4"
                    >
                        I build things for the <span className="text-red-400 text-5xl">WEB</span>
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-gray-400 mt-4 sm:mt-6 max-w-full sm:max-w-lg md:max-w-xl leading-relaxed text-sm sm:text-base md:text-lg"
                    >
                        I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
                    </motion.p>

                    {/* Call To Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                        className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                    >
                        <a
                            href="#projects"
                            className="inline-block border border-[#64ffda] text-[#64ffda] px-4 py-2 sm:px-6 sm:py-3 rounded-lg 
                         hover:bg-[#64ffda]/10 transition-all duration-300 text-sm sm:text-base tracking-wide"
                        >
                            <Eye className="inline-block mr-2 mb-1" size={16} />
                            View My Work
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="absolute bottom-5 sm:bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[#64ffda]/40 text-xs sm:text-sm tracking-wide"
            >
                <span>Scroll down</span>
                <ArrowBigDown className="w-5 h-5 mt-2 animate-bounce" />
            </motion.div>
        </section>
    )
}

export default HomePage
