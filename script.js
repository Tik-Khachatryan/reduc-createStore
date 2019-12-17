// let initialState = {count: 0};

// function reducer(state, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return { count: state.count + 1 };
//         case "DECREMENT":
//             return { count: state.count - 1 };
//         default:
//             return state
//     }
//
// }


// class Store {
//     constructor(reducer, state) {
//         this._state = state;
//         this._reducer = reducer;
//         this._callBacks = [];
//     }
//     dispatch(action){
//        this._state = this._reducer(this._state, action);
//        this._callBacks.forEach(callback => callback())
//     }
//     get state(){
//         return this._state
//     }
//     subscribe(callBack){
//         this._callBacks.push(callBack)
//     }
//
// }
//
//
// const store = new Store(reducer, initialState);
//
// const incrementAction = {type: "INCREMENT"};
// const decrementAction = {type: "DECREMENT"};
//
//
// store.dispatch(incrementAction); // 1
// store.dispatch(decrementAction); // 0
//
// store.subscribe(() => {
//    console.log(store.state)
// });
//
// store.dispatch(decrementAction);
// store.dispatch(decrementAction);
// store.dispatch(decrementAction);
// store.dispatch(incrementAction);






//_____________________________________With function





let initialState = {count: 0};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            return state
    }

}


function createStore(reducer, initialState) {
    let state = initialState;
    let callBacks = [];

    function dispatch(action) {
        state = reducer(state, action);
        callBacks.forEach(callBack => callBack());
    }

    function getState() {
        return state
    }

    function subscribe(callBack) {
        callBacks.push(callBack);
    }

    dispatch({});

    return {
        dispatch,
        getState,
        subscribe
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({type: "INCREMENT"});