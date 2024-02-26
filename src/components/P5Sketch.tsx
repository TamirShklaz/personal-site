import {ReactP5Wrapper} from "@p5-wrapper/react";
import {conway} from "../assets/sketches/conway.ts";

export type P5SketchProps = {
    className?: string;
}

export default function P5Sketch({className}: P5SketchProps) {


    return (
        <div className={className + " " + "w-full h-full"}>
            <ReactP5Wrapper sketch={conway}/>
        </div>
    )

}