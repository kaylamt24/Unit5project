import React from 'react'

import { useSelector } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice'
import App from '../App'

const Overview = () => {

    let currentDisplay = useSelector(selectDisplay)

    


  return (
    <div className='stack'>
        <h1>{currentDisplay.name.official}</h1>
        <h2>{currentDisplay.name.common}</h2>
        <br></br>
        <h3>Population: </h3>
        <td>{currentDisplay.population}</td>

        <tr>
            <h3>Capital :</h3>
           <td> {currentDisplay.capital.map((e) => (
                <td>{e}</td>
            ))}</td>
            </tr>

            <tr>
            <h3>Latitude & Longitude of Capital</h3>
            <td>{currentDisplay.capitalInfo.latlng[0]} & {currentDisplay.capitalInfo.latlng[1]}</td>
            </tr>

            <tr>
                <h3>Region : </h3>
                <td>{currentDisplay.region}</td>
            </tr>


            <tr>
                <h3>Independent : </h3>
                <td>{currentDisplay.independent ? 'true' : 'false'}</td>
            </tr>

            <tr>
            <h3>Landlocked </h3>
            <td>{currentDisplay.landlocked ? 'true' : 'false'}</td>
            </tr>

            <tr>
                <h3>Bordering Countries :</h3>
                <td>{currentDisplay.borders ? currentDisplay.borders.map((e, i, arr) => {
                    if (i + 1 === arr.length) {
                        return `${e}`
                    } else {
                        return `${e}, `
                    }}): 'Not Available'}
                </td>
            </tr>

            <tr>
                <h3>What side of the road do they drive their car? : </h3>
                <td>{currentDisplay.car.side}</td>
            </tr>


    </div>
  )
}

export default Overview


// The Official Name

// The Common Name

// The Countries it Borders

// The Capital City

// Current Population

// Continents it Sits on

// If it is Independent

// If it is Landlocked

// If it is a Member of the UN