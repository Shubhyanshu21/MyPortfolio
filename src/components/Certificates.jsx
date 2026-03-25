import "./styles/Achievements.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
    {
        title: "NPTEL SWAYAM – Cloud Computing",
        issuer: "IIT Certified Course",
        date: "Oct 2025",
        link: "https://drive.google.com/file/d/1J_UQlaYzGe38HcMx0WekPX2D_MILHLQo/view?usp=drive_link"
    },
    {
        title: "Infosys – Computational Theory",
        issuer: "Infosys Certification",
        date: "Jul 2025",
        link: "https://drive.google.com/file/d/1rx6KxVuYRJ0zwEEhLdtKQK2Td0rnhcnL/view?usp=drive_link"
    },
    {
        title: "IBM – Introduction to Hardware & OS",
        issuer: "IBM",
        date: "Oct 2024",
        link: "https://drive.google.com/file/d/16VOsmqDCLuIl7LtPgll_5NjOyPOKg7Q3/view?usp=drive_link"
    },
    {
        title: "Meta – Intro to Front-End Development",
        issuer: "Meta",
        date: "Oct 2024",
        link: "https://drive.google.com/file/d/1Mko9wvWebod-XQcXFF7JUrJZ04WoDvW7/view?usp=drive_link"
    }
];

const Certificates = () => {
    return (
        <div className="certificates-section" id="certificates">
            <div className="achievements-container section-container">
                <h2 className="title">My <span>Certificates</span></h2>
                <div className="cards-grid">
                    {certificates.map((cert, index) => (
                        <a 
                            href={cert.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="card card-glow cert-card" 
                            key={index} 
                            data-cursor="hover"
                        >
                            <div className="card-bg"></div>
                            <div className="card-inner cert-inner">
                                <div className="cert-header">
                                    <h3>{cert.title}</h3>
                                    <span><MdArrowOutward /></span>
                                </div>
                                <p className="issuer">{cert.issuer}</p>
                                <p className="date">{cert.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
