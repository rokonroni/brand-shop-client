import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "../../layout/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Brand Shop || Home</title>
            </Helmet>
            <Navbar/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;