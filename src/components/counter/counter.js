import React from "react"

import { connect } from "react-redux"
import { increment, decrement } from "../store/counter"

function Counter({ count, increment, decrement }) {
    return (
        <div >
            <h1>count {count}</h1>
            <button onClick={decrement}>decrement</button>
            <button onClick={increment}>increment</button>
        </div>
    );
}

const mapStateToProps = (state) => {

    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment(),2),
        decrement: () => dispatch(decrement(),2)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

