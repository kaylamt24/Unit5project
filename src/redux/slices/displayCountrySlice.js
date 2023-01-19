import { createSlice } from "@reduxjs/toolkit";
import initialCountry from '../../assets/initialCountry'






export const displayedCountrySlice = createSlice({
    name: 'displayCountry',
    initialState: {
        value: initialCountry
    },
    reducers: {
        setDisplayedCountry: (state, action) => {
            state.value = action.payload
        },
        deleteDisplayCountry: (state) => {
            state.value = null
        }
    }
})

export const {setDisplayedCountry, deleteDisplayCountry} = displayedCountrySlice.actions

export const selectDisplay = (state) => {
    return (
        state.displayedCountry.value
    )
}

export default displayedCountrySlice.reducer

    // you can use the = for the assignment but the : is the correct one to use because you are defining key value pairs in objects. This is the correct way to define the reducer functions in Redux. 

    // setDisplayCountry = (state, action) => {
    //     state.value = action.payload
    // },
    // deleteDisplayCountry = (state) => {
    //     state.value = null


    //This one we are using = because we are assigning the value of a function to a variable. We are not defining a key value pair.

    // export const selectDisplay = (state) => {
    //     return (
    //         state.displayCountry.value
    //     )
    // }
