import profileImage from "../public/profile.jpeg";
import Project from "./components/Project.tsx";
import strive_picture from '../public/strive_picture.jpeg'
import insupply_picture from '../public/insupply_picture.png'
import strive_blog_post from '../public/strive_blog_post.webp'
import yc_blog from '../public/yc_blog.webp'

import BlogListItem from "./components/BlogListItem.tsx";
import Button from "./components/Button.tsx";

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
                             subtitle={"I was the Founder & CTO of Strive, " +
                                 "an online coding school for kids that empowered more than 1000 students to find a" +
                                 " passion for coding, we raised $1.3M USD to pioneer a world first approach of teaching math through code."}
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
                    <Button className={"w-fit"}>View projects</Button>

                </div>

                <h1 className={"mt-16"}>Featured blog posts</h1>
                <div className={"flex-col mt-4"}>
                    <BlogListItem title={"We Raised $1.3M to Transform How Kids Learn to Code"}
                                  tags={["Startups", "Education", "Tech"]}
                                  date={"Feb 22 2023"}
                                  description={"Let me be the umpteenth person to remind you that coding is the most crucial skill of the 21st century. By now, you might feel like this point is being overstated. Career counselors, teachers, and the news have been feeding us this message ad nauseam for over a decade. However, when you look at the massive demand for coding skills across the globe — and the severe shortage of them — it’s clear that the problem still needs solving."}
                                  image={strive_blog_post} url={""} minsToRead={7}/>
                    <div className={"border-[1px] border-gray-300 w-full my-8"}></div>

                    <BlogListItem title={"Getting into YC after being rejected 4 times"}
                                  tags={["Startups"]}
                                  date={"Oct 15, 2021"}
                                  description={"Four times! I got rejected by YC four times before finally being accepted into the YCS21 batch."}
                                  image={yc_blog} url={""} minsToRead={2}/>

                    <Button className={"mt-8"} onClick={() => window.open("https://tamirshklaz.medium.com/", "_blank")}>Read
                        Blog</Button>
                </div>

            </div>
        </div>
    )
}