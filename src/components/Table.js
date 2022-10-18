import { useEffect } from 'react'
import { Line, Bar } from "react-chartjs-2"
import { useSelector, useDispatch } from "react-redux";
import { fethDaily } from '../redux/covidDataSlicer';
import {
    Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController,
    LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale,
    LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip
} from 'chart.js';

Chart.register(ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController,
    PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale,
    RadialLinearScale, TimeScale, TimeSeriesScale, Decimation, Filler, Legend, Title, Tooltip);
function Table() {
    const daily = useSelector(state => state.covidData.daily);
    const { covid, confirmed, recovered, deaths, active } = useSelector(state => state.covidData);
    const country = useSelector(state => state.covidData.country)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fethDaily())

    }, [dispatch])
    let labels = [], infected = [], deaths2 = [];

    if (daily !== "") {
        labels = daily.map((item) => item.reportDate);
        infected = daily.map((item) => item.totalConfirmed);
        deaths2 = daily.map((item) => item.deaths.total);
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                {/* Bar chart******************** */}
                <p className='text-2xl mt-5'>Selected Country Results</p>
                {
                    (country && country !== "global") ? (<Bar data={{
                        labels: ["Infected", "Deaths", "Active"],
                        datasets:
                            [{
                                label: "People",
                                backgroundColor: ["rgba(102, 179, 255, .5)", "rgba(237, 178, 178, .5)", "rgba(237, 199, 152, .5)"],
                                hoverBackgroundColor: ["rgba(0, 0, 255, .5)", "rgba(255, 0, 0, .5)", "rgba(242, 234, 0, .5)"],
                                data: [confirmed,
                                    deaths,
                                    confirmed - deaths]
                            }]
                    }}
                        className="max-w-3xl max-h-96 m-4"
                    />) : null
                }


                {/* Line chart******************  */}
                <p className='text-2xl mt-5'>Daily Global Cases</p>
                {
                    (!country || country === "global") ? (<Line data={{
                        labels: labels,
                        datasets: [
                            {
                                data: infected,
                                label: "Infected",
                                backgroundColor: "blue",
                            },
                            {
                                data: deaths2,
                                label: "Deaths",
                                backgroundColor: "red",
                            }],
                    }}
                        className="max-w-3xl max-h-96 m-4"
                    />) : null
                }
            </div>
        </div>
    )
}

export default Table