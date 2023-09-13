import React, { useContext } from 'react'
import { Context } from '../context/Provider'

const Home = (props) => {
    const { state, dispatch } = useContext(Context)
    return (
        <div onClick={() => { dispatch({ type: 'NAME', payload: 'Aman' }); dispatch({ type: 'ROLL', payload: '456' }) }}>
            {props.children}
            {state.name}
            {state.rollno}
        </div>
    )
}

export default Home
