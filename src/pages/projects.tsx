import PageHeader from "../components/PageHeader.tsx";
import {projects} from "../assets/data/projects.ts";
import Project from "../components/Project.tsx";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";


export default function Projects() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className={"flex flex-col justify-start text-left mb-32"}>
            <PageHeader title={"Projects"}
                        subtitle={"A collection of the different startups, apps, websites and other\n" +
                            "                        things I've built"}/>

            <div className={"grid lg:grid-cols-2 gap-8 px-4 lg:px-24 mt-8 lg:mt-20"}>
                {projects.map(project => <Project title={project.title}
                                                  description={project.description} image={project.image}
                                                  primaryCTAText={project.primaryCTAText}
                                                  primaryCTAUrl={project.primaryCTAUrl}
                                                  secondaryCTAUrl={project.secondaryCTAUrl}
                                                  secondaryCTAText={project.secondaryCTAText}
                />)}

            </div>

        </div>
    )
}