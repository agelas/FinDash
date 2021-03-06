import {FlexibleWidthXYPlot, LineMarkSeries, XAxis, YAxis} from 'react-vis';

export interface GraphProps {
    payPeriods: Array<{x: number, y: number}>,
    paySpent: Array<{x: number, y: number}>
}

export default function IncomeLineGraph(props: GraphProps) {

    var ticks = props.payPeriods.map(t => t.x)

    return (
        <FlexibleWidthXYPlot height={300} >
            <LineMarkSeries data={props.payPeriods} style={{ fill: 'none', strokeWidth: 3}}/>
            <LineMarkSeries data={props.paySpent} color="pink" curve={'curveMonotoneX'} style={{ fill: 'none', strokeWidth: 3, }}/>
            
            <XAxis title="Pay Period" tickValues={ticks}/>
            <YAxis />
        </FlexibleWidthXYPlot>
    )
}