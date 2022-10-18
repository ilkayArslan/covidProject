import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchTheCountries = createAsyncThunk("getthecountries", async () => {
    const res = await fetch(`https://covid19.mathdro.id/api/countries`)
        .then(e => e.json())
        .then(e => e.countries)
    return res;
});
export const fetchCovids = createAsyncThunk("gettheCovids", async (country) => {
    if (!country || country === "global") {
        const covids = await fetch(`https://covid19.mathdro.id/api/`)
            .then(e => e.json())
        return covids;
    } else {

        const covids = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
            .then(e => e.json())
        return covids;
    }

})

export const fethDaily = createAsyncThunk("getfetchdaily", async () => {
    const res = await fetch("https://covid19.mathdro.id/api/daily")
    return res.json()
})
const covidDataSlicer = createSlice({
    name: "covidData",
    initialState: {
        countries: [],
        country: "",
        covid: "",
        confirmed: "",
        recovered: "",
        deaths: "",
        active: "",
        lastUptade: "",
        daily: []
    },
    reducers: {
        getCountryName: (state, action) => {
            state.country = action.payload
        }
    },
    extraReducers: {
        [fetchTheCountries.fulfilled]: (state, action) => {
            state.countries = action.payload;
        },
        [fetchCovids.fulfilled]: (state, action) => {
            state.covid = action.payload;
            state.confirmed = action.payload.confirmed.value;
            state.recovered = action.payload.recovered.value;
            state.deaths = action.payload.deaths.value;
            state.active = state.confirmed - state.deaths;
            state.lastUptade = action.payload.lastUpdate
        },
        [fethDaily.fulfilled]: (state, action) => {
            state.daily = action.payload
        }
    }

})

export default covidDataSlicer.reducer;
export const { getCountryName } = covidDataSlicer.actions