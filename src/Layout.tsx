import {Outlet} from 'react-router-dom';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
// Import your Navbar, Sidebar, Footer, etc.


const Layout = () => {
    return (
        <div className={"flex flex-row min-h-screen max-w-screen-xl justify-center p-0"}>
            <Navbar className={"sticky z-30 h-screen top-0"}/>
            <main className={"border-l-2 border-r-2 border-gray-300 flex-grow-1 w-9/12"}>

                {/* Outlet will render the matched route's component here */}
                <Outlet/>
            </main>
            <Footer className={"sticky z-30 top-0 h-screen flex flex-col justify-end p-4"}/>
        </div>
    );
};

export default Layout;