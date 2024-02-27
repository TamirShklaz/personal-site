export type NavbarProps = {
    className?: string
}

export const BASE_URL = "personal-site"
export default function Navbar({className}: NavbarProps) {
    return (
        <div className={className}>
            <div className="text-slate-500 space-y-6 py-7 text-left p-4 mt-[140px]">
                <nav>
                    <a href="/"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Home</a>
                    <a href={`https://tamirshklaz.medium.com/`} target={"_blank"}
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Blog</a>
                    <a href="/personal-site/about"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">About</a>
                    <a href={`/${BASE_URL}/projects`}
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Projects</a>
                    {/*<a href="/personal-site/creative-coding"*/}
                    {/*   className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Creative*/}
                    {/*    Coding</a>*/}
                </nav>
            </div>
        </div>

    );
}