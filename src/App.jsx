import { NavigationBar } from "./sections/Navigation"
import { Cataloge } from "./sections/Cataloge"
import { HotOffer } from "./sections/HotOffer"
import { Gallary } from "./sections/Gallary"
import { Footer } from "./sections/Footer"
import { Cart } from "./sections/Cart"
import { Icons } from "./util/Icons"
import "./App.css"

export const App = () => {
    return(
    <>
        <NavigationBar />
        <Cataloge />
        <HotOffer />
        <Gallary />
        <Footer />
        <Icons />
        <Cart />
    </> 
    )
}
