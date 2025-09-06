export const Projects = () => {
    return (
        <section id="projects">
            <div className="projects p-3">
                <h1 className="text-center">Projects</h1>

                {/* ZyraWear Project */}
                <div className="mx-auto projectsDiv p-4 rounded-3 my-3">
                    <div className="mb-2 yellowWords">ZyraWear</div>
                    <div className="mb-2">
                        Made with: React.js, Bootstrap 5, React Router, Font Awesome
                    </div>
                    <div className="mb-2">
                        ZyraWear is a modern e-commerce platform designed to provide a stylish and smooth shopping
                        experience. It features product browsing, product details, wishlist, shopping cart, login/register
                        system, and a custom 404 page. Built with React and Bootstrap 5 for a fully responsive UI.
                    </div>
                    <div className="mb-2">
                        Tech Highlights: React Router v6 for navigation, Bootstrap 5 for responsive design,
                        Font Awesome icons, and modular reusable components for scalability.
                    </div>
                    <div className="mt-3">
                        <a href="https://zyrawear.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="myBtn outlineBtn me-3">
                                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live
                            </button>
                        </a>
                        <a href="https://github.com/Prashant-Chaudhary-11/ZyraWear" target="_blank" rel="noopener noreferrer">
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
                        Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment
                        (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting
                        on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses
                        Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.
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
