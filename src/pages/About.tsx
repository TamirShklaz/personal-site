import PageHeader from "../components/PageHeader.tsx";

export default function About() {
    return (
        <div className={"flex flex-col justify-start text-left mb-32 h-full"}>
            <PageHeader title={"About Me"} subtitle={""}/>

            <div className={"px-4 mt-8 lg:px-24"}>
                <p>
                    The thing I am most curious about is the nature of consciousness and how a 1.4kg blob of neurons,
                    tissues and blood 🧠 results in the experience of a chocolate lava cake tasting so good!
                    <br/><br/>
                    This is called the
                    <a href={"https://en.wikipedia.org/wiki/Hard_problem_of_consciousness"} target={"_blank"}
                       className={"font-medium underline"}>
                        &nbsp;hard problem of
                        consciousness
                    </a>

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
                </p>

            </div>
        </div>
    )
}