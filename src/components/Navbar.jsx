import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother;

const Navbar = () => {
    useEffect(() => {
        smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.7,
            speed: 1.7,
            effects: true,
            autoResize: true,
            ignoreMobileResize: true,
        });

        smoother.scrollTop(0);
        smoother.paused(true);

        let links = document.querySelectorAll(".header ul a");
        links.forEach((elem) => {
            let element = elem;
            element.addEventListener("click", (e) => {
                if (window.innerWidth > 1024) {
                    e.preventDefault();
                    let elem = e.currentTarget;
                    let section = elem.getAttribute("data-href");
                    smoother.scrollTo(section, true, "top top");
                }
            });
        });
        window.addEventListener("resize", () => {
            ScrollSmoother.refresh(true);
        });
    }, []);
    return (
        <>
            <div className="header">
                <a href="/#" className="navbar-title" data-cursor="disable">
                    <img src="/images/profile.jpeg" alt="Shubhyanshu" style={{ height: '36px', width: '36px', borderRadius: '50%', objectFit: 'cover' }} />
                </a>
                <ul>
                    <li>
                        <a data-href="#about" href="#about">
                            <HoverLinks text="ABOUT ME" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#whatido" href="#whatido">
                            <HoverLinks text="WHAT I DO" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#education" href="#education">
                            <HoverLinks text="EDUCATION" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#work" href="#work">
                            <HoverLinks text="WORK" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#achievements" href="#achievements">
                            <HoverLinks text="ACHIEVEMENTS" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#certificates" href="#certificates">
                            <HoverLinks text="CERTIFICATES" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#techstack" href="#techstack">
                            <HoverLinks text="TECH STACK" />
                        </a>
                    </li>
                    <li>
                        <a data-href="#contact" href="#contact">
                            <HoverLinks text="CONTACT" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
            <div className="nav-fade"></div>
        </>
    );
};

export default Navbar;
