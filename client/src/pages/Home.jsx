import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
import TrustedTech from "../components/TrustedTech";
import Roadmap from "../components/Roadmap";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            <Hero />

            <WhyChoose />

            <HowItWorks />

            <Roadmap />

            <CTA />

            <Footer />

        </div>
    );
};

export default Home;