import prashantImage from '../static/prashant1.png';

export const Home = () => {
    return (
        <section id="home" className='pt-3'>
            <div className="row mx-0">
                <div className="col-lg-6 col-md-12 col-sm-12 px-5 d-flex justify-content-center align-items-center">
                    <div className="home-text lh-lg">
                        <h3 className="home-title">Hi 👋</h3>
                        <h1 className="home-name">I'm Prashant Chaudhary</h1>
                        <h1>a Creative <span className='yellowWords'>Web Developer</span></h1>
                        <p className='my-3'>I'm an experienced full-stack web developer skilled in building dynamic and responsive websites, with a strong focus on delivering high-quality solutions.</p>
                        <div>
                            <button className='yellowButton myBtn'>Download CV</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-center p-3 d-flex justify-content-center align-items-center">
                    <div className="image-container rounded-3 position-relative">
                        <img src={prashantImage} alt="Prashant Chaudhary" className="paint-img w-100 h-100" />
                        <div className='position-absolute start-0 bottom-0 iconsDiv p-2 rounded-end-4'>
                            <i class="fa-brands socialIcons d-flex align-items-center justify-content-center mb-2 rounded-circle fa-linkedin-in"></i>
                            <i class="fa-brands socialIcons d-flex align-items-center justify-content-center mb-2 rounded-circle fa-github"></i>
                            <i class="fa-brands socialIcons d-flex align-items-center justify-content-center mb-2 rounded-circle fa-instagram"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
