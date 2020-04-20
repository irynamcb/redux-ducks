const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

function increment() {
    return { type: INCREMENT }
}

function decrement() {
    return { type: DECREMENT }
}

function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

const store = Redux.createStore(counter)

document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(increment())
})