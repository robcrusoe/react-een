import ChartBar from "./ChartBar"
import './Chart.css';

const Chart = (props) => {
    const dpValues = props.dataPoints.map(dp => dp.value);
    const totalMaximum = Math.max(...dpValues);

    return (
        <div className='chart'>
            {props.dataPoints.map(dp => <ChartBar value={dp.value} maxValue={totalMaximum} label={dp.label} key={dp.label} />)}
        </div>
    );
};

export default Chart;