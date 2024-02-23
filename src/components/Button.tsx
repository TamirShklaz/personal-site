export type ButtonProps = {
    className?: string;
    children: React.ReactNode;
    secondary?: boolean;
    onClick?: () => void;
}

const primaryClass = "text-black bg-gray-100 hover:bg-black hover:text-white font-medium rounded-xl text-sm px-5 py-2.5 mb-2 shadow-none border-[1px] border-black"
const secondaryClass = "font-medium text-black hover:underline p-2 text-sm"
export default function Button({className, children, secondary, onClick}: ButtonProps) {
    return <button onClick={onClick}
                   className={className + " " + (secondary ? secondaryClass
                       : primaryClass)}>
        {children}
    </button>
}