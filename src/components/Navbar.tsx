import {useState} from "react";

export type NavbarProps = {
    className?: string
}

export const BASE_URL = "personal-site"
export default function Navbar({className}: NavbarProps) {

    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <nav
            className={className + " " + "py-2 bg-gray-50 border-gray-200 text-slate-500 lg:bg-white lg:space-y-6 lg:py-7 lg:text-left lg:p-4 lg:mt-[140px]"}>
            <div className={"flex flex-wrap justify-between mx-auto items-center"}>
                <a>

                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button"
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isNavOpen ? "flex" : "hidden"} w-full lg:block flex-col lg:p-4`}
                     id="navbar-solid-bg">
                    <a href="/"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Home</a>
                    <a href={`https://tamirshklaz.medium.com/`} target={"_blank"}
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Blog</a>
                    <a href="/personal-site/about"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">About</a>
                    <a href={`/${BASE_URL}/projects`}
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Projects</a>
                </div>
            </div>


            {/*<a href="/personal-site/creative-coding"*/}
            {/*   className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Creative*/}
            {/*    Coding</a>*/}
        </nav>
    );
}