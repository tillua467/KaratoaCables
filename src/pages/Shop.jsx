import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import ProductList from '../components/store/ProductList';
import { useEffect, React } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Shop() {
    return (
        <>
            <div className="page-wrapper">
                <ProductList />
            </div>
            <Footer />
            <Copyright />
        </>
    );
}
