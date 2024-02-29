import {P5CanvasInstance, SketchProps} from "@p5-wrapper/react";

export type MultSkecthProps = SketchProps & {
    size: number
}
export const MultiplicationCirclesSketch = (p5: P5CanvasInstance<MultSkecthProps>) => {
    let factor = 0.6
    let hue = 0
    let padding = 100

    function getDistance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
    }

    function getAngle(x1: number, y1: number, x2: number, y2: number) {
        const deltaY = y2 - y1
        const deltaX = x2 - x1
        return p5.atan(deltaY / deltaX)
    }

    p5.setup = () => {
        p5.createCanvas(800, 800)
        p5.angleMode(p5.DEGREES)
        p5.colorMode(p5.HSB)
    }

    p5.updateWithProps = props => {
        if (props.size) {
            p5.resizeCanvas(props.size, props.size)
            if (props.size < 800) {
                padding = 48
            }
        }
    }

    p5.draw = () => {
        p5.background("white")
        p5.translate(p5.width / 2, p5.height / 2)
        const radius = p5.min(window.innerWidth / 2, window.innerHeight / 2) - padding
        const numPoints = 200
        const angle = 360 / numPoints
        p5.noFill()
        p5.stroke("gray")
        p5.circle(0, 0, radius * 2)


        for (let i = 0; i < numPoints; i++) {
            // get the x,y co-ord of the i-th point
            const x = radius * p5.cos(i * angle)
            const y = radius * p5.sin(i * angle)
            // circle(x,y,10)

            const destinationIndex = (i * factor) % numPoints

            // get the x,y co-ord of the destination point
            const xd = radius * p5.cos(destinationIndex * angle)
            const yd = radius * p5.sin(destinationIndex * angle)

            // distance between the two points
            const distance = getDistance(x, y, xd, yd)

            //angle of line joining the two points
            // const lineAngle = getAngle(x, y, xd, yd)

            // [0 -> 800] -> [0 -> 360]
            const distanceColor = p5.map(distance, 0, radius * 2, 0, 360)

            // [-90 -> 90] -> [0 -> 360]
            // const angleColor = p5.map(lineAngle, -90, 90, 0, 100)

            // Hue, Saturation, Brightness
            p5.stroke(distanceColor, 100, 100)
            p5.line(x, y, xd, yd)
        }


        factor += 0.005
        // For cyclical hue
        hue += 1
        hue = hue % 360

    }
}


// // Global variables
// let factor = 0.6
// let hue = 0
//
// function setup(){
//     createCanvas(window.innerWidth, window.innerHeight)
//     angleMode(DEGREES)
//     frameRate(50)
//     // HSB color mode
//     colorMode(HSB)
// }
//
// function draw(){
//     background("black")
//     Strive.translate(width/2, height/2)
//     let radius = min(window.innerWidth/2, window.innerHeight/2) - 100
//
//     // Make the number of points a function of mouseX
//     let numPoints = 200
//     // set a minimum value for the number of points
//     if (numPoints<50){
//         numPoints = 50
//     }
//     // angle between each point
//     let angle = 360/numPoints
//
//
//     noFill()
//     stroke("white")
//     circle(0,0,radius*2)
//
//     for(let i = 0; i < numPoints; i++){
//         // get the x,y co-ord of the i-th point
//         let x = radius*cos(i*angle)
//         let y = radius*sin(i*angle)
//         // circle(x,y,10)
//
//         let destinationIndex = (i * factor)%numPoints
//
//         // get the x,y co-ord of the destination point
//         let xd = radius*cos(destinationIndex*angle)
//         let yd = radius*sin(destinationIndex*angle)
//
//         // distance between the two points
//         let distance = getDistance(x,y,xd,yd)
//
//         //angle of line joining the two points
//         let lineAngle = getAngle(x,y,xd,yd)
//
//         // [0 -> 800] -> [0 -> 360]
//         let distanceColor = map(distance, 0, radius*2, 0,360)
//
//         // [-90 -> 90] -> [0 -> 360]
//         let angleColor = map(lineAngle, -90,90,0,100)
//
//         // Hue, Saturation, Brightness
//         stroke(distanceColor,100,100)
//         line(x,y,xd,yd)
//     }
//
//
//     factor += 0.01
//     // For cyclical hue
//     hue += 1
//     hue = hue%360
//
// }
//
// function getDistance(x1,y1,x2,y2){
//     return Math.sqrt((y2-y1)**2+(x2-x1)**2)
// }
//
// function getAngle(x1,y1,x2,y2){
//     let deltaY = y2-y1
//     let deltaX = x2-x1
//     return atan(deltaY/deltaX)
// }

