import React from 'react'

class Counter extends React.Component {

    constructor() {
        super()

        this.state = {count : 0}
    }

    increment = () => {
        this.setState({count: this.state.count + 1})
    }

    decrement = () => {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return <>
            <p>Counter :  {this.state.count}</p>

            <button onClick = {this.increment}>Increment</button>
            <button onClick = {this.decrement}>decrement</button>
        </>
    }

}

export default Counter