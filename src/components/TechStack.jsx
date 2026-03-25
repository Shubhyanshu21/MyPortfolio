import "./styles/TechStack.css";

const techCategories = [
    { title: "Languages", skills: ["Python", "C", "C++", "Java", "PHP", "JavaScript"] },
    { title: "Web Technologies", skills: ["HTML5", "CSS3", "Tailwind CSS", "Node.js", "React.js", "Express.js"] },
    { title: "Databases", skills: ["MySQL", "MongoDB", "PostgreSQL"] },
    { title: "Core CS", skills: ["Data Structures and Algorithms", "Operating Systems", "Computer Networks", "Object-Oriented Programming"] }
];

const TechStack = () => {
    return (
        <div className="techstack" id="techstack">
            <h2> My Techstack</h2>
            <div className="tech-categories-container">
                {techCategories.map((cat, i) => (
                    <div className="tech-category-box" key={i}>
                        <h3>{cat.title}</h3>
                        <div className="tech-skills-list">
                            {cat.skills.map((skill, j) => (
                                <span className="tech-skill-pill" key={j}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
