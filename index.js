import configureStore from "redux";

const initialState = [1,2,3]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add' : {
            return [
                ...state,
                state.push(action.payload)
            ]
            
        }

        case 'remove' : {
            return state.filter((item) => item !== action.payload)
            
        }



        default:
            return state
    }
}

const add = reducer(initialState, {type: 'add', payload: 4})


console.log(remove)
