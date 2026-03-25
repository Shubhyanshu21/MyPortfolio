import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdContentCopy, MdCheck } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("shubhyanshu2107@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="contact-section section-container" id="contact">
            <div className="contact-container">
                <h3>Contact</h3>
                <div className="contact-flex">
                    <div className="contact-box">
                        <h4>Email</h4>
                        <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <a href="mailto:shubhyanshu2107@gmail.com" data-cursor="disable">
                                shubhyanshu2107@gmail.com
                            </a>
                            <button
                                onClick={handleCopy}
                                data-cursor="disable"
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "var(--accentColor)",
                                    cursor: "pointer",
                                    fontSize: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "5px",
                                }}
                                aria-label="Copy email"
                            >
                                {copied ? <MdCheck /> : <MdContentCopy />}
                            </button>
                        </p>
                        <h4>Education</h4>
                        <p>B.Tech in Computer Science & Engineering</p>
                        <p>Lovely Professional University</p>
                    </div>
                    <div className="contact-box">
                        <h4>Social</h4>
                        <a
                            href="https://github.com/Shubhyanshu21"
                            target="_blank"
                            data-cursor="disable"
                            className="contact-social"
                        >
                            Github <MdArrowOutward />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shubhyanshu-pandey-546515288/"
                            target="_blank"
                            data-cursor="disable"
                            className="contact-social"
                        >
                            Linkedin <MdArrowOutward />
                        </a>
                    </div>
                    <div className="contact-box">
                        <h2>
                            Designed and Developed <br /> by <span>Shubhyanshu Pandey</span>
                        </h2>
                        <h5>
                            <MdCopyright /> 2026
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
