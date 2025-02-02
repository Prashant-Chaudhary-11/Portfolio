import { useState, useEffect } from 'react';

export const Header = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = 'home';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 300) {
                    currentSection = section.getAttribute('id');
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="header p-2 mt-3 d-flex flex-wrap justify-content-between position-sticky mx-auto z-3">
            <a href="#home" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'home' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-house"></i></span>
                    <span className='headerText'>Home</span>
                </div>
            </a>
            <a href="#projects" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'projects' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-list-check"></i></span>
                    <span className='headerText'>Projects</span>
                </div>
            </a>
            <a href="#skills" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'skills' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-code"></i></span>
                    <span className='headerText'>Skills</span>
                </div>
            </a>
            <a href="#experience" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'experience' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-building"></i></span>
                    <span className='headerText'>Experience</span>
                </div>
            </a>
            <a href="#education" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'education' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-user-graduate"></i></span>
                    <span className='headerText'>Education</span>
                </div>
            </a>
            <a href="#contact" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'contact' ? 'active' : ''}`}>
                <div className='d-flex align-items-center justify-content-center flex-column'>
                    <span className='headerIcons'><i className="fa-solid fa-address-book"></i></span>
                    <span className='headerText'>Contact</span>
                </div>
            </a>
        </div>
    );
};
