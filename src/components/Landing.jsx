import "./styles/Landing.css";

const Landing = ({ children }) => {
    return (
        <>
            <div className="landing-section" id="landingDiv">
                <div className="landing-container">
                    <div className="landing-intro">
                        <h2>Hello! I'm</h2>
                        <h1>
                            SHUBHYANSHU
                            <br />
                            <span>PANDEY</span>
                        </h1>
                    </div>
                    <div className="landing-info">
                        <h3>A Full Stack</h3>
                        <h2 style={{ marginTop: 0, marginLeft: 0 }}>
                            <div className="landing-h2-info">Engineer</div>
                        </h2>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};

export default Landing;
