import { useState, useEffect } from "react";
import MobileNav from "@/components/Basics/Navbar/MobileNav.jsx";
import DesktopNav from "@/components/Basics/Navbar/DesktopNav.jsx";

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        isMobile ? <MobileNav /> : <DesktopNav />
    )
}