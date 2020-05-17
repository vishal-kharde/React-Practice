
import React, { Component } from 'react';


export default class First extends Component {
    render() {
      return (
        <div className="first">
          First Component as separate module
        </div>
      );
    }
  }


  export function Second() {

    return (
      <div className="second">
        Second Component ( Its a Function component)
      </div>
    );
  
  }
  