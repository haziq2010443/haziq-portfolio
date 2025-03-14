'use client';
import { motion } from "framer-motion";

export default function Profile() {
    return (
        <section className="min-h-screen relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-6 pt-32">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                    initial = {{ opacity:0, x:-50 }}
                    animate = {{ opacity:1, x:0 }}
                    transition = {{ duration:1, ease:"easeOut" }}
                    className = "relative group lg:w-1/2"
                    >
                    
                    </motion.div>
                </div>
            </div>

        </section>
    );
}