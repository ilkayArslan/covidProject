import { configureStore } from "@reduxjs/toolkit";
import covidDataSlicer from "./redux/covidDataSlicer"
export const store = configureStore({
    reducer: {
        covidData: covidDataSlicer
    }
})