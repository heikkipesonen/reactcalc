import * as React from "react";

interface Props {
  x?: number;
  y?: number;
  unit: string;
  value: number;
  decimals?: number;
  separator?: string[1];
}

const FormattedMeasurement = ({
  unit,
  value,
  decimals,
  separator,
  ...position
}: Props) => (
  <text {...position}>
    {Number(value)
      .toFixed(decimals || 2)
      .replace(".", separator || ".")}
    {unit}
  </text>
);

export default FormattedMeasurement;
