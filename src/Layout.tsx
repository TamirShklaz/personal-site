import {Outlet} from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
// Import your Navbar, Sidebar, Footer, etc.


const Layout = () => {
    return (
        <div className={"flex flex-col lg:flex-row min-h-screen max-w-full w-full justify-center p-0"}>
            <Navbar className={"sticky z-30 lg:h-screen top-0"}/>
            <main className={"max-w-full lg:border-l-2 lg:border-r-2 border-gray-300 lg:flex-grow-1 lg:w-9/12 "}>

                {/* Outlet will render the matched route's component here */}
                <Outlet/>
            </main>
            <Footer className={"sticky z-30 lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-end p-4"}/>
        </div>
    );
};

export default Layout;