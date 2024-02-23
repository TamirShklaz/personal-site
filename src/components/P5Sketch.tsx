import {useEffect} from "react";

export type P5SketchProps = {
    className?: string;
}

export default function P5Sketch({className}: P5SketchProps) {
    useEffect(() => {
        const container = document.getElementById("sketch-container") as HTMLIFrameElement;
        const script = document.createElement("script");
        script.src = window.location.origin + "/personal-site/public/sketches/conway.js";
        script.async = true;
        container?.contentWindow?.document.body.appendChild(script)
        return () => {
            container?.contentWindow?.document.body.removeChild(script)
        }
    }, [])

    return (
        <div className={className + " " + "w-full h-full"}>
            <iframe id={"sketch-container"} src={"/personal-site/public/sketches/p5js.html"}
                    className={"w-full h-full overflow-hidden"} scrolling={"no"}/>
        </div>
    )

}