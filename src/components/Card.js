import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchCovids } from "../redux/covidDataSlicer"
import CountUp from 'react-countup';
function Card() {
    const country = useSelector(state => state.covidData.country)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCovids(country))
    }, [dispatch, country])
    const { confirmed, recovered, deaths, active } = useSelector(state => state.covidData)
    const lastUpsate = useSelector(state => state.covidData.lastUptade)
    return (
        <div className='row mt-5'>

            <div className='col    cards '>
                <div className='cardInfected '>
                    <p className='fw-bold'>Infected</p>
                    <p className=' number fw-bold'><CountUp start={0} end={confirmed} /></p>
                    <p ><span className='fw-bold '>Uptade:</span><span className='ms-2'>{Date(lastUpsate)}</span></p>

                    <p className='footer'>Number of infect cases of COVID-19</p>


                </div>
            </div>
            <div className='col   cards '>
                <div className=' cardRecovered '>
                    <p className='fw-bold'>Recovered</p>
                    <p className=' number fw-bold'><CountUp start={0} end={recovered} /></p>
                    <p><span className='fw-bold'>Uptade:</span><span className='ms-2'>{Date(lastUpsate)}</span></p>
                    <p>Number of recovered cases of COVID-19</p>
                </div>
            </div>
            <div className='col   cards '>
                <div className=' cardDeath'>
                    <p className='fw-bold'>Deaths</p>
                    <p className=' number fw-bold'><CountUp start={0} end={deaths} /></p>
                    <p><span className='fw-bold'>Uptade:</span><span className='ms-2'>{Date(lastUpsate)}</span></p>
                    <p>Number of deaths of COVID-19</p>
                </div>
            </div>
            <div className='col   cards'>
                <div className='cardActive'>
                    <p className='fw-bold'>Active</p>
                    <p className=' number fw-bold'><CountUp start={0} end={active} /></p>
                    <p><span className='fw-bold'>Uptade:</span><span className='ms-2'>{Date(lastUpsate)}</span></p>
                    <p>Number of active cases of COVID-19</p>
                </div>
            </div>
        </div>
    )
}

export default Card