export type BlogListItem = {
    className?: string;
    title: string;
    description: string;
    image: string;
    url: string;
    minsToRead: number;
    tags?: string[]
    date: string
}

export default function BlogListItem({
                                         title,
                                         description,
                                         image,
                                         url,
                                         minsToRead,
                                         tags,
                                         className,
                                         date
                                     }: BlogListItem) {

    const getTruncatedDescription = () => {
        console.log(url)
        return description.substring(0, 150) + "..."
    }

    return (
        <div>
            <p className={"text-xs text-gray-500 mb-1"}>{date}</p>
            <div className={"flex flex-row hover:cursor-pointer " + className}>
                <div className={"flex-col mr-4"}>
                    <h3 className={"text-lg font-bold lg:text-xl"}>{title}</h3>
                    <p className={"mt-2 text-gray-600 hidden lg:block"}>{getTruncatedDescription()}</p>
                    <div className={"flex flex-col-reverse align-bottom mt-2 lg:mt-4 lg:items-center lg:flex-row"}>
                        <div className={"flex flex-row mt-2 lg:mt-0"}>
                            {tags && tags.map(tag => <span
                                className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">{tag}</span>)}
                        </div>

                        <p className={"text-gray-500 text-sm"}>{minsToRead} min read</p>
                    </div>
                </div>
                <img className={"w-[80px] h-[56px] lg:w-[126px] lg:h-[126px] object-cover rounded-xl"} src={image}
                     alt={title}/>
            </div>
        </div>
    )
}