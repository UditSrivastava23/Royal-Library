import React, { createContext, useState, useReducer } from 'react'
export const Context = createContext()

const Provider = (props) => {
    let initialState = {
        name: 'Udit',
        rollno: '123'
    }
    let localProvider = (state, action) => {
        switch (action.type) {
            case 'NAME':
                return { ...state, name: action.payload }
            case 'ROLL':
                return { ...state, rollno: action.payload }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(localProvider, initialState)
    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export default Provider


// action = {
//     type : 'NAME',
//     payload: 'Aman'
// }