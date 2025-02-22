'use client';
import { useState } from "react";
import { motion } from "framer-motion"
import MenuItem from "./menu-item"
import { GithubIcon,LinkedInIcon,InstagramIcon } from "./social-icons"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

const navItems = [
    {name: "Projects", href:"#project"},
    {name: "Skills", href:"#skill"},
    {name: "Experience", href:"#experience"},
    {name: "Contact", href:"#contact"}
]

const socialLinks = {
    github: "https://github.com/haziq2010443",
    linkedin: "https://www.linkedin.com/in/haziqhanizal443",
    instagram: "https://www.instagram.com/thehaziqiskandar"
}
export default function Navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <motion.nav 
        initial = {{y: -100}}
        animate = {{y: 0}}
        className="fixed w-full z-50 bg-background/50 backdrop-blur-2xl transition-all duration-300 ease-out">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <motion.div 
                    whileHover={{scale:1.05}}
                    className="flex items-center gap-2 group"
                    >
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <div className="absolute inset-0 
                                bg-gradient-to-r from-primary to-tertiary 
                                animate-spin-slow [mask-image:linear-gradient(transparent,white)]" />
                            <div className="absolute inset-[2px] 
                            bg-background rounded-full flex items-center justify-center">
                                <span className="font-bold bg-gradient-to-r 
                                    from-primary to-tertiary 
                                    bg-clip-text text-transparent">
                                        HH
                                </span>
                            </div>
                        </div>
                        <span className="font-semibold text-content/90 group-hover:text-primary transition-colors">
                            Haziq Hanizal
                        </span>
                    </motion.div>
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-6 bg-background/80 px-4 py-2 rounded-full border border-white/5 shadow-lg shadow-primary/5">
                            {
                                navItems.map((items, i)=>(
                                    <MenuItem key={items.name} index={i} href={items.href}>{items.name}</MenuItem>
                                ))
                            }
                        </div>
                        <div className="h-6 w-px bg-white/10 mx-2"></div>
                        <div className="flex gap-4">
                            <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.github}>
                                <GithubIcon 
                                className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors"/>
                            </a>
                            <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.linkedin}>
                                <LinkedInIcon 
                                className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors"/>
                            </a>
                            <a className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group" href={socialLinks.instagram}>
                                <InstagramIcon 
                                className="h-5 w-5 text-content/80 group-hover:text-primary transition-colors"/>
                            </a>
                        </div>
                    </div>
                    <button className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition">
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-content/80"/>
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-content/80"/>
                        )}
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}