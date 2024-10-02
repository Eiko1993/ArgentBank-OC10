import { Provider } from "react-redux";
import "../../css/main.css";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Features from "../Components/Features";
import Footer from "../Components/Footer";

function Index(){
    return(
        <div>
            <Header />
            <Banner />
            <Features />
            <Footer />
        </div>
    )
}

export default Index;