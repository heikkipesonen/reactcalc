import {
    getMousePointer,
    getTouchPointer,
    getMouseWheel,
    delta,
    getPointerOnCanvas
} from './pointer'

describe('pointer', () => {
    it('should get mouse pointer from mouse event', () => {
        const e = new Event('mousemove')

        e.pageX = 1
        e.pageY = 1

        const point = getMousePointer(e)
        expect(point.x).toBe(1)
        expect(point.y).toBe(1)
    })

    it('should get touch pointer from touch event', () => {
        const e = new Event('touchmove')
        e.touches = [{
            pageX: 1,
            pageY: 1
        }]

        const point = getTouchPointer(e)
        expect(point.x).toBe(1)
        expect(point.y).toBe(1)
    })

    it('should get mouse wheen position', () => {
        const e = new Event('mousewheel')
        e.wheelDeltaY = 1

        const wheelMove = getMouseWheel(e)
        expect(wheelMove).toBe(1)
    })

    it('should get event distance between two events', () => {
        const e = {
            x: 0,
            y: 0,
            timeStamp: 0
        }

        const e2 = {
            x: 2,
            y: 2,
            timeStamp: 1
        }

        const dist = delta(e, e2)
        expect(dist.x).toBe(2)
        expect(dist.y).toBe(2)
        expect(dist.timeStamp).toBe(1)
        expect(dist.velocity).toBe(Math.hypot(dist.x, dist.y) / dist.timeStamp)
    })

    it('should get pointer position on canvas', () => {
        const pointer = {
            x: 1,
            y: 1
        }

        const canvasPosition = {
            x: 0,
            y: 0,
            scale: 1
        }

        const pointerOnCanvas = getPointerOnCanvas(pointer, canvasPosition)
        expect(pointerOnCanvas.x).toBe(1)
        expect(pointerOnCanvas.y).toBe(1)
    })

    it('should get pointer position on canvas, when canvas has been moved', () => {
        const pointer = {
            x: 1,
            y: 1
        }

        const canvasPosition = {
            x: 100,
            y: 100,
            scale: 1
        }

        const pointerOnCanvas = getPointerOnCanvas(pointer, canvasPosition)
        expect(pointerOnCanvas.x).toBe(-99)
        expect(pointerOnCanvas.y).toBe(-99)
    })

    it('should get pointer position on canvas, when canvas has been moved and scaled', () => {
        const pointer = {
            x: 1,
            y: 1
        }

        const canvasPosition = {
            x: 100,
            y: 100,
            scale: 0.1
        }

        const pointerOnCanvas = getPointerOnCanvas(pointer, canvasPosition)
        expect(pointerOnCanvas.x).toBe(-990)
        expect(pointerOnCanvas.y).toBe(-990)
    })
})