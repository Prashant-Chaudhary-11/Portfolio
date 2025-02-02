import javaScript from "../static/javaScript.png";
import html from "../static/html.png";
import css from "../static/css.png";
import Bootstrap from "../static/Bootstrap.png";
import git from "../static/git.png";
import jQuery from "../static/jQuery.png";
import mySQL from "../static/mySQL.png";
import php from "../static/php.png";
import python from "../static/python.png";
import react from "../static/react.png";
import redux from "../static/redux.png";
import svelte from "../static/svelte.png";

const skillsData = [
    { name: "JavaScript", img: javaScript },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Bootstrap", img: Bootstrap },
    { name: "Git", img: git },
    { name: "jQuery", img: jQuery },
    { name: "MySQL", img: mySQL },
    { name: "PHP", img: php },
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Redux", img: redux },
    { name: "Svelte", img: svelte }
];

export const Skills = () => {
    return (
        <section id="skills">
            <h1 className="text-center">My Skills</h1>
            <div className="d-flex flex-wrap justify-content-center skills mx-auto">
                {skillsData.map((skill, index) => (
                    <div key={index} className="d-flex align-items-center justify-content-center flex-column m-3 skillsDiv">
                        <img src={skill.img} alt={skill.name} className="skillImg"/>
                        <div>{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};
