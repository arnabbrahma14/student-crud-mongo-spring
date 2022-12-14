import React from 'react'

const TimeStyle = {
  fontSize: "18px",
  // float: "right",
  marginRight: "25px",
  fontFamily: "arial",
  letterSpacing: "2px"
}

const DateStyle = {
  fontSize: "18px",
  marginRight: "25px",
  fontFamily: "arial",
  letterSpacing: "2px"
}

class Clock extends React.Component {

  constructor() {
    super()
    this.state = {date : new Date()}
  }

  componentDidMount() {
    setInterval( () => {
      this.setState({date : new Date()})
    })
  }
  render() {
    return <>
    <div style = {{float: "right"}}>
        <p style={DateStyle}>Date: {this.state.date.toLocaleDateString() }</p>
        <p style={TimeStyle}>Time: {this.state.date.toLocaleTimeString()}</p>
    </div>
    </>
  }
}

export default Clock