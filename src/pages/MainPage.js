import { Contact } from "./Contact"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { Home } from "./Home"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

export const MainPage = () => {
    return (
        <div>
            <Home/>
            <Projects/>
            <Skills/>
            <Experience/>
            <Education/>
            <Contact/>
        </div>
    )
}