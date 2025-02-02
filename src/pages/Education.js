import collegeLogoSmall from '../static/collegeLogo_small.png';

export const Education = () => {
    return (
        <section id="education">
            <div className="mx-3">
                <h1 className="text-center mb-3">Education</h1>
                <div className="row mx-auto education p-4 rounded-3">
                    <div className="col-4">
                        <img src={collegeLogoSmall} alt="College Logo" className="college-logo large-logo w-100 h-auto rounded-4" />
                    </div>
                    <div className="col-8">
                        <div className="mb-2">Bachelor of Technology (B.Tech.)</div>
                        <div className="mb-2">Hindustan College of Science & Technology</div>
                        <div className="mb-2">Graduated in 2023</div>
                        <div className="mb-2">CGPA 7.9/10</div>
                    </div>
                </div>
            </div>
        </section>
    );
};
