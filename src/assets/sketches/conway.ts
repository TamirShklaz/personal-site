import {P5CanvasInstance, Sketch} from "@p5-wrapper/react";

export const conway: Sketch = (p5: P5CanvasInstance) => {
    p5.setup = () => p5.createCanvas(600, 600)

    p5.draw = () => {
        p5.background("red")
        p5.circle(p5.mouseX, p5.mouseY, 100)
    }

}