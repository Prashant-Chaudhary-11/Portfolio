import { Footer } from "./Footer"
import { Header } from "./Header"
import { MainPage } from "../../pages/MainPage"

export const AppLayout = () => {
    return(
        <>
            <div className="">
                <Header/>
                <MainPage/>
                <Footer/>
            </div>
        </>
    )
}