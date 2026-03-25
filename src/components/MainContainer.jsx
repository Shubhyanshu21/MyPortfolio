import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import Achievements from "./Achievements";
import Certificates from "./Certificates";
import setSplitText from "./utils/splitText";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }) => {
    const [isDesktopView, setIsDesktopView] = useState(
        window.innerWidth > 1024
    );

    useEffect(() => {
        let timeoutId;
        const resizeHandler = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setSplitText();
                setIsDesktopView(window.innerWidth > 1024);
            }, 250);
        };
        // Run once on mount
        setSplitText();
        setIsDesktopView(window.innerWidth > 1024);
        
        window.addEventListener("resize", resizeHandler);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <div className="container-main">
            <Cursor />
            <Navbar />
            <SocialIcons />
            {isDesktopView && children}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <div className="container-main">
                        <Landing>{!isDesktopView && children}</Landing>
                        <About />
                        <WhatIDo />
                        <Career />
                        <Work />
                        <Achievements />
                        <Certificates />
                        {isDesktopView && (
                            <Suspense fallback={<div>Loading....</div>}>
                                <TechStack />
                            </Suspense>
                        )}
                        <Contact />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContainer;
