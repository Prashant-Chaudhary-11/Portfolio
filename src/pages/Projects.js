export const Projects = () => {
    return (
        <section id="projects">
            <div className="projects p-3">
                <h1 className="text-center">Projects</h1>
                <div className="mx-auto projectsDiv p-4 rounded-3 my-3">
                    <div className="mb-2 yellowWords">CryptoCrowd</div>
                    <div className="mb-2">Made with: HTML, CSS, JavaScript, Bootstrap</div>
                    <div className="mb-2">Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.</div>
                    <div className="mt-3">
                        <button className="myBtn outlineBtn me-3"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</button>
                        <button className="myBtn outlineBtn"><i class="fa-brands fa-github"></i> GitHub</button>
                    </div>
                </div>
                <hr className="projectLine"/>
                <div className="mx-auto projectsDiv p-4 rounded-3 my-3">
                    <div className="mb-2 yellowWords">CryptoCrowd</div>
                    <div className="mb-2">Made with: HTML, CSS, JavaScript, Bootstrap</div>
                    <div className="mb-2">Cryptocurrency sentiment analysis website based on Twitter posts. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently posting on Twitter. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.</div>
                    <div className="mt-3">
                        <button className="myBtn outlineBtn me-3"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</button>
                        <button className="myBtn outlineBtn"><i class="fa-brands fa-github"></i> GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}