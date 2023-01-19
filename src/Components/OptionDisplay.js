import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { useDispatch } from "react-redux";
import { setDisplayedCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {

    let currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)

    const dispatch = useDispatch()


    return <div className="stack">{currentPotentials.map((e, i) => {
        return (<h2 key={e.name.official}
        className='country-option'
        onClick={() => {
            dispatch(setDisplayedCountry(currentPotentials[i]))
        }}
        >{e.name.common}</h2>)
    }
       
    )}</div>;
};

export default OptionDisplay;
