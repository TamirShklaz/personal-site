import Button from "./Button.tsx";

export type ProjectProps = {
    className?: string;
    title: string;
    description: string;
    image: string;
    primaryCTAText: string;
    secondaryCTAText?: string;
    primaryCTAUrl: string;
    secondaryCTAUrl?: string;
}

export default function Project({
                                    className,
                                    title,
                                    description,
                                    image,
                                    primaryCTAText,
                                    secondaryCTAText,
                                    primaryCTAUrl,
                                    secondaryCTAUrl
                                }: ProjectProps) {
    return (
        <div
            className={"border-[1px] border-gray-300 drop-shadow-xl rounded-2xl hover:drop-shadow-2xl hover:cursor-pointer hover:bg-gray-100 " + className}>
            <img src={image} className={"rounded-t-2xl min-h-[250px] object-cover"}/>
            <div className={"p-4"}>
                <h3 className={"text-2xl"}>
                    {title}
                </h3>
                <p className={"text-gray-600 mt-2"}>
                    {description}
                </p>

                <div className={"mt-4 flex flex-col"}>
                    <Button onClick={() => window.open(primaryCTAUrl, "_blank")}>{primaryCTAText}</Button>
                    {secondaryCTAUrl && <Button onClick={() => window.open(secondaryCTAUrl, "_blank")}
                                                secondary>{secondaryCTAText}</Button>
                    }
                </div>


            </div>
        </div>
    )
}