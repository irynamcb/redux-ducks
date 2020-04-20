const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

// function increment() {
//     return { type: INCREMENT }
// }

// function decrement() {
//     return { type: DECREMENT }
// }

function counter(state = 0, action) {
    switch (action.type) {
        case increment.type:
            return state + 1
        case decrement.type:
            return state - 1
        default:
            return state
    }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment())
})