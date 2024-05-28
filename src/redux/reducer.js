// create our initial state
const initialState = {
    favColor: ''
}

// create our reducer function
const reducer = (state = initialState, action) => {
    // default state value MUST come first in parameter list
    // useDispatch() will return this reducer function
    // reducer determines what state it is currently working with,
    // then evaluates the action object provided by dispatch() to know how to change state

    switch (action.type) {
        case 'SET_COLOR': // -> dispatch({ type: 'SET_COLOR', payload: 'red' })
            let newState = {
                ...state,
                favColor: action.payload
            }
            return newState
            // typically, the above is returned in 1-line
        case 'CLEAR_COLOR':
            return {
                ...state,
                favColor: ''
            }
            // remember that the return value of a reducer function becomes the new Redux state value object
        default:
            console.log('hit default')
            return state
    }
}

export default reducer