import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

   handleClick= () => {
    this.setState({
        color: '#333'
      })
  }
  
  render() {
      console.log(this.props)
    return (
      <div className="cell" key={this.props.index} style={{backgroundColor: this.state.color}} onClick={this.handleClick}>

      </div>
    )
  }
  
}
