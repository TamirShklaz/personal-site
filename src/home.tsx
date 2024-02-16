import profileImage from "../public/profile.jpeg";

export default function Home() {
    return (
        <div className={"flex flex-col justify-start text-left"}>
            <div className={"px-32 py-4 mt-[120px] flex"}>
                <div className={"mr-8"}>
                    <h1 className={"font-semibold size text-4xl" }>Hi, I'm Tamir 👋</h1>
                    <p className={"mt-4 text-gray-600"}>South African born 3x startup founder, in love with yoga, rock climbing and anything that gets me
                        out of my comfort zone</p>
                </div>
                <img className={"rounded-lg w-[256px] h-[312px] object-cover"} src={profileImage}/>
            </div>

            <div className={"border-[1px] border-gray-300 w-full"}></div>
        </div>
    )
}