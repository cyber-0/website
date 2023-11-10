import Features from "../components/Index/Features";
import HeroComponent from "../components/Index/Hero";
import Products from "../components/Index/Products";
import Projects from "../components/Index/Projects";
import References from "../components/Index/References";
import FaqComponent from "../components/Index/Faq";
import { Team } from "../components/Index/Team";

export default function IndexPage() {
    return (
        <>

            <HeroComponent />

            <Features />
            <div id="team" className="h-16"></div>
            <Team />

            <References />
            <div id="products" className="h-16"></div>
            <Products />
            <div id="projects" className="h-16"></div>
            <Projects />

            <FaqComponent />
        </>
    )
}