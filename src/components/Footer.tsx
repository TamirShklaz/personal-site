import {IoLogoLinkedin} from "react-icons/io";
import {IoLogoInstagram} from "react-icons/io5";
import {IoLogoGithub} from "react-icons/io";


export type FooterProps = {
    className?: string

}
export default function Footer({className}: FooterProps) {
    return <footer className={className + " " + "flex flex-col bg-gray-50 lg:bg-white"}>
        <div className={"flex flex-row mb-4"}>
            <a href={"https://www.linkedin.com/in/tamir-shklaz/"} target={"_blank"}>
                <IoLogoLinkedin
                    className={"text-gray-400 text-4xl mr-2 hover:cursor-pointer"}/>
            </a>
            <a href={"https://www.instagram.com/tamirshklaz/feed/"} target={"_blank"}>
                <IoLogoInstagram
                    className={"text-gray-400 text-4xl mr-2 hover:cursor-pointer"}/>
            </a>
            <a href={"https://github.com/TamirShklaz"} target={"_blank"}>
                <IoLogoGithub
                    className={"text-gray-400 text-4xl hover:cursor-pointer"}/>
            </a>

        </div>
        <a href={"https://github.com/TamirShklaz/personal-site"} target={"_blank"}
           className={"text-gray-400 font-medium hover:underline text-left"}>View source</a>


    </footer>
}