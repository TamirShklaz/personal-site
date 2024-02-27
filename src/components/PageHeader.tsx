export type PageHeaderProps = {
    title: string
    subtitle: string
    className?: string
}

export default function PageHeader({title, subtitle, className}: PageHeaderProps) {
    return (
        <div className={"flex flex-col justify-start text-left" + " " + className}>
            <div className={"px-4 lg:px-24 py-4 lg:mt-[120px] flex"}>
                <div className={"mr-8"}>
                    <h1 className={"font-semibold size text-4xl"}>{title}</h1>
                    <p className={"mt-4 text-gray-600"}>{subtitle} </p>
                </div>
            </div>
            <div className={"border-[1px] border-gray-300 w-full"}></div>

        </div>
    )
}