import { useState } from "react";
import "./styles/TechStack.css";
import { FaPython, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiCplusplus, SiJavascript, SiTailwindcss, SiExpress, SiTypescript, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";

const skillsData = [
    { name: "Python", category: "LANGUAGES", icon: <FaPython color="#3776AB" />, bg: "" },
    { name: "C++", category: "LANGUAGES", icon: <SiCplusplus color="#00599C" />, bg: "" },
    { name: "JavaScript", category: "LANGUAGES", icon: <SiJavascript color="#F7DF1E" />, bg: "" },
    { name: "C", category: "LANGUAGES", icon: <span style={{fontWeight: 'bold', fontSize: '1.2em', color: '#A8B9CC'}}>C</span>, bg: "" },
    { name: "PHP", category: "LANGUAGES", icon: <FaPhp color="#777BB4" />, bg: "" },
    { name: "Java", category: "LANGUAGES", icon: <FaJava color="#E32D2D" />, bg: "" },
    
    { name: "HTML5", category: "WEB TECHNOLOGIES", icon: <FaHtml5 color="#E34F26" />, bg: "" },
    { name: "CSS", category: "WEB TECHNOLOGIES", icon: <FaCss3Alt color="#1572B6" />, bg: "" },
    { name: "Tailwind CSS", category: "WEB TECHNOLOGIES", icon: <SiTailwindcss color="#06B6D4" />, bg: "" },
    { name: "React.js", category: "WEB TECHNOLOGIES", icon: <FaReact color="#61DAFB" />, bg: "" },
    { name: "Node.js", category: "WEB TECHNOLOGIES", icon: <FaNodeJs color="#339933" />, bg: "" },
    { name: "Express.js", category: "WEB TECHNOLOGIES", icon: <SiExpress color="#FFFFFF" />, bg: "" },
    { name: "TypeScript", category: "WEB TECHNOLOGIES", icon: <SiTypescript color="#3178C6" />, bg: "" },
    
    { name: "MySQL", category: "DATABASES", icon: <SiMysql color="#4479A1" />, bg: "" },
    { name: "MongoDB", category: "DATABASES", icon: <SiMongodb color="#47A248" />, bg: "" },
    { name: "PostgreSQL", category: "DATABASES", icon: <SiPostgresql color="#336791" />, bg: "" },
    
    { name: "Operating Systems", category: "CORE CS", icon: "OP", bg: "#E34F26" },
    { name: "Computer Networks", category: "CORE CS", icon: "CO", bg: "#3178C6" },
    { name: "Data Structures and Algorithms", category: "CORE CS", icon: "DA", bg: "#47A248" },
    { name: "Object-Oriented Programming", category: "CORE CS", icon: "OB", bg: "#777BB4" },
];

const categories = ["ALL", "LANGUAGES", "WEB TECHNOLOGIES", "DATABASES", "CORE CS"];

const TechStack = () => {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filteredSkills = activeFilter === "ALL" 
        ? skillsData 
        : skillsData.filter(skill => skill.category === activeFilter);

    return (
        <div className="techstack" id="techstack">
            <h2 className="tech-title">Technical <span>Skills</span></h2>
            
            <div className="tech-filters">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        className={`tech-filter-btn ${activeFilter === cat ? "active" : ""}`}
                        onClick={() => setActiveFilter(cat)}
                        data-cursor="disable"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="tech-grid">
                {filteredSkills.map((skill, index) => (
                    <div className="tech-card" key={index} data-cursor="hover">
                        <div className="tech-icon">
                            {typeof skill.icon === 'string' ? (
                                <div className="tech-initials" style={{ backgroundColor: skill.bg }}>
                                    {skill.icon}
                                </div>
                            ) : (
                                skill.icon
                            )}
                        </div>
                        <h3 className="tech-name">{skill.name}</h3>
                        <p className="tech-category-label">{skill.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
