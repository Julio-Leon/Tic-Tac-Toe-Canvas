import { useEffect, useRef } from 'react' 

import './Canvas.css'

export default function Canvas ({ CANVAS_HEIGHT_WIDTH, FACTOR }) {

    const canvasRef = useRef(null)

    const initialDraw = context => {
        context.fillStyle = '#000000'
        context.beginPath()

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                context.strokeRect(i*FACTOR, j*FACTOR, FACTOR, FACTOR)
            }
        }

    }

    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        initialDraw(context)
    }, [])

    return <canvas 
                ref={canvasRef} 
                width={CANVAS_HEIGHT_WIDTH} 
                height={CANVAS_HEIGHT_WIDTH} 
            />
}