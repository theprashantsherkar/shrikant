// import { Home, User, Briefcase, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Home, User, Briefcase, FileText } from "lucide-react";

export default function Navbar() {

    const navItems = [
        { name: "Home", url: "#", icon: <Home size={18} strokeWidth={2.5} /> },
        { name: "About", url: "#", icon: <User size={18} strokeWidth={2.5} /> },
        { name: "Projects", url: "#", icon: <Briefcase size={18} strokeWidth={2.5} /> },
        { name: "Resume", url: "#", icon: <FileText size={18} strokeWidth={2.5} /> },
    ];


    return <NavBar items={navItems} />
}