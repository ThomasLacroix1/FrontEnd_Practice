import { useState, useEffect } from "react";
import MobileNav from "@/components/Basics/Navbar/MobileNav.jsx";
import DesktopNav from "@/components/Basics/Navbar/DesktopNav.jsx";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        isMobile ? <MobileNav /> : <DesktopNav />
    )
}