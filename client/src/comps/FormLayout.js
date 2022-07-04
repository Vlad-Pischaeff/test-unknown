import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FormLayout = () => {
    return (
        <div className="content">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default FormLayout;