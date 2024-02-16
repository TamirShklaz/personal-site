import {Outlet} from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
// Import your Navbar, Sidebar, Footer, etc.


const Layout = () => {
    return (
        <div className={"flex flex-row min-h-screen max-w-screen-xl justify-center p-0"}>
            <Navbar className={"mt-[120px]"}/>
            <main className={"border-l-2 border-r-2 border-gray-300 flex-grow-1 w-[800px]"}>

                {/* Outlet will render the matched route's component here */}
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;