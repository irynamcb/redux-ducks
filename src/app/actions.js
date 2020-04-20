// const increment = createAction('INCREMENT')
// const decrement = createAction('DECREMENT')

// const counter = createReducer(0, {
//     [increment.type]: state => sgtate + 1,
//     [decrement.type]: state => state - 1
// })

// const store = configureStore({
//     reducer: counter
// })

// document.getElementById('increment').addEventListener('click', () => {
//     store.dispatch(increment())
// })

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(counterSlice.actions.increment())
})