import * as React from 'react'

interface Props {
    x?: number
    y?: number
    unit: string
    value: number
    decimals?: number
}

const FormattedMeasurement = ({
  unit,
  value,
  decimals,
  ...position
}: Props) => (
    <text {...position}>
        {Math.round(Math.pow(10, decimals || 2) * value) / Math.pow(10, decimals || 2) }
        {unit}
    </text>
);

export default FormattedMeasurement