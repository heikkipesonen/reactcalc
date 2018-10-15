import * as React from 'react'
import Line, { Props as LineProps} from './Line'
import { Material, getMass } from 'src/data/Material';
import { getMaxMoment } from "src/helpers/calc";
import { Newton, Kg, Millimeters } from '../helpers/units'
import FormattedMeasurement from './FormattedMeasurement'

interface Props extends LineProps {
    material: Material
}

class SteelBeam extends React.PureComponent<Props> {

    public get dx() {
        const { x1, x2 } = this.props;
        return x2 - x1
    }

    public get dy() {
        const { y1, y2 } = this.props;
        return y2 - y1
    }

    public get length(): Millimeters {
        const { dx, dy } = this
        return Math.hypot(dx, dy)
    }

    public get mass (): Kg {
        const { material: { mass } } = this.props
        return getMass(this.length, mass)
    }

    public get maxMoment(): Newton {
        const { material } = this.props;
        return getMaxMoment(material, this.length)
    }

    public render () {
        const { material, ...props } = this.props
        const { mass, length, maxMoment } = this
        return (
            <g>
                <FormattedMeasurement unit="kg" value={mass} />
                <FormattedMeasurement y={15} unit="mm" value={length} />
                <FormattedMeasurement y={30} unit="Nm" value={maxMoment} />
                <Line {...props} />;
            </g>
        )
    }
}

export default SteelBeam