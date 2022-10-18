import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTheCountries, getCountryName } from "../redux/covidDataSlicer"
function CounterInput() {
    const countries = useSelector(state => state.covidData.countries);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTheCountries())
    }, [dispatch])

    function gettheCountry(e) {

        dispatch(getCountryName(e.target.value))
    }
    return (
        <div className='text-center'>

            <select className='mt-5' onChange={(e) => gettheCountry(e)}>
                <option value="global">Global</option>
                {countries.map(country => {
                    return (
                        <option value={country.name} key={country.name}>
                            {country.name}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default CounterInput