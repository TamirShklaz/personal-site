import profileImage from "../public/profile.jpeg";
import Project from "./components/Project.tsx";
import strive_blog_post from '../public/strive_blog_post.webp'
import yc_blog from '../public/yc_blog.webp'

import BlogListItem from "./components/BlogListItem.tsx";
import Button from "./components/Button.tsx";
import {projects} from "./assets/data/projects.ts";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Home() {
    const navigate = useNavigate()
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className={"flex flex-col justify-start text-left max-w-full"}>
            <div className={"px-4 lg:px-24 py-4 lg:mt-[120px] flex flex-col lg:flex-row"}>
                <div className={"mr-8"}>
                    <h1 className={"font-semibold size text-3xl lg:text-4xl"}>Hi, I'm Tamir 👋</h1>
                    <p className={"mt-4 text-gray-600"}>South African born 3x startup founder, in love with yoga, rock
                        climbing and anything that gets me
                        out of my comfort zone</p>
                </div>
                <img
                    className={"mt-4 hidden lg:block rounded-lg w-[128px] h-[156px] lg:w-[256px] lg:h-[312px] object-cover"}
                    src={profileImage}/>
            </div>


            <div className={"border-[1px] border-gray-300 w-full"}></div>
            <div className={"py-4 px-4 lg:px-24"}>
                <h1 className={"my-8"}>Featured projects</h1>

                <div className={"grid lg:grid-cols-2 gap-8 mt-8"}>
                    {projects.slice(0, 2).map(project => <Project title={project.title}
                                                                  description={project.description}
                                                                  image={project.image}
                                                                  primaryCTAText={project.primaryCTAText}
                                                                  primaryCTAUrl={project.primaryCTAUrl}
                                                                  secondaryCTAUrl={project.secondaryCTAUrl}
                                                                  secondaryCTAText={project.secondaryCTAText}
                    />)}

                </div>


                <Button onClick={() => navigate("/projects", {preventScrollReset: false})} className={"w-fit mt-8"}>View
                    projects</Button>

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