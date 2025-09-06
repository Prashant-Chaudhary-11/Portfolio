export const Experience = () => {
    return (
        <section id="experience">
            <div className="mx-3">
                <h1 className="text-center mb-3">Experience</h1>
                <div className="vertical-timeline">

                    {/* uCertify Experience */}
                    <span className="vertical-timeline-element-icon bounce-in">
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M17 7C17 5.34315 15.6569 4 14 4H10C8.34315 4 7 5.34315 7 7H6C4.34315 7 3 8.34315 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.34315 19.6569 7 18 7H17ZM14 6H10C9.44772 6 9 6.44772 9 7H15C15 6.44772 14.5523 6 14 6ZM6 9H18C18.5523 9 19 9.44772 19 10V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V10C5 9.44772 5.44772 9 6 9Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>

                    <div className="mx-auto experience p-4 rounded-3 position-relative">
                        <i className="fa-solid fa-caret-left position-absolute arrowIcon"></i>
                        
                        <div className="mb-2 fw-bold experienceHeadings">Sr. Application Developer</div>
                        <div className="mb-2 fw-bold experienceHeadings">uCertify</div>

                        <div className="mb-2">
                            Played a key role in enhancing the uCertify platform by improving functionality,
                            system performance, and ensuring optimal user experience.
                        </div>
                        <ul className="mb-2">
                            <li>Migrated from Bootstrap 4 to Bootstrap 5.3 → achieved 30% faster page load speed.</li>
                            <li>Automated catalog mapping with AI + Pinecone → reduced manual effort by 95%.</li>
                            <li>Developed innovative modules: Hardware Lab, Virtual Sandbox, and SCORM → used by 10,000+ learners monthly.</li>
                            <li>Enhanced UI/UX of 20+ modules → improved overall usability and accessibility.</li>
                            <li>Built AI Auto Create Tool (Python + FastAPI) → boosted content creation efficiency by 50%.</li>
                            <li>Created AI-powered Slide Generator that converts text into structured presentations.</li>
                            <li>Collaborated with Google’s core AI team → built a system to process entire books into questions, slides & videos (70% less manual work).</li>
                            <li>Implemented WCAG 2.1 accessibility standards → improved inclusivity and compliance.</li>
                        </ul>

                        <div className="mb-2 small yellowWords">February 2023 - Present</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
