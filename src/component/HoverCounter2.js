import React, { Component } from 'react'

export default class HoverCounter2 extends Component {
  render() {
      const {count, incrementCount} = this.props
    return (
      <div onMouseOver={()=> incrementCount(1)}>HoverCounter2 {count} times</div>
    )
  }
}