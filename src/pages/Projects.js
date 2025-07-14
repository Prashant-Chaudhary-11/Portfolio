export const Projects = () => {
    return (
        <section id="projects">
            <div className="projects p-3">
                <h1 className="text-center">Projects</h1>

                {/* Chat with PDF Project */}
                <div className="mx-auto projectsDiv p-4 rounded-3 my-3">
                    <div className="mb-2 yellowWords">Chat with PDF</div>
                    <div className="mb-2">
                        Made with: HTML, JavaScript (Vanilla), Python (FastAPI), PDF.js, Gemini Pro API, TF-IDF
                    </div>
                    <div className="mb-2">
                        A full-stack web app where users can upload a PDF, ask questions about it, and receive answers based on the document’s content using vector search and Gemini Pro. Features include PDF preview on the left, chat interface on the right, text chunking with TF-IDF, and semantic search via cosine similarity. Gemini API is used to generate context-aware answers.
                    </div>
                    <div className="mb-2">
                        Tech Highlights: PyMuPDF for parsing, FastAPI for backend, TF-IDF vector search, Gemini AI integration, and PDF.js frontend rendering.
                    </div>
                    <div className="mt-3">
                        {/* Optional: Add live demo button if available */}
                        <a href="https://chattingwithpdf.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="myBtn outlineBtn me-3">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                            </button>
                        </a>
                        <a href="https://github.com/Prashant-Chaudhary-11/Chat-with-PDF" target="_blank" rel="noopener noreferrer">
                            <button className="myBtn outlineBtn">
                                <i className="fa-brands fa-github"></i> GitHub
                            </button>
                        </a>
                    </div>
                </div>

                <hr className="projectLine" />

                {/* CryptoCrowd Project (unchanged) */}
                <div className="mx-auto projectsDiv p-4 rounded-3 my-3">
                    <div className="mb-2 yellowWords">CryptoCrowd</div>
                    <div className="mb-2">Made with: HTML, CSS, JavaScript, Bootstrap</div>
                    <div className="mb-2">
                        Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.
                    </div>
                    <div className="mt-3">
                        <button className="myBtn outlineBtn me-3">
                            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                        </button>
                        <button className="myBtn outlineBtn">
                            <i className="fa-brands fa-github"></i> GitHub
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
