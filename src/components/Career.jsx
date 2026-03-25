import "./styles/Career.css";

const Career = () => {
    return (
        <div className="career-section section-container" id="education">
            <div className="career-container">
                <h2>
                    My Education
                    <br /> Qualifications
                </h2>
                <div className="career-info">
                    <div className="career-timeline">
                        <div className="career-dot"></div>
                    </div>
                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>B.Tech – Computer Science & Engineering</h4>
                                <h5>Lovely Professional University, Phagwara, Punjab</h5>
                            </div>
                            <h6 style={{ fontSize: "0.85rem", fontWeight: "normal", opacity: 0.8, marginTop: "8px" }}>Aug'23 - Present</h6>
                        </div>
                        <p>
                            Pursuing Bachelor of Technology with a CGPA of 7.03. Building a strong foundation in full-stack
                            development, data structures, algorithms, and software engineering.
                        </p>
                    </div>

                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Intermediate (12th)</h4>
                                <h5>Toolika Public School, Ghazipur, UP</h5>
                            </div>
                            <h6 style={{ fontSize: "0.85rem", fontWeight: "normal", opacity: 0.8, marginTop: "8px" }}>Mar'22</h6>
                        </div>
                        <p>
                            Completed Intermediate education with 70% marks.
                            Developed strong analytical and problem-solving skills.
                        </p>
                    </div>
                    <div className="career-info-box">
                        <div className="career-info-in">
                            <div className="career-role">
                                <h4>Matriculation (10th)</h4>
                                <h5>Toolika Public School, Ghazipur, UP</h5>
                            </div>
                            <h6 style={{ fontSize: "0.85rem", fontWeight: "normal", opacity: 0.8, marginTop: "8px" }}>Mar'20</h6>
                        </div>
                        <p>
                            Completed Matriculation with 89.6% marks.
                            Strong academic foundation with excellence in mathematics and science.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career;
