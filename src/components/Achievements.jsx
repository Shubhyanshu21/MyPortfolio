import "./styles/Achievements.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
    {
        title: "5⭐ in C++ on HackerRank",
        description: "Achieved maximum rating demonstrating deep proficiency in C++ and algorithmic problem solving."
    },
    {
        title: "100+ Data Structures & Algorithms Problems",
        description: "Solved across platforms including LeetCode, HackerRank, Codeforces, and GeeksforGeeks."
    },
    {
        title: "State-Level Short Film Contest",
        description: "Selected to represent LPU, highlighting the cultural impact on youth migration choices."
    }
];

const Achievements = () => {
    return (
        <div className="achievements-section" id="achievements">
            <div className="achievements-container section-container">
                <h2 className="title">My <span>Achievements</span></h2>
                <div className="cards-grid">
                    {achievements.map((item, index) => (
                        <div 
                            className="card card-glow" 
                            key={index} 
                            data-cursor="hover"
                        >
                            <div className="card-bg"></div>
                            <div className="card-inner">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
