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
        <div className="header p-2 mt-3 d-flex flex-wrap justify-content-between position-sticky top-0 mx-auto z-3">
            <a href="#home" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#projects" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
            <a href="#skills" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'skills' ? 'active' : ''}`}>Skills</a>
            <a href="#experience" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'experience' ? 'active' : ''}`}>Experience</a>
            <a href="#education" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'education' ? 'active' : ''}`}>Education</a>
            <a href="#contact" className={`text-decoration-none header_pills py-2 px-3 ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>
    );
};
