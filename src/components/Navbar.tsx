export type NavbarProps = {
    className?: string
}
export default function Navbar({className}: NavbarProps) {
    return (
        <div className={className}>
            <div className="text-slate-500 space-y-6 py-7 text-left p-8">
                <nav>
                    <a href="#"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Home</a>
                    <a href="#"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">About</a>
                    <a href="#"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-900">Services</a>
                    <a href="#"
                       className="block py-2.5  rounded transition duration-200 hover:text-slate-9000">Contact</a>
                </nav>
            </div>
        </div>

    );
}