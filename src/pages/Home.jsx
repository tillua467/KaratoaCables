import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection";
import TrendingProducts from "../components/TrendingProducts";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {
    useEffect(() => {
    AOS.init({
        duration: 1500, 
        once: true,     
    });

    AOS.refresh();
    }, []);

    return (
        <>
            <Navbar />
            <HeroSection />
            <TrendingProducts />
            <Footer />
            <Copyright />
        </>
    );
}
