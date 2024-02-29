import PageHeader from "../components/PageHeader.tsx";
import yoga_img from "../../public/yoga_ttc.jpeg"
import dancing_img from "../../public/dancing.jpg"
import {ReactP5Wrapper} from "@p5-wrapper/react";
import {MultiplicationCirclesSketch} from "../assets/sketches/multiplication_circles.ts";
import {useWindowWidth} from "../utils/hooks/useWindowWidth.ts";

export default function About() {
    const width = useWindowWidth()

    return (
        <div className={"flex flex-col justify-start text-left mb-32 h-full"}>
            <PageHeader title={"About Me"} subtitle={""}/>

            <div className={"px-4 mt-8 lg:px-24"}>
                <p>
                    The thing I am most curious about is the nature of consciousness, how on earth does a 1.4kg blob of
                    neurons,
                    tissues and blood (i.e: 🧠) create the profound experience of bliss I experience when eating
                    chocolate lava cake?
                    <br/><br/>
                    This is called the
                    <a href={"https://en.wikipedia.org/wiki/Hard_problem_of_consciousness"} target={"_blank"}
                       className={"font-medium underline"}>
                        &nbsp;hard problem of
                        consciousness
                    </a>
                    &nbsp;- how do subjective experiences arise from physical processes in the brain?
                    <br/><br/>
                    Beyond being an intellectual thought experiment, this problem underlies my core values and
                    philosophy in
                    life.
                    <br/><br/>
                    Everything we have experienced, are currently experiencing, and will ever experience occurs in our
                    conscious awareness. Our goals, pain, trauma, and joy all occur in awareness.
                    <br/><br/>

                    <a href={"https://www.samharris.org/"} target={"_blank"}
                       className={"font-medium underline"}>
                        Sam Harris
                    </a>
                    ,a figure
                    who
                    initially kindled my fascination in the nature of mind put it perfectly when he said:

                    <blockquote className={"border-l-2 border-gray-400 pl-4 text-gray-700 mt-4"}>
                        "How we pay attention to the present moment largely determines the character of our experience
                        and, therefore, the quality of our lives."
                    </blockquote>

                    <br/><br/>
                    This has manifested for me an intense passion for meditation, mindfulness and yoga (of which I’m a
                    practising teacher)
                    <br/><br/>

                    Additionally, it’s made me fascinated by epistemology (The theory of knowledge and how we learn).
                    I’m constantly pushing myself to learn new things (specifically things that get me out of my comfort
                    zone) and, in the process, paying attention to the subtle experiences that occur when learning
                    something new such that I can learn the next skill better or, more importantly, teach it to others.
                    <br/><br/>
                    Outside of my usual focus on tech and startups, I’m learning about
                </p>
                <h3 className={"mt-4 font-medium text-2xl mb-2"}>Yoga, Meditation & Mindfulness</h3>
                <img className={"rounded-2xl max-h-[512px]"} src={yoga_img}/>
                <p className={"text-sm text-gray-500 mt-1"}>Completed my Yoga Teacher Training in 2024</p>
                <h3 className={"mt-4 font-medium text-2xl mb-2"}>Latin Partner Dance - Bachata</h3>

                <img className={"rounded-2xl max-h-[512px]"} src={dancing_img}/>

                <h3 className={"mt-4 font-medium text-2xl mb-2"}>Creative Coding</h3>
                <p className={"text-gray-700 mb-8"}>Creative coding is the intersection between coding, math and
                    art. Watch this <a className={"font-medium underline"}
                                       href={"https://youtu.be/JA2raBALN1w?si=clonoyIvnSF-aJVA"}
                                       target={"_blank"}>video</a> to learn how to code this.</p>
                <ReactP5Wrapper sketch={MultiplicationCirclesSketch} size={width > 900 ? 800 : width - 64}/>
                <p className={"mt-2 text-gray-600"}>

                </p>

            </div>
        </div>
    )
}