import React, { Component } from 'react'
import './App.css'
import First, { Second } from './components/learning/firstcomponent'
import Third from './components/learning/thirdcomponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        <TodoApp></TodoApp>
      </div>
    );
  }
}




class LearningComponents extends Component {
  render() {
    return (
      <div className="learningComponents">
        My Hello World
        <First></First>
        <Second></Second>
        <Third></Third>
      </div>
    );
  }
}



export default App;
