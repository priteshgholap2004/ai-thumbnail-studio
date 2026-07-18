import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";
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