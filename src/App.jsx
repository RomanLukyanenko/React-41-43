import { NavigationBar } from "./sections/Navigation"
import { Cataloge } from "./sections/Cataloge"
import { HotOffer } from "./sections/HotOffer"
import "./App.css"
import { Gallary } from "./sections/Gallary"
import { Footer } from "./sections/Footer"
import { Cart } from "./sections/Cart"

export const App = () => {
    return(
    <>
        <NavigationBar />
        <Cataloge />
        <HotOffer />
        <Gallary />
        <Footer />
        <Cart />
    </> 
    )
}
