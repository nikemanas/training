import React, { Component } from 'react'
import PropTypes from 'prop-types'
<<<<<<< HEAD
//import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
=======

>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
import { Provider, connect } from 'react-redux'

// React component
class Counter extends Component {
<<<<<<< HEAD
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
=======
    render() {
        const { value, onIncreaseClick } = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
}

// Action
const increaseAction = { type: 'increase' }


<<<<<<< HEAD

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
=======
// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
<<<<<<< HEAD
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
=======
    return {
        onIncreaseClick: () => dispatch(increaseAction)
    }
>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
}

// Connected Component
const App = connect(
<<<<<<< HEAD
  mapStateToProps,
  mapDispatchToProps
=======
    mapStateToProps,
    mapDispatchToProps
>>>>>>> 4b904db2828b8a2d0efa0f6ccbe6301267b06952
)(Counter)

export default App;