import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import { type Variants } from "framer-motion";
import  pic1  from "/pic1.jpeg";
import pic2 from "/pic2.jpeg";
import coding from "/coding.jpg";
import coding2 from "/coding2.jpg";

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 3,
            ease: "easeOut",
        },
    },
};

const HomePage = () => {
    return (
        <section className="min-h-screen bg-white text-gray-900 flex items-center">
            <div className="max-w-7xl mx-auto px-6  grid md:grid-cols-2 gap-12 items-center">
                {/* LEFT SIDE */}
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Building Digital
                        <br />
                        <span className="text-blue-600">Products</span> That Stand Out
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-lg text-gray-600 max-w-lg"
                    >
                        I’m Enitan Ajayi — a software developer focused on crafting
                        high-quality web applications with modern technologies and
                        exceptional user experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 flex gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
                        >
                            View Work <ArrowRight size={18} />
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 border border-gray-300 items-center flex rounded-lg hover:bg-gray-100 transition"
                        >
                            <User className="inline mr-2 "/>
                            Contact
                        </a>
                    </motion.div>
                </div>

                {/* RIGHT SIDE - CLEAN IMAGE GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-2 gap-4  sm:mt-20  "
                >
                    <motion.img
                        variants={item}
                        src={pic1}
                        className="rounded-xl object-cover h-45 w-full"
                    />

                    <motion.img
                        variants={item}
                        src={coding}
                        className="rounded-xl object-cover h-60 w-full"
                    />

                    <motion.img
                        variants={item}
                        src={coding2}
                        className="rounded-xl object-cover h-60 w-full"
                    />

                    <motion.img
                        variants={item}
                        src={pic2}
                        className="rounded-xl object-cover h-45 w-full"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;