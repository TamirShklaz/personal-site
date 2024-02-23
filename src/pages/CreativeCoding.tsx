import PageHeader from "../components/PageHeader.tsx";
import P5Sketch from "../components/P5Sketch.tsx";

export default function CreativeCoding() {
    return (
        <div className={"flex flex-col justify-start text-left"}>
            <PageHeader title={"Creative Coding"} subtitle={"Coding can be art"}/>
            <div className={"px-24 py-4"}>
                <h1>Featured project</h1>
                <P5Sketch className={"w-full h-[800px]"}/>

            </div>

        </div>
    )
}