import * as React from 'react'
import Draggable from './Draggable'
import { Position } from "../helpers/position";

interface Props {
    x: number
    y: number
    scale: number
    onChange?: (event: Position) => void
}

const Vertex = ({ x, y, scale, onChange } : Props) => (
  <Draggable scale={scale} x={x} y={y} onChange={onChange}>
    <rect x={-8} y={-8} width={16} height={16} />
  </Draggable>
);

export default Vertex