import profileImage from "../public/profile.jpeg";
import Project from "./components/Project.tsx";
import strive_picture from '../public/strive_picture.jpeg'
import insupply_picture from '../public/insupply_picture.png'

export default function Home() {
    return (
        <div className={"flex flex-col justify-start text-left"}>
            <div className={"px-24 py-4 mt-[120px] flex"}>
                <div className={"mr-8"}>
                    <h1 className={"font-semibold size text-4xl"}>Hi, I'm Tamir 👋</h1>
                    <p className={"mt-4 text-gray-600"}>South African born 3x startup founder, in love with yoga, rock
                        climbing and anything that gets me
                        out of my comfort zone</p>
                </div>
                <img className={"rounded-lg w-[256px] h-[312px] object-cover"} src={profileImage}/>
            </div>


            <div className={"border-[1px] border-gray-300 w-full"}></div>
            <div className={"py-4 px-24"}>
                <h1 className={"my-8"}>Featured projects</h1>
                <div className={"grid grid-cols-2 gap-8"}>
                    <Project title={"Strive (YC S21)"}
                             subtitle={"I was the Founder & CTO of Strive, an online coding school for kids that empowered more than 1000 students to find a passion for coding and pioneered a world first approach of teaching math through code."}
                             image={strive_picture}
                             primaryCTAText={"Visit Website"}
                             primaryCTAUrl={"https://www.strivemath.com/"}
                             secondaryCTAUrl={"https://techcrunch.com/2023/02/20/strive/"}
                             secondaryCTAText={"Read Tech Crunch Article"}/>
                    <Project title={"Insupply"}
                             subtitle={"I was the Founder & CEO/CTO of Insupply, A marketplace for trusted buyers and supplies of PPE equipment during COVID-19. We worked with the South African presidency and listed 50M+ items of PPE, and received requests for more than 100M items of PPE ($1Bn in value) in < 6 months "}
                             image={insupply_picture}
                             primaryCTAText={"Watch TV Interview"}
                             primaryCTAUrl={"https://www.linkedin.com/posts/tamir-shklaz_youth-youthday-ppe-activity-6678678322618085377-vTjT?utm_source=share&utm_medium=member_desktop"}
                    />

                </div>

                <h1 className={"mt-8"}>Featured blog posts</h1>

            </div>
        </div>
    )
}