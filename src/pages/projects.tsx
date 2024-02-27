import PageHeader from "../components/PageHeader.tsx";
import {projects} from "../assets/data/projects.ts";
import Project from "../components/Project.tsx";


export default function Projects() {
    return (
        <div className={"flex flex-col justify-start text-left"}>
            <PageHeader title={"Projects"}
                        subtitle={"A collection of the different startups, apps, websites and other\n" +
                            "                        things I've built"}/>

            <div className={"grid grid-cols-2 gap-8 px-24 mt-20"}>
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